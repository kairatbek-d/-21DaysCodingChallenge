var MyStack = function() {
  this.q1 = [];
};

/** 
* @param {number} x
* @return {void}
*/
MyStack.prototype.push = function(x) {

  this.q1.push(x);

  let len = this.q1.length - 1;
  let idx = 1;

  while (idx <= len) {
      let x = this.q1.shift()
      this.q1.push(x)
      idx++
  }

  return this.q1;
};

/**
* @return {number}
*/
MyStack.prototype.pop = function() {
  return this.q1.shift()
};

/**
* @return {number}
*/
MyStack.prototype.top = function() {
  return this.q1[0];
};

/**
* @return {boolean}
*/
MyStack.prototype.empty = function() {
  return this.q1.length === 0;

};

/** 
* Your MyStack object will be instantiated and called as such:
* var obj = new MyStack()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.empty()
*/