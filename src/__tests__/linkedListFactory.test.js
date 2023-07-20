import linkedListFactory from "../js/linkedListFactory";

test("Get size of linked list", () => {
  let linkedList = linkedListFactory();
  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);

  expect(linkedList.getSize()).toBe(3);
});
