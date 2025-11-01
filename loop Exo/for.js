// Code a for loop that runs through all numbers from 0-99 and append all numbers divisible by seven into a string. Return this string.



function easyLoop() {
var x='0';
  for (i=1;i<100;i++){
    if(i%7===0){
      x=x+i;
    }
  }
  return x;
  
}