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

  const printAll = () => {
    let current = headNode;
    while (current) {
      console.log(current.value);
      current = current.nextNode;
    }
  };

  const getSize = () => size;

  const getHead = () => headNode;

  return { append, prepend, getSize, getHead, printAll };
};

export default linkedListFactory;
