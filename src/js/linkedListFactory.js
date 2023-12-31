import nodeFactory from "./nodeFactory";

const linkedListFactory = (headValue = null) => {
  let headNode = nodeFactory(headValue);
  let tailNode = headNode;
  let size = 0;

  const append = (value) => {
    if (headNode.value === null) {
      headNode.value = value;
    } else {
      let newNode = nodeFactory(value);
      tailNode.nextNode = newNode;
      tailNode = newNode;
    }
    size++;
  };

  const prepend = (value) => {
    let newNode = nodeFactory(value);
    newNode.nextNode = headNode;
    headNode = newNode;
    size++;
  };

  const getSize = () => size;

  const getHead = () => headNode;

  const getTail = () => tailNode;

  const at = (index) => {
    let current = headNode;
    for (let i = 0; i < index - 1; i++) {
      current = current.nextNode;
    }
    return current.value;
  };

  const pop = () => {
    let previousNode = headNode;
    let current = headNode;
    while (current.nextNode) {
      previousNode = current;
      current = current.nextNode;
    }
    tailNode = nodeFactory();
    tailNode = previousNode;
    size--;
  };

  const contains = (value) => {
    let current = headNode;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  };

  const find = (value) => {
    let current = headNode;
    let index = 1;
    while (current) {
      if (current.value === value) {
        return index;
      }
      current = current.nextNode;
      index++;
    }
    return null;
  }

  const toString = () => {
    let current = headNode;
    while (current) {
      console.log("( " + current.value + " ) =>");
      current = current.nextNode;
    }

    console.log(" null");
  }

  return {
    append,
    prepend,
    getSize,
    getHead,
    getTail,
    at,
    pop,
    contains,
    find,
    toString,
  };
};

export default linkedListFactory;
