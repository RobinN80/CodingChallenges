// Leetcode problem # 155
//This solution, works but is slow and large Feb 5, 2021

/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];
    this.prevMin = [];
    this.min = Number.POSITIVE_INFINITY;
 
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    //check if x is less than or equal to last number in prevMin
    if(x <= this.min){
        // push x into prevMin and reset min
        this.prevMin.push(x);
        this.min = this.prevMin[this.prevMin.length -1];
    } else {
        //push prevMin to prevMin and reset min
        this.prevMin.push(this.prevMin[this.prevMin.length -1]);
        this.min = this.prevMin[this.prevMin.length -1];
    }
    this.stack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() { 
    this.stack.pop();
    this.prevMin.pop();
    if(this.prevMin[this.prevMin.length-1] === undefined){
        this.min = Number.POSITIVE_INFINITY
    } else {
        this.min = this.prevMin[this.prevMin.length -1];
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.prevMin[this.prevMin.length-1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */