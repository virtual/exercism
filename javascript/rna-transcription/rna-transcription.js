function DnaTranscriber() {}

DnaTranscriber.prototype.toRna = function(input){
  if (/^[GCTA]+$/i.test(input)) {
    const find = 'GCTA';
    let updated = input.split("").map((e) => {
      if (find.indexOf(e) !== -1) {  
        return ['C', 'G', 'A', 'U'][find.indexOf(e)]
      }
    });
    return updated.join("");
  }
  else {
    throw new Error('Invalid input');
  }
}

module.exports = DnaTranscriber;