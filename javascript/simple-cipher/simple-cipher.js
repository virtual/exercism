function Cipher(key) {
  if (!(/^[a-z]+$/).test(key)) {
    throw new Error("Bad key");
  }
  this.key = key || "aaaaaaaaaa";
}

Cipher.prototype.encode = function (toEncode) {
  let key = this.key.repeat(Math.ceil(toEncode.length / this.key.length));
  toEncode = toEncode.split("").map((e, i) => {
    return String.fromCharCode(97 + (e.charCodeAt(0) % 97 + key.charCodeAt(i) % 97) % 26);
  });
  return toEncode.join("");
}

Cipher.prototype.decode = function (toDecode) {
  let key = this.key.repeat(Math.ceil(toDecode.length / this.key.length));
  toDecode = key.split("").map((e, i) => {
    return String.fromCharCode(97 + (26 + toDecode.charCodeAt(i) % 97 - e.charCodeAt(0) % 97) % 26);
  });
  return toDecode.join("");
}
module.exports = Cipher;