import nodeFactory from "./nodeFactory";

const linkedListFactory = (headValue) => {
  let headNode = nodeFactory(headValue);
  let tailNode = headNode;

  const append = (value) => {
    let newNode = nodeFactory(value);
    tailNode.nextNode = newNode;
    tailNode = newNode;
  };

  const printAll = () => {
    let current = headNode;
    while (current) {
      console.log(current.value);
      current = current.nextNode;
    }
  }

  return { headNode, tailNode, append, printAll };
};

export default linkedListFactory;
