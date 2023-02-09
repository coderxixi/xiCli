
const {checkProjectExists}=require('../util/flie')

function init(argv,answers){
  const cmdPath=process.cwd();
  const option={...argv,...answers};
  const {name}=option;
  const pathname=String(typeof argv[1] !=='undefined'?argv[1]:name);
  if(true){
   console.error(`error:the library is a already existend`);
   return
  }
  root.init(cmdPath)
}