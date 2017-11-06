function Pangram(sentence) { 
  this.sentence = sentence;
}

Pangram.prototype.isPangram = function() {
  if (this.sentence) {
    return true;
  }
  return false;
}

module.exports = Pangram;