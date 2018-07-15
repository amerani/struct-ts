export interface IQueue<T> {
      length: number;
      enqueue(value: T): IQueue<T>;
      dequeue(): T;
      peek(): T;
}
