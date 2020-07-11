
 var c = 0;
var b=   0;
function myCounter() {
document.getElementById("demo2").innerHTML = b; 
document.getElementById("demo").innerHTML = ++c ;
  if ( c == 10 ){
  c= 0;
  b = ++b;
  }
}
