class Car {
    brandName = 'NerdyAbhi';
    cost = 69000;
    mileage = 20;
  
    constructor(name) {
        this.brandName  = name;
      console.log('\nConstructor invokes automatically\n');
      // when an object of class is created using new Keyword
    }
  
    getData() {
      console.log(`Brand : ${this.brandName}\nCost : ${this.cost}\nMileage : ${this.mileage}`);
    }
  
    setName(name) {
      this.brandName = name;
    }
  
    setCost(cost) {
      this.cost = cost;
    }
  }
  
  /*Creating the fortuner object */
  
//   let fortuner = new Car();
//   fortuner.brandName = "Fortuner";
//   console.log(fortuner);
  

  /*Inheritance in JavaScript*/
  class Truck extends Car {
    weight = 100;
    loadCapacity = 200;
  
    constructor(name) {
      super(name); // Calls the constructor of the Car class
    }

    set(weight){
        this.weight = weight;
    }

    getData()
    {
        super.getData();
      console.log(`weigth : ${this.weight}\nloadCapacity :${this.loadCapacity}`);

    }

    
  }
  
  let leyland = new Truck("Leyland");
  leyland.set(300);
  leyland.getData();

  