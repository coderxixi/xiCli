#!/usr/bin/env node
const process  = require("process");
const yargs=require('yargs')
const {runInitPrompts}=require('./core/run-prompts')
// process.argv[2] 就是传给命令的参数
console.log('脚手架开发',process.argv[2]);
//设置版本号
yargs.alias('v','version').argv

yargs.command(['new','n'],'新建一个项目',function(argv){
      console.log('初始化逻辑')
      runInitPrompts(argv[1],yargs.argv).then((res)=>{
            console.log('res',res);
      })
    
     }).argv
  
     

    
