const inquirer=require('inquirer');

inquirer
      .prompt([
        {
          type:'input',
          name:'name',
          message:'仓库的名字',
          default:'mylib',
          validate:function(input){
            if(input.match(/\s+/g)){
              return '名字中不能包含空格'
            }
            return true
          }
        },
        {
          type:'confirm',
          name:'test',
          message:'are you test',
          default:true
        },
        {
          type:'list',
          name:'fruit',
          message:'请选择一种水果',
          choices:['苹果','香蕉','李子'],
          filter:function(val){
            const map={
              苹果:'apple',
              香蕉:'banana',
              李子:'pear'
            }
            return map[val]
          }
        },
        {
          type:'checkbox',
          name:'laug',
          message:'请选择喜欢的语言',
          choices:['javascript','java','rust'],
          filter:function(val){
            const map={
              javascript:'javascript',
              java:'java',
              rust:'rust'
            }
            return map[val]
          }
        }
       ]).then((answers)=>{
        console.log('结果');
        console.log('answers',answers)
       })
 

