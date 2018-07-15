import { Queue } from "../src";

let classUnderTest: Queue<number>;
beforeEach(() => {
      classUnderTest = new Queue();
});

test("should be empty", () => {
      expect(classUnderTest).toHaveLength(0);
});

test("should enqueue", () => {
      classUnderTest.enqueue(5).enqueue(4);
      expect(classUnderTest).toHaveLength(2);
});

test("should dequeue", () => {
      classUnderTest.enqueue(5).enqueue(4);
      const output = classUnderTest.dequeue();
      expect(classUnderTest).toHaveLength(1);
      expect(output).toBe(5);
});

test("should peek", () => {
      classUnderTest.enqueue(3).enqueue(6);
      const output = classUnderTest.peek();
      expect(classUnderTest).toHaveLength(2);
      expect(output).toBe(3);
});
