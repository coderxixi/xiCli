const inquirer=require('inquirer');
const validate=require('validate-npm-package-name')
function runInitPrompts(pathname,argv){
const {name}=argv;
 const promptList= [
    {
      type:'input',
      name:'name',
      message:'仓库的名字',
      default:pathname||name,
      validate:function(input){
        if(input.match(/\s+/g)){
          return '名字中不能包含空格'
        }
        return true
      }
    },
    {
      type:'input',
      name:'npmname',
      message:'npm package name',
      default:pathname||name,
      validate:function(val){
        if(!validate(val).validForNewPackages){
          return 'forbidden npm name'
        }
        return true
      }
    },
    {
      type:'input',
      name:'username',
      message:'github user name',
      default:'xicli'
    },
    {
      type:'confirm',
      name:'prettier',
      message:'use prettier?',
      default:true
    },
    {
      type:'confirm',
      name:'eslint',
      message:'use eslint?',
      default:true
    },
    {
      type:'checkbox',
      name:'use commitlint',
      message:'use eslint?',
      choices:['commitlint','standard-version'],
      default:['commitlint'],
      filter:function(values){
        return values.reduce((res,cur)=>({...res,[cur]:true}),{})
      }
    },
    {
      type:'checkbox',
      name:'test',
      message:'use test?',
      choices:['mocha','poppeteer'],
      default:['mocha'],
      filter:function(values){
        return values.reduce((res,cur)=>({...res,[cur]:true}),{})
      }
    },
    {
      type:'confirm',
      name:'husky',
      message:'use husky?',
      default:true,
    },
    {
      type:'list',
      name:'ci',
      message:'use ci?',
     choices:['github','circleci','travis','none'],
     filter:function(val){
      return {
        github:'github',
        circleci:'circleci',
        travis:'travis',
        none:null
      }[val]
     }
    }
   ]

   
   return inquirer.prompt(promptList)
}
exports.runInitPrompts=runInitPrompts






 

