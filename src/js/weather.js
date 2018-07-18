/**
 * Created by Turne on 2017/2/15.
 */
 
var http =  require('http');
var url = "";
// var city = require("./cityData");
 
process.stdin.setEncoding('utf8');//设置用户输入数据的编码
 
console.log("请输入您要查询的城市名：");
process.stdin.on('readable',function () {
    //console.log("请输入您要查询的城市名：");
    var chunk = process.stdin.read();//获取用户的查询输入（标准输入流）
 
    if(chunk !== null)
    {
        // chunk = chunk.trim();//去掉字符串的前后空格
        // var citycode = city[chunk];
        //console.log(typeof (citycode));
        // if(typeof (citycode) === "string") {//判断用户当前的输入是否正确
        //     // url = "http://www.weather.com.cn/data/cityinfo/" + citycode + ".html"
        //     url = "http://v.juhe.cn/weather/index?format=2&cityname=%E8%8B%8F%E5%B7%9E&key=5d6e8beb31034732d968c3dab135b7a4"
        //     getCityData(url);
        // }
        // url = "http://v.juhe.cn/weather/index?format=2&cityname=%E8%8B%8F%E5%B7%9E&key=5d6e8beb31034732d968c3dab135b7a4"
            url = "http://v.juhe.cn/weather/index?format=2&cityname=%E8%8B%8F%E5%B7%9E&key=5d6e8beb31034732d968c3dab135b7a4"
            getCityData(url);


        // url = "http://47.96.227.249/result.json"

    }
    // else
    // {
    //     console.log("没有找到！" + '\n');
    //     console.log("请输入您要查询的城市名：");
    // }
})
 
function getCityData(url) {
    http.get(url, function (res) {//通过上面传过来的url来获取该天气信息的数据
        var jsonData = '';
 
        res.on("data", function (data) {
            jsonData += data.toString('utf8');//保存天气信息的数据
        })
        res.on("end", function () {
            jsonData = JSON.parse(jsonData);//因为获取到的天气信息数据是JSON格式的，通过JSON.parse函数进行解析，得到一个对象
            //输出天气的信息
            console.log("humidity:" + jsonData.result.sk.humidity);
            console.log("tempm:" + jsonData.result.sk.temp);
            console.log("date:" + jsonData.result.sk.time + '\n');
        })
    })
}
 
 
