# struct-ts
data structure library written in typescript

## installation
npm
```sh
npm install struct-ts
```
yarn
```sh
yarn add struct-ts
```

## usage
```js
import { DoublyLinkedList } from 'struct-ts';
const dll = new DoublyLinkedList();
dll.push(1).pop().unshift(1).shift();
```

## usage (node)
```js
const { DoublyLinkedList } = require('struct-ts')
const dll = new DoublyLinkedList();
dll.push(1).pop().unshift(1).shift();
```

## library

### `DoublyLinkedList`
```js
of(arrayLike)
from(1, 2, 3)
push(1)
pop()
shift()
unshift(1)
insertBefore(node, 2)
insertAfter(node, 3)
remove(1)
removeNode(node)
find(1)
head
tail
length
```

### `Stack`
```js
push(1)
pop()
peek()
```

### `Queue`
```js
enqueue(1)
dequeue()
peek()
length
```

### `BinarySearchTree`
```js
root
size
min()
max()
search(1)
insert(1, 100)
delete(1)
traverse(()=>{})
```