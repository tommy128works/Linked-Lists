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

test("Get value at N node of linked list", () => {
  let linkedList = linkedListFactory();
  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);
  linkedList.append(4);
  linkedList.append(5);

  expect(linkedList.at(3)).toBe(3);
});

test("Get value at N node of linked list", () => {
  let linkedList = linkedListFactory();
  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);
  linkedList.pop();

  expect(linkedList.getTail().value).toBe(2);
});