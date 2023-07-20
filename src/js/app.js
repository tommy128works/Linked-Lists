import linkedListFactory from "./linkedListFactory";

let linkedList = linkedListFactory();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3); // add 1, 2, 3 to the end of the list

linkedList.prepend(0); // add 0 to the beginning of the list

console.log("List size = " + linkedList.getSize()); // get size of list

linkedList.printAll();
