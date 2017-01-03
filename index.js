var s =document.getElementsByTagName('div');
var i;
function change(){
  for(i=0;i<s.length;i++){
  f='';
  
  var color =['A','B','C','D','E','F',1,2,3,4,5,6,7,8,9,0];
  for(var j=0;j<6;j++){
    f += color[Math.floor(Math.random()*10)];
    
  }
  f="#"+f;
  s[i].style.border ="9px solid"+f;
  s[i].style.borderTop ="9px solid orange";
 }
}
setInterval(change,500);