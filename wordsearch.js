const wordSearch = (letters, word) => {
  if (letters.length === 0 || word.length === 0) {
    return false;
  }

  //check for vertical words
  const verticalJoin = [];
  for (let i = 0; i < letters[0].length; i++) {
    let verticalWord = "";
    for (let j = 0; j < letters.length; j++) {
      verticalWord += letters[j][i];
    }
    verticalJoin.push(verticalWord);
    // console.log(verticalWord);
  }
  for (let l of verticalJoin) {
    if (l.includes(word)) return true;
  }

  //check for horizontal words
  const horizontalJoin = letters.map((ls) => ls.join(""));
  for (let l of horizontalJoin) {
    // console.log(l);
    if (l.includes(word)) return true;
  }
  return false;
};

module.exports = wordSearch;
