import { DoublyLinkedList } from "../src";

let classUnderTest: DoublyLinkedList<number>;

beforeEach(() => {
    classUnderTest = new DoublyLinkedList<number>();
    classUnderTest.unshift(2);
});

test("should have length 1", () => {
    expect(classUnderTest.length).toBe(1);
});

test("should add to head", () => {
    classUnderTest.unshift(3);
    expect(classUnderTest.length).toBe(2);
    const node = classUnderTest.find(3);
    expect(node.prev).toBe(null);
    expect(node.next.value).toBe(2);
});

test("should add to tail", () => {
    classUnderTest.push(7);
    expect(classUnderTest.length).toBe(2);
    const node = classUnderTest.find(7);
    expect(node.next).toBe(null);
    expect(node.prev.value).toBe(2);
});

test("should remove from head", () => {
    const val = 6;
    classUnderTest.unshift(val);
    const output = classUnderTest.shift();
    expect(output).toBe(val);
});

test("should remove from tail", () => {
    const val = 9;
    classUnderTest.push(9);
    const output = classUnderTest.pop();
    expect(output).toBe(val);
});

test("should find", () => {
    classUnderTest.unshift(88)
    .unshift(99)
    .unshift(100);
    const output = classUnderTest.find(99);
    expect(output.value).toBe(99);
});

test("should not find", () => {
    const output = classUnderTest.find(-99999);
    expect(output).toBeNull();
});

test("should remove with value", () => {
    classUnderTest.unshift(7).unshift(8);
    classUnderTest.remove(7);
    expect(classUnderTest.length).toBe(2);
});

test("should not remove when value not found", () => {
    classUnderTest.remove(5);
    expect(classUnderTest.length).toBe(1);
});

test("should insert after", () => {
    // 5 -> 2 -> 7
    classUnderTest.unshift(5).push(7);
    const node = classUnderTest.find(2);
    classUnderTest.insertAfter(node, 1);
    expect(node.next.value).toBe(1);
    const insertedNode = classUnderTest.find(1);
    // 5 -> 2 -> 1 -> 7
    expect(insertedNode.next.value).toBe(7);
    expect(insertedNode.prev.value).toBe(2);
});

test("should insert before", () => {
    // 5 -> 2 -> 7
    classUnderTest.unshift(5).push(7);
    const node = classUnderTest.find(2);
    classUnderTest.insertBefore(node, 1);
    expect(node.prev.value).toBe(1);
    const insertedNode = classUnderTest.find(1);
    // 5 -> 1 -> 2 -> 7
    expect(insertedNode.next.value).toBe(2);
    expect(insertedNode.prev.value).toBe(5);
});

test("should remove middle node", () => {
    // 5 -> 2 -> 7
    classUnderTest.unshift(5).push(7);
    const node = classUnderTest.find(2);
    classUnderTest.removeNode(node);
    expect(classUnderTest.head.value).toBe(5);
    expect(classUnderTest.tail.value).toBe(7);
});

test("should remove head node", () => {
    // 5 -> 1 -> 2 -> 7
    classUnderTest.unshift(1).unshift(5).push(7);
    classUnderTest.removeNode(classUnderTest.head);
    expect(classUnderTest.head.value).toBe(1);
    expect(classUnderTest.tail.value).toBe(7);
});

test("should remove tail node", () => {
    // 5 -> 2 -> 7 -> 9
    classUnderTest.unshift(5).push(7).push(9);
    classUnderTest.removeNode(classUnderTest.tail);
    expect(classUnderTest.head.value).toBe(5);
    expect(classUnderTest.tail.value).toBe(7);
});
