/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a,b) => a - b);
    s.sort((a,b) => a - b);

    let res = 0;
    let i = 0;

    for(const key of s){
        if(key >= g[i]){
            i++;
            res++;
        }
        if(i === g.length){
            break
        }
    }

    return res
};

console.log(findContentChildren(g = [1,2,3], s = [1,1]));