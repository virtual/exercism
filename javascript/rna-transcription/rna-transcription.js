function DnaTranscriber(dna) {
  this.dna = dna;
}

DnaTranscriber.prototype.toRna = function(){
  return this.dna;
}

module.exports = DnaTranscriber;