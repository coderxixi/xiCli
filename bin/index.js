#!/usr/bin/env node
const process  = require("process");
const yargs=require('yargs')
// process.argv[2] 就是传给命令的参数
console.log('脚手架开发',process.argv[2]);
//设置版本号
yargs.alias('v','version').argv

yargs
     .usage('usage:xicli [options]')
     .usage('usage:xicli <command>  [options]')
     .example('xicli new mylib','新建一个库的mylib')
     .alias('h','help')
     .alias('v','version')
     .command(['new','n'],'新建一个项目',function(argv){
      console.log('初始化逻辑')
      return yargs.options('name',{
        alias:'n',
        demand:false,
        default:'mylib',
        describe:'your library name',
        type:'string'
      })
     })
     .epilog('copyright 2019-2023')
     .demandCommand()
     .argv
