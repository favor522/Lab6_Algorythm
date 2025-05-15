button_start = document.getElementById("button_start");

button_start.addEventListener('click', function(){
  button_start.style.display = 'none'

})

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class StackLinkedList {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  createStack() {
    this.top = null;
    this.size = 0;
    console.log("Стек создан (связный список)");
  }

  push(data) {
    const newNode = new Node(data);
    newNode.next = this.top;
    this.top = newNode;
    this.size++;
    console.log(`Добавлен элемент: ${data} (связный список)`);
  }

  pop() {
    if (this.isEmpty()) {
      console.log("Стек пуст (связный список)");
      return null;
    }

    const removedNode = this.top;
    this.top = removedNode.next;
    removedNode.next = null;
    this.size--;
    console.log(`Удален элемент: ${removedNode.data} (связный список)`);
    return removedNode.data;
  }

  isEmpty() {
    return this.top === null;
  }

  getSize() {
    return this.size;
  }

  printStack() {
    let current = this.top;
    let stackString = "";
    while (current) {
      stackString += current.data + " -> ";
      current = current.next;
    }
    stackString += "null";
    console.log("Стек (связный список):", stackString);
  }

  pushNNumbers(numbers) {
    for (const num of numbers) {
      this.push(num);
    }
  }

  swapFirstAndLast() {
    if (this.size < 2) {
        console.log("Слишком мало элементов для обмена (связный список)");
        return;
    }
    
    let firstNode = this.top;
    let lastNode = null;
    let secondToLast = null;

    let current = this.top;
    while (current.next) {
        secondToLast = current;
        current = current.next;
    }
    lastNode = current;

    secondToLast.next = firstNode;
    let temp = firstNode.next;
    firstNode.next = null;
    lastNode.next = temp;
    this.top = lastNode;
    
    secondToLast.next = lastNode.next;
    lastNode.next = temp;
    
    console.log("Первый и последний элементы поменяны местами (связный список)");
}
}
class StackArray {
  constructor() {
    this.items = [];
    this.size = 0;
  }

  createStack() {
      this.items = [];
      this.size = 0;
      console.log("Стек создан (массив)");
    }

  push(data) {
    this.items[this.size] = data;
    this.size++;
    console.log(`Добавлен элемент: ${data} (массив)`);
  }

  pop() {
    if (this.isEmpty()) {
      console.log("Стек пуст (массив)");
      return null;
    }
    const removedItem = this.items[this.size - 1];
    this.size--;
    this.items.length = this.size;
    console.log(`Удален элемент: ${removedItem} (массив)`);
    return removedItem;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  printStack() {
    console.log("Стек (массив):", this.items.slice(0, this.size));
  }

  pushNNumbers(numbers) {
    for (const num of numbers) {
      this.push(num);
    }
  }

  swapFirstAndLast() {
    if (this.size < 2) {
      console.log("Слишком мало элементов для обмена (массив)");
      return;
    }

    const first = this.items[0];
    const last = this.items[this.size - 1];

    this.items[0] = last;
    this.items[this.size - 1] = first;

    console.log("Первый и последний элементы поменяны местами (массив)");
  }
}

  console.log("Демонстрация работы со стеком (связный список):");
  const stackLinkedList = new StackLinkedList();
  stackLinkedList.createStack();
  stackLinkedList.push(10);
  stackLinkedList.push(20);
  stackLinkedList.push(30);
  stackLinkedList.printStack();
  stackLinkedList.pop();
  stackLinkedList.printStack();
  stackLinkedList.swapFirstAndLast();
  stackLinkedList.printStack();
  stackLinkedList.pushNNumbers([5, 15, 25]);
  stackLinkedList.printStack();

  console.log("\nДемонстрация работы со стеком (массив):");
  const stackArray = new StackArray();
  stackArray.createStack();
  stackArray.push(10);
  stackArray.push(20);
  stackArray.push(30);
  stackArray.printStack();
  stackArray.pop();
  stackArray.printStack();
  stackArray.swapFirstAndLast();
  stackArray.printStack();
  stackArray.pushNNumbers([5, 15, 25]);
  stackArray.printStack();