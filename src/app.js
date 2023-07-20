import linkedListFactory from "./linkedListFactory.js";

let linkedList = linkedListFactory(1);
linkedList.append(2);
linkedList.append(3);

linkedList.prepend(0);

linkedList.printAll();
