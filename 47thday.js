/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  // const map = {};
	// s.split('').map(c => map[c] = map[c] ? map[c] + 1 : 1);
	// t.split('').map(c => map[c] = map[c] ? map[c] - 1 : -1);
	// return Object.keys(map).every(k => map[k] === 0);

  const arr = new Array(26).fill(0)
    for (let i = 0; i < s.length; i++){
        arr[s.charCodeAt(i)-97]++
    }
    console.log(arr)
    for (let i = 0; i < t.length; i++){
        arr[t.charCodeAt(i)-97]--
    }
    console.log(arr)
    return arr.every(a=>!a);
};

console.log(isAnagram(s = "rat", t = "car"));