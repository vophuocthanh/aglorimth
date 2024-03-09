function MyQueue() {
  const inStack = [];
  const outStack = [];

  function push(x) {
    inStack.push(x);
  }

  function pop() {
    peek();
    return outStack.pop();
  }

  function peek() {
    if (outStack.length === 0) {
      while (inStack.length > 0) {
        outStack.push(inStack.pop());
      }
    }
    return outStack[outStack.length - 1];
  }

  function empty() {
    return inStack.length === 0 && outStack.length === 0;
  }

  return {
    push,
    pop,
    peek,
    empty,
  };
}
