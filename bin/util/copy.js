const copydir =require('copy-dir');
function copyDir(from,to,option){
  copydir.sync(from,to,option)
}