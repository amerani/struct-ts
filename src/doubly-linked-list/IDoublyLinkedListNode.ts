interface IDoublyLinkedListNode<T> {
      value: T;
      prev: IDoublyLinkedListNode<T> | null;
      next: IDoublyLinkedListNode<T> | null;
}
export default IDoublyLinkedListNode;
