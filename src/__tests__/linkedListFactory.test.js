import linkedListFactory from "../js/linkedListFactory";

test("Get size of linked list", () => {
  let linkedList = linkedListFactory();
  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);

  expect(linkedList.getSize()).toBe(3);
});

test("Get head node value of linked list", () => {
  let linkedList = linkedListFactory();
  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);
  linkedList.prepend(0);

  expect(linkedList.getHead().value).toBe(0);
});

test("Get tail node value of linked list", () => {
  let linkedList = linkedListFactory();
  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);

  expect(linkedList.getTail().value).toBe(3);
});