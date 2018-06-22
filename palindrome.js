// Check for palindromes using stack
// A palindrome is a word, phrase, or number that is spelled the same forward and backward. For example, “dad” is a palindrome; “A man, a plan, a canal: Panama” is a palindrome if you take out the spaces and ignore the punctuation; and 1,001 is a numeric palindrome. We can use a stack to determine whether or not a given string is a palindrome.

// Write an algorithm that uses a stack to determine whether a given input is palindrome or not. Use the following template as a starting point.

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

function is_palindrome(s) {
  const origStr = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  const stack = new Stack();

  for (let i = 0; i < origStr.length; i++) {
    stack.push(origStr[i]);
  }

  let reverseStr = '';
  for (let i = 0; i < origStr.length; i++) {
    reverseStr += stack.pop();
  }

  if (reverseStr === origStr) {
    return true;
  }
  
  return false;
}

// true, true, true, false
console.log(is_palindrome('dad'));
console.log(is_palindrome('A man, a plan, a canal: Panama'));
console.log(is_palindrome('1001'));
console.log(is_palindrome('Tauhida'));