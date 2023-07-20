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

  const printAll = () => {
    let current = headNode;
    while (current) {
      console.log(current.value);
      current = current.nextNode;
    }
  };

  return { append, prepend, getSize, getHead, getTail, printAll };
};

export default linkedListFactory;
