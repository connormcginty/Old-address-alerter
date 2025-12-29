🏠 Old Address Alerter
A lightweight Chrome Extension that protects you from accidentally using old addresses. It monitors the websites you visit and alerts you if it detects a specific "old address" keyword—whether it's already on the page or if you've just typed it into a form.

✨ Features
Real-time Detection: Scans page text as you browse.

Form Protection: Alerts you the moment you type an old address into an input field or textarea.

Audio Alerts: Plays a custom sound (alert.mp3) when a match is found.

Smart Cooldown: Prevents annoying alert loops by waiting 10 seconds between notifications.

Domain Whitelisting: Easily exclude specific websites (like Google or Amazon) where you don't want the extension to run.

Customizable Keywords: Manage your list of old addresses and excluded domains via a simple popup menu.

🛠️ Installation (Developer Mode)
Since this is a custom extension not yet on the Web Store, follow these steps to add it to Chrome:

Download/Clone this repository to your computer.   

Open Google Chrome and navigate to chrome://extensions/.   

In the top-right corner, toggle Developer mode to ON.   

Click the Load unpacked button that appears.

Select the folder containing the extension files.   

Optional: Pin the extension to your toolbar for easy access to the settings.

[!IMPORTANT] Make sure your alert.mp3 file is in the root folder alongside manifest.json for the audio alerts to work!

🚀 How to Use
Click the extension icon in your toolbar.

In the Old Address Keywords box, enter the addresses or road names you want to flag (separated by commas).

In the Excluded Domains box, add any sites you want to ignore (e.g., google.com).

Click Save.

Note: Chrome requires you to click anywhere on a webpage at least once after opening it before it will allow the extension to play the alert sound.

📂 Project Structure
manifest.json: The extension configuration and permissions.

content.js: The "brain" that monitors page content and form inputs.

popup.html/js: The user interface for managing your settings.

alert.mp3: The audio file played during alerts.🏠 Old Address Alerter
A lightweight Chrome Extension that protects you from accidentally using old addresses. It monitors the websites you visit and alerts you if it detects a specific "old address" keyword—whether it's already on the page or if you've just typed it into a form.

✨ Features
Real-time Detection: Scans page text as you browse.

Form Protection: Alerts you the moment you type an old address into an input field or textarea.

Audio Alerts: Plays a custom sound (alert.mp3) when a match is found.

Smart Cooldown: Prevents annoying alert loops by waiting 10 seconds between notifications.

Domain Whitelisting: Easily exclude specific websites (like Google or Amazon) where you don't want the extension to run.

Customizable Keywords: Manage your list of old addresses and excluded domains via a simple popup menu.

🛠️ Installation (Developer Mode)
Since this is a custom extension not yet on the Web Store, follow these steps to add it to Chrome:

Download/Clone this repository to your computer.   

Open Google Chrome and navigate to chrome://extensions/.   

In the top-right corner, toggle Developer mode to ON.   

Click the Load unpacked button that appears.

Select the folder containing the extension files.   

Optional: Pin the extension to your toolbar for easy access to the settings.

[!IMPORTANT] Make sure your alert.mp3 file is in the root folder alongside manifest.json for the audio alerts to work!

🚀 How to Use
Click the extension icon in your toolbar.

In the Old Address Keywords box, enter the addresses or road names you want to flag (separated by commas).

In the Excluded Domains box, add any sites you want to ignore (e.g., google.com).

Click Save.

Note: Chrome requires you to click anywhere on a webpage at least once after opening it before it will allow the extension to play the alert sound.

📂 Project Structure
manifest.json: The extension configuration and permissions.

content.js: The "brain" that monitors page content and form inputs.

popup.html/js: The user interface for managing your settings.

alert.mp3: The audio file played during alerts.
