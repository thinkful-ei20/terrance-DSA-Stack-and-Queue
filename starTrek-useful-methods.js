
// create starTrek class and add items to stack

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
    this.top = node.next;
    return node.data;
  }
}

let starTrek;

const main = () => {
  starTrek = new Stack();
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
  return starTrek;
};

console.log(JSON.stringify(main(), null, 2));


// Useful methods for stack
// Using the stack class above, implement the following helper functions outside the stack class
// peek: allows you to look at the top of the stack without removing it
// display: to display the stack. What is the first item in your stack?
// Remove McCoy from your stack and display the stack

function peek(stack) {
  console.log(stack.top.data);
}

function display(stack) {
  if (stack.top === null){
    console.log('Empty stack');
  }

  let currNode = stack.top;
  while (currNode !== null) {
    console.log(currNode.data);
    currNode = currNode.next;
  }
}

// pop off scotty
// pop off mccoy
// push back scotty
// return stack

function popMcCoy(stack) {
  if (stack.top === null) {
    console.log('stack is empty');
  }

  let topItem = stack.pop();
  stack.pop();
  stack.push(topItem);

  display(stack);
}

