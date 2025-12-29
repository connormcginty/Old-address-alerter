document.addEventListener("DOMContentLoaded", () => {
  const addresses = document.getElementById("addresses");
  const domains = document.getElementById("domains");
  const save = document.getElementById("save");

  chrome.storage.sync.get(
    ["oldAddresses", "excludedDomains"],
    (data) => {
      addresses.value = data.oldAddresses || "";
      domains.value = data.excludedDomains || "";
    }
  );

  save.addEventListener("click", () => {
    chrome.storage.sync.set(
      {
        oldAddresses: addresses.value.trim(),
        excludedDomains: domains.value.trim()
      },
      () => {
        save.textContent = "Saved!";
        setTimeout(() => (save.textContent = "Save"), 800);
      }
    );
  });
});
