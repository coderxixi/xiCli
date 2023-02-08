const inquirer=require('inquirer');

inquirer
      .prompt([
        {
          type:'input',
          name:'name',
          message:'仓库的名字',
          default:'mylib'
        },
        {
          type:'confirm',
          name:'test',
          message:'are you test',
          default:true
        }
       ]).then((answers)=>{
        console.log('结果');
        console.log('answers',answers)
       })
 

