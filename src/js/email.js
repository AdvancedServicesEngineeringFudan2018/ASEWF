'use strict';
var http = require('http');
const nodemailer = require('nodemailer');
//创建一个传输对象(默认使用smtp协议)
let transporter = nodemailer.createTransport({
    service: 'qq',//邮件服务
    auth: {
        user: '947525667@qq.com',//发送人地址
        pass: 'qudcmobxovllbdcg'//发生人密码
    }
});
var date = "";
var temp = "";
var humidity = "";
var url = "http://v.juhe.cn/weather/index?format=2&cityname=%E8%8B%8F%E5%B7%9E&key=5d6e8beb31034732d968c3dab135b7a4"

http.get(url, function (res) {//通过上面传过来的url来获取该天气信息的数据
    var jsonData = '';
 
    res.on("data", function (data) {
        jsonData += data.toString('utf8');//保存天气信息的数据
    })
    res.on("end", function () {
        jsonData = JSON.parse(jsonData);//因为获取到的天气信息数据是JSON格式的，通过JSON.parse函数进行解析，得到一个对象
        humidity = jsonData.result.sk.humidity;
        temp = jsonData.result.sk.temp;
        date = jsonData.result.sk.time;
    })
})

//unicode symbols?
let mailOptions = {
    from: '"Weather Foreast" <947525667@qq.com>',//发生地址,可以随便写 两个小红旗处好像必须相同
    to: '499921207@qq.com',//接收人列表
    subject: 'Weather Foreast',//主题
    text: 'Weather Foreast',//邮件内容--纯文本
    html: 
        `<h1 style="text-align: center;">`+date+`</h1>
        <h1 style="text-align: center;">`+temp+`</h1>
        <h1 style="text-align: center;">`+humidity+`</h1>`
};

//使用传输对象发送邮件
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }

    console.log('Message %s send： %s', info.messageId, info.response);
});
