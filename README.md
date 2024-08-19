# UnBot - Bot protection
UnBot is a lightweight nodejs application, that detects bots through the way they scan your website, and logs bot ips and more to a discord webhook.

# Features:
- Automated Bot detection
- Automated Bot reporting to abuseIPDB
- Request Logging
- Directory traversal attack detection

# Installation
- git clone the repo
- npm install node-fetch
- vim watcher.js
  - edit line 95, and add your webhook url
  - edit line 88, and add your AbuseIPDB key
- add website.conf to your websites config!
- node watcher.js to run the server.
# Tips
I recommend adding the snippet from nginx.conf in your own nginx.conf for better readability
# Coming soon
- splitting detection into abuse and crawlers
- better datalogging and reporting
- confidence based reporting
