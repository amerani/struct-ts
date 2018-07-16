import { Stack } from "../src";

let classUnderTest: Stack<number>;
beforeEach(() => {
      classUnderTest = new Stack();
});

test("should push", () => {
      classUnderTest.push(5);
      const output = classUnderTest.pop();
      expect(output).toBe(5);
});

test("should pop", () => {
      classUnderTest.push(5).push(9);
      const output = classUnderTest.pop();
      expect(output).toBe(9);
});

test("should peek", () => {
      classUnderTest.push(7).push(9);
      expect(classUnderTest.peek()).toBe(9);
      expect(classUnderTest.pop()).toBe(9);
});
