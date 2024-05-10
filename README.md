# nginx-to-discord
An ip logger, that pushes all requests that your nginx handles to a discord webhook. 
Now featuring Bot detection!
AbuseDB reporting system coming soon woop woop
# Installation
- git clone the repo
- npm install node-fetch
- vim watcher.js
  - edit line 42, and add your webhook url
- node watcher.js to run the server.
# Tips
I recommend adding the snippet from nginx.conf in your own nginx.conf for better readability
