/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim(); // remove edge spaces
    if (!(s.includes(' '))) {
        return s.length;
    }
    function findLastSpace(string) {
        let index = 0;
        for (let i=0; i<string.length; i++) {
            if (string[i] === ' ') {
                index = i;
            }
        }
        return index;
    }
    lastSpace = findLastSpace(s);
    return s.slice(lastSpace+1, s.length).length;
};

console.log(lengthOfLastWord("a"))