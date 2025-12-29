let lastAlertTime = 0;
let debounceTimer = null;
const ALERT_COOLDOWN = 10000; // 10 seconds before it can alert you again

const audio = new Audio(chrome.runtime.getURL("alert.mp3"));

function wildcardToRegex(pattern) {
  return new RegExp(
    "^" +
      pattern
        .toLowerCase()
        .replace(/\./g, "\\.")
        .replace(/\*/g, ".*") +
      "$"
  );
}

function isExcludedDomain(excludedPatterns) {
  const hostname = window.location.hostname.toLowerCase();
  return excludedPatterns.some(pattern => {
    const regex = wildcardToRegex(pattern.trim());
    return regex.test(hostname);
  });
}

function scanPage(addresses) {
  if (addresses.length === 0) return;

  // Check if we are in the cooldown period
  const now = Date.now();
  if (now - lastAlertTime < ALERT_COOLDOWN) return;

  const bodyText = document.body.innerText.toLowerCase();
  const inputs = Array.from(document.querySelectorAll('input, textarea'))
    .map(el => el.value.toLowerCase())
    .join(' ');

  const combinedText = bodyText + " " + inputs;

  for (const address of addresses) {
    if (address && combinedText.includes(address)) {
      lastAlertTime = now; // Set the cooldown
      
      audio.play().catch(() => {});
      
      // Small delay so audio can start before the alert freezes the browser
      setTimeout(() => {
        alert(`⚠️ Old address detected: "${address}"`);
      }, 100);
      
      break;
    }
  }
}

chrome.storage.sync.get(["oldAddresses", "excludedDomains"], (data) => {
  const addresses = (data.oldAddresses || "")
    .split(",")
    .map(a => a.trim().toLowerCase())
    .filter(Boolean);

  const excludedDomains = (data.excludedDomains || "")
    .split(",")
    .map(d => d.trim().toLowerCase())
    .filter(Boolean);

  if (isExcludedDomain(excludedDomains)) return;

  // Initial Scan
  scanPage(addresses);

  // Watch for page changes
  const observer = new MutationObserver(() => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => scanPage(addresses), 1000);
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  // Watch for typing
  document.addEventListener('input', (event) => {
    if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => scanPage(addresses), 1000);
    }
  });
});