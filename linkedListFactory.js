import nodeFactory from "./nodeFactory";

const linkedListFactory = (headValue) => {
  headNode = nodeFactory(headValue); 
  tailNode = headNode;

  const append = (value) => {
      tailNode.nextNode = nodeFactory(value);
      tailNode = tailNode.nextNode;    
  }


  return { append }
}

export default linkedListFactory;