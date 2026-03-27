const tokenData = {
    "msg": {
        "point": "100", 
        "uid": "t1"
    }, 
    "sig": "SkOmDjbl1bIuizJ5SmGEIMYUuADUPAnNllCMUAHWREwD+6+QzHZKUXt+ulpGpH/SiQOQ9Cw=="
};

const canvasEl = document.getElementById('qr-canvas');

const text =  JSON.stringify(tokenData);

let jsonString;

for(let i = 0; i <= 2; i++){
    jsonString += text;
}

console.log(jsonString)

const options = {
    version: 12,
    errorCorrectionLevel: 'L',
    margin: 4,
    isResponsive: true
};

//const qrcode = new QRCode(options)
//qrcode.

QRCode.toCanvas(canvasEl, jsonString, options);