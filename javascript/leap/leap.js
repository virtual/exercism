//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//
// 
// var Year = function (input) {
function Year (input) {
  this.year = input;
};

Year.prototype.isLeap = function () {
  if ((this.year % 4 || this.year % 100 === 0) && ((this.year % 400 !== 0))) {  
    return false;
  } 
  return true;
};

module.exports = Year;
