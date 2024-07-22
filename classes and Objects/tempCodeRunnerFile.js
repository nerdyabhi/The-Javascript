class Toyota {
  brandName = 'defaultName';
  cost = 100;
  mileage = 10;

  // constructor(name = this.brandName, cost = this.cost, mileage = this.mileage) {
  //   this.brandName = name;
  //   this.cost = cost;
  //   this.mileage = mileage;
  // }

  getData() {
    console.log(
      `Brand: ${this.brandName}\nCost: ${this.cost}\nMileage: ${this.mileage}`
    );
  }

  setName(name) {
    this.brandName = name;
  }

  setCost(cost) {
    this.cost = cost;
  }
}

let defaultCar = new Toyota(); // Uses default values
defaultCar.getData(); // Displays default values
