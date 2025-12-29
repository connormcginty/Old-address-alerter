# 🏠 Old Address Alerter
**Never accidentally use your old address again.** Old Address Alerter is a lightweight Chrome extension that monitors both page content and your typing. If an old address is detected, it triggers a custom audio alert and a browser notification.

---

### ✨ Key Features
* 🔍 **Dual-Scanning:** Monitors visible page text AND real-time form inputs.
* 🔊 **Audio Alerts:** Plays `alert.mp3` immediately upon detection.
* ⏱️ **Anti-Spam:** 10-second cooldown between alerts to stay helpful, not annoying.
* 🛡️ **Exclusion List:** Whitelist specific domains (like Google or Amazon) via settings.

---

### 🛠️ Installation

1. **Clone/Download** this repo to your local machine.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable **Developer Mode** (top right toggle).
4. Click **Load unpacked** and select this project folder.
5. **Important:** Ensure your `alert.mp3` file is in the root folder.

---

### 🚀 Quick Start
1. Click the **Extension Icon** to open settings.
2. Enter your **Old Address Keywords** (e.g., *123 High Street*).
3. (Optional) Add **Excluded Domains** (e.g., *google.com*).
4. Click **Save**.
5. **Note:** Browsers require you to click anywhere on a page once before audio can play!

---

### 📂 File Structure
* `manifest.json` - Permissions & Config
* `content.js` - Logic & Monitoring
* `popup.html/js` - Settings UI
* `alert.mp3` - Your custom notification sound
