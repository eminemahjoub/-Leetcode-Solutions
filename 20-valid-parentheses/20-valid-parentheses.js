/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const reverseMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    const stack = [];
    s = s.split('');
    for(let c of s) {
        if(reverseMap[c]) {
            const top = stack.at(-1);
            if(top != reverseMap[c]) return false;
            stack.pop();
        } else {
            stack.push(c);
        }   
    }
    return stack.length == 0 && true;
};