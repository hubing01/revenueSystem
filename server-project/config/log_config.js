var path = require('path');

//日志根目录
var baseLogPath = path.resolve(__dirname,'../logs')

//错误日志输出完整路径
var errorPath = '/error';
var errorFileName = 'error';
var errorLogPath = baseLogPath + errorPath + '/' + errorFileName;

//响应日志输出完整路径
var responsePath = '/response';
var responseFileName = 'response';
var responseLogPath = baseLogPath + responsePath + '/' + responseFileName;

module.exports = {
    'appenders':
    {
        //错误日志
        'error':{
            'category' : 'errorLogger',      //logger名称
            'type' : 'dateFile',             //日志类型
            'filename' : errorLogPath,       //日志输出位置
            'alwaysIncludePattern' : true,   //是否总是有后缀
            'pattern' : '-yyyy-MM-dd-hh.log',
            "level": "error",
        },
        //响应日志
        'response':{
            'category' : 'resLogger',
            'type' : 'dateFile',
            'filename' : responseLogPath,
            'alwaysIncludePattern' : true,
            'pattern' : '-yyyy-MM-dd-hh.log',
        }
    },
    "categories": {
        "default": {
            "appenders": ["error", "response"],
            "level": "all"
        }
    },
    "baseLogPath": baseLogPath
}