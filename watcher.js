// todo:   - Weight system using calculations
//         - split reports into abuse and scanners
//         - user settable confidence calculation and threshold
//Abuse confidence increase with:
//         - > 10 %
//         - > 10 /
//         - HTTP 1.1
//         - go / python / curl in agent
//


const fs = require('fs'); const { exec } = require('child_process');
import("node-fetch")
const fileToWatch = '/etc/nginx/logs/access.log';


function checkForBackslash(str) {

let count = 0;
for (let i = 0; i < str.length; i++) {
    if (str[i] === '\\') {
        count++;
    }

    if (str[i] === '/') {
        count++;
    }
}

console.log(count);
return count;


}

function extractData(inputString, startSubstr, endSubstr) {

        const startIndex = inputString.indexOf(startSubstr) + startSubstr.length; const endIndex = inputString.indexOf(endSubstr);

        if (startIndex >= 0 && endIndex >= 0) { const extractedString = inputString.substring(startIndex, endIndex); return(extractedString); } else { console.log("Substrings not found in input string"); };

}

fs.watch(fileToWatch, (event, filename) => { console.log("unk");

exec("tail -n 1 /etc/nginx/logs/access.log", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);


var paramsUser = {
    username: "DataWatch.",
    avatar_url: "",
    content: "",
    embeds: [
        {
            "title": "New Request:",
            "color": 16384229,
            "thumbnail": {
                "url": "",
            },
            "fields": [
                {
                    "name": "",
                    "value": stdout,
                    "inline": true
                }
            ]
        }
    ]
}

var paramsBot = {
    username: "DataWatch.",
    avatar_url: "",
    content: "",
    embeds: [
        {
            "title": "Likely Bot traffic detected:",
            "color": 16711680,
            "thumbnail": {
                "url": "",
            },
            "fields": [
                {
                    "name": "",
                    "value": stdout,
                    "inline": true
                }
            ]
        }
    ]
}

    if(stdout.includes("444") | stdout.includes("404") | stdout.includes("400") | (checkForBackslash(stdout) > 12) ) {

        const d = new Date();

        let year = d.getFullYear();
        let day = d.getDate();
        let hours = d.getHours();
        let seconds = d.getSeconds();

        var inputIP = '127.0.0.2'

        var inputString = `${stdout}`

        var submitIP = extractData(inputString, "IP: ", "|A|")

        var submitUA = extractData(inputString, "UA: ", "|F|")

        exec(`curl https://api.abuseipdb.com/api/v2/report --data-urlencode "ip=${submitIP}" -d categories=14 --data-urlencode 'comment= web scraper with user agent: ${submitUA}' --data-urlencode "timestamp=" -H "Key: ABUSEOIPDB_KEY" -H "Accept: application/json"`, (error, stdout, stderr) => {console.log(`stdout: ${stdout}`);});

        var params = paramsBot;
    }
    else {
        var params = paramsUser;
    }

        fetch('WEBHOOK_TOKEN', {
        method: "POST",
        headers: {
                'Content-type': 'application/json'
        },
        body: JSON.stringify(params)
        }).then(res => {

        })

});
});

