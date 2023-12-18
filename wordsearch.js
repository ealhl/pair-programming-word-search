//Coded by Nicholas, Eva, Ina
const transpose = m => m[0].map((x, i) => m.map(x => x[i])) // Transposes the letters in the array

const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    const verticalJoin = transpose(letters).map(ls => ls.join('')) // Joins the letters in the array vertically
    for (l of horizontalJoin) {
        if (l.includes(word)) return true;
    }
    for (l of verticalJoin) {  // Checks if the word is in the array vertically
        if (l.includes(word)) return true;  
    }
    return false;  // Returns false if the word is not found
};

module.exports = wordSearch
