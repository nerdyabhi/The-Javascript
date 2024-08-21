const Human = {
  Name: 'Humans',
  Legs: 2,
};

const student = {
  marks: 0,
  __proto__: Human, // access propertites of Human.
};

const IronMan = {
  slogan: 'I am IronMan',
  Say: function () {
    console.log('love you <3000');
  },
};

// console.log(student.Legs);

Object.setPrototypeOf(IronMan, Human);

console.log('=====> IRON MAN <=========');

console.log(`Name : ${IronMan.Name}\nSlogan :${IronMan.slogan} `);

IronMan.Say();