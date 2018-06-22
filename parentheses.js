
class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }
  
    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop() {
    const node = this.top;
    if (this.top) {
      this.top = node.next;
      return node.data;
    } 
    return;
  }
}

// Matching parentheses in an expression
// A stack can be used to ensure that an arithmetic expression has balanced parentheses. Write a function that takes an arithmetic expression as an argument and returns the position in the expression where a parenthesis is missing or incorrect.

let expression1 = '10 * (2 + 3)';
let expression2 = '10 * (2) + 3))';
let expression3 = '(10 * 2 + 3';

function matchingParen(s) {
  //create
  //loop through string - 
  //if push all open parenthesis into stack, if close, pop out one of the opens
  //)) count would be -2
  const stack = new Stack;
  let count = 0;

  for ( let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      count++;
      stack.push(s[i]);
    }

    if (s[i] === ')') {
      count --;
      if (stack.top === null) {
        console.log(`Missing open parenthese at position ${i}`);
        return;
      }
      stack.pop();
    } 
  }
}

// console.log(JSON.stringify(matchingParen(expression1), null, 2));
// console.log(JSON.stringify(matchingParen(expression2), null, 2));
console.log(JSON.stringify(matchingParen(expression3), null, 3));

// For version 1, the parentheses you need to consider are ( and ). Finding a close parenthesis without an open parenthesis is an error (report the location of the close); reaching the end of the string while still "holding" an open parenthesis is also an error (report the location of the open).

// Extension exercise: Recognize three pairs of brackets: (), [], and {}. These must be correctly nested; "([)]" is incorrect, and should report an error at the ), stating that you were expecting a ] but found a ). If this is starting to look and sound very familiar, congratulations - you're beginning to write a simple language parser!

// Extension extension exercise: Also recognize two types of quote character: "" and ''. Inside quotes, brackets aren't counted at all - in fact, nothing is counted until you reach the corresponding close quote.