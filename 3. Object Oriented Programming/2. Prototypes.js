function mul(num) {
  return num * 10;
}

mul.userName = 'Pizza';

console.log(mul.userName); // Tf 😭 function object bhi hai

function createItem(name, price) {
  this.itemName = name;
  this.price = price;
}

createItem.prototype.increment = function () {
  this.price++;
};
const pizza = new createItem('pizza', 69);
pizza.increment();
console.log(pizza);
