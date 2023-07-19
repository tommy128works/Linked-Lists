import linkedListFactory from "../js/linkedListFactory";

test("Append new node", () => {
  let linkedList = linkedListFactory(1);
  linkedList.append(2);

  linkedList.printAll();
  expect(linkedList.tailNode.value).toBe(1);
});
