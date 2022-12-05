/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad */
isBadVersion = function(version) {
    return version >= 4;
};

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        // binary search
        var start = 1, end = n;
        while(start < end){
            var mid = Math.floor(start + (end-start) / 2);
            if(isBadVersion(mid)){
                    end = mid; // look on left side of mid
            }else{
                start = mid+1; // look on the right side of mid
            }
        }
        return start;
    };
};

let x = solution(isBadVersion);
console.log(x(5));