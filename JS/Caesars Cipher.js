function rot13(str) {
  return str.replace(/[A-Z]/g, function (char) {

    var ascii = char.charCodeAt(0);

    if (ascii >= 65 && ascii <= 90) {
      var decryptedAscii = ((ascii - 65 + 13) % 26) + 65;
      return String.fromCharCode(decryptedAscii);
    } else {
      return char;
    }
  });
}


var encodedString = "Jo Harjono";
var decodedString = rot13(encodedString);
console.log(encodedString);
console.log(decodedString);