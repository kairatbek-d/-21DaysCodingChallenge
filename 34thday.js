/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  // let num_of_1s = 0;
    
  // for( let i=0 ; i < 32; i++ ){
      
  //     num_of_1s += n & 1;

  //     n >>= 1;
      
  // }
  
  // return num_of_1s

  let count = 0;

  while(n !== 0){

      count++;
      n = n & (n - 1);
      
  }

  return count

};

console.log(hammingWeight(n = 00000000000000000000000000001011));