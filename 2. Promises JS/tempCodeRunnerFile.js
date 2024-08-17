// // Define a class named 'rect' to represent a rectangle
// class rect {
//     // Constructor method to initialize the rectangle's dimensions
//     constructor(length, breadth) {
//       this.length = length; // Assign the 'length' parameter to the object's 'length' property
//       this.breadth = breadth; // Assign the 'breadth' parameter to the object's 'breadth' property
//     }

//     // Method to calculate and display the area of the rectangle
//     area() {
//       // Calculate the area using the object's 'length' and 'breadth' properties
//       console.log(`Area of rectangle is ${this.length * this.breadth}`);
//     }
//   }

//   // Create an instance of the 'rect' class with length 3 and breadth 5
//   let rect1 = new rect(3, 5);

//   // Call the 'area' method on the 'rect1' instance to print the area
//   rect1.area();

//   console.log(typeof(rect1)); // prints object

class Shape {
  constructor(color) {
    this.color = color;
  }

  paint() {
    console.log(`Painting with color ${this.color}`);
  }

  area() {
    throw new Error('The area method must be implemented in the subclass');
  }

  getDescription() {
    return `A shape with color ${this.color}`;
  }
}

class circle extends Shape {
  constructor(radius, color) {
    super(color);
    this.radius = radius;
  }

  area() {
    console.log(`Area of the circle is : `, 3.14 * r ** 2);
  }
}

let c = new circle(4, 'red');
// console.log(c.area());
c.area();
