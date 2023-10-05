// Write function that translates a text to Pig Latin and back.
// English is translated to Pig Latin by taking the first letter of every word,
// moving it to the end of the word and adding ‘ay’. “The quick brown fox” becomes “Hetay uickqay rownbay oxfay”.

function PigLatin(sentences) {
  let piglatin = "";
  let words = sentences.split(" ");
  if (
    words.every((word) => {
      return (
        words[0].slice(words[0].length - 2) === word.slice(word.length - 2)
      );
    })
  ) {
    words.forEach((word) => {
      let newword = word.slice(0, word.length - 2);
      piglatin +=
        newword[newword.length - 1] + newword.slice(0, newword.length - 1) + " ";
    });
  } else {
    words.forEach((word) => {
      piglatin += word.slice(1) + word[0] + "ay ";
    });
  }
  return piglatin;
}
let sen = "Hetay uickqay rownbay oxfay";
console.log(PigLatin(sen));
