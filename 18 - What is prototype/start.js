(() => {
  // 1. Class vs Prototype 
  class Person{

  }

  const pk = new Person();
  console.log(pk);

  // 2. What's prototype?
  // object with method stored

  const name = 'pk';
  // console.log(name.__proto__);

  const arr = [1,2,3,4,5];
  console.log(arr.__proto__);

  // 3. Prototype chain
  // process of using method of super class

  console.log(name.toLocaleString());
  function sayHello(val) {
      console.log(`Hello ${val}`);
  }
  String.prototype.sayHello = sayHello;
  console.log(name.__proto__);
  name.sayHello('world');

  // 4. Extend a prototype
})();
