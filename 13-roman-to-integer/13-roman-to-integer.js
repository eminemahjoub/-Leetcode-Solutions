/**
 * @param {string} s
@return {number}
*/
var romanToInt = function(s) {

var arrayRoman = Array.from(s)
const mapRoman = new Map();
var romanValue = 0;

for(i = arrayRoman.length - 1; i >= 0; i--){

if (arrayRoman[i] == 'V' && arrayRoman[i - 1] == 'I' ) {
      mapRoman.set('V', 4);
    romanValue = romanValue + mapRoman.get(arrayRoman[i]);
     continue;
}else  if (arrayRoman[i] == 'I' && arrayRoman[i + 1] == 'V' ) {
      mapRoman.set('I', 0);
     romanValue = romanValue + mapRoman.get(arrayRoman[i]);
     continue;
}else if (arrayRoman[i] == 'X' && arrayRoman[i - 1] == 'I' ) {
      mapRoman.set('X', 9);
     romanValue = romanValue + mapRoman.get(arrayRoman[i]);
     continue;
}else  if (arrayRoman[i] == 'I' && arrayRoman[i + 1] == 'X' ) {
      mapRoman.set('I', 0);
    romanValue = romanValue + mapRoman.get(arrayRoman[i]);
     continue;
}else if (arrayRoman[i] == 'L' && arrayRoman[i - 1] == 'X' ) {
      mapRoman.set('L', 40);
    romanValue = romanValue + mapRoman.get(arrayRoman[i]);
     continue;
}else  if (arrayRoman[i] == 'X' && arrayRoman[i + 1] == 'L' ) {
      mapRoman.set('X', 0);
    romanValue = romanValue + mapRoman.get(arrayRoman[i]);
     continue;
}else if (arrayRoman[i] == 'C' && arrayRoman[i - 1] == 'X' ) {
      mapRoman.set('C', 90);
    romanValue = romanValue + mapRoman.get(arrayRoman[i]);
     continue;
}else  if (arrayRoman[i] == 'X' && arrayRoman[i + 1] == 'C' ) {
      mapRoman.set('X', 0);
    romanValue = romanValue + mapRoman.get(arrayRoman[i]);
     continue;
}else if (arrayRoman[i] == 'D' && arrayRoman[i - 1] == 'C' ) {
      mapRoman.set('D', 400);
    romanValue = romanValue + mapRoman.get(arrayRoman[i]);
     continue;
}else  if (arrayRoman[i] == 'C' && arrayRoman[i + 1] == 'D' ) {
      mapRoman.set('C', 0);
    romanValue = romanValue + mapRoman.get(arrayRoman[i]);
     continue;
}else  if (arrayRoman[i] == 'M' && arrayRoman[i - 1] == 'C' ) {
      mapRoman.set('M', 900);
    romanValue = romanValue + mapRoman.get(arrayRoman[i]);
     continue;
} else if(arrayRoman[i] == 'C' && arrayRoman[i + 1] == 'M' ) {
      mapRoman.set('C', 0);
    romanValue = romanValue + mapRoman.get(arrayRoman[i]);
     continue;
} else {
     mapRoman.set('I', 1);
     mapRoman.set('V', 5);
     mapRoman.set('X', 10);
     mapRoman.set('L', 50);
     mapRoman.set('C', 100);
     mapRoman.set('D', 500);
     mapRoman.set('M', 1000);
     romanValue = romanValue + mapRoman.get(arrayRoman[i]);
     continue;
}
}
return romanValue;
};