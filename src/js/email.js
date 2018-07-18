'use strict';
var http = require('http');
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'qq',
    auth: {
        user: '947525667@qq.com',
        pass: 'qudcmobxovllbdcg'
    }
});
var date = "";
var temp = "";
var humidity = "";
var url = "http://v.juhe.cn/weather/index?format=2&cityname=%E8%8B%8F%E5%B7%9E&key=5d6e8beb31034732d968c3dab135b7a4"

http.get(url, function (res) {
    var jsonData = '';
 
    res.on("data", function (data) {
        jsonData += data.toString('utf8');
    })
    res.on("end", function () {
        jsonData = JSON.parse(jsonData);
        humidity = jsonData.result.sk.humidity;
        temp = jsonData.result.sk.temp;
        date = jsonData.result.sk.time;
    })
})

//unicode symbols?
let mailOptions = {
    from: '"Weather Foreast" <947525667@qq.com>',
    to: '499921207@qq.com',
    subject: 'Weather Foreast',
    text: 'Weather Foreast',
    html: 
        `<h1 style="text-align: center;">`+date+`</h1>
        <h1 style="text-align: center;">`+temp+`</h1>
        <h1 style="text-align: center;">`+humidity+`</h1>`
};


transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }

    console.log('Message %s send： %s', info.messageId, info.response);
});
