(() => {

  // 1. Lexical scope & Dynamic scope
  //   function printName() {
  //   console.log(this);
  //   }
  //   printName(); // this = global obj(window)

  // 2. How to know what is "this"?
  //   function printName() {
  //       console.log(this);
  //       console.log(`My name is ${this.name}`);
  //   }
  //// 2.1 Invoker object
  //   const pinky={name:"Pinky",printName}
  //   const jane ={ name:"Jane",printName}
  //   pinky.printName(); // this = pinky
  //   jane.printName(); // this is jane
  //// 2.2 Global object (window, global)
  //   name = "Global"; //property of global obj or window (no visibility)
  //   printName();
  //// 2.3 Constructor function
  //   function Person(name) {
  //       this.name = name;
  //       this.printName = printName;
  //   }
  //   const pk = new Person("pk");
  //   pk.printName()

  // 3. call(), apply(), and bind()
    function printName(nationality,city) {
        console.log(this);
        console.log(`My name is ${this.name}, I'm ${nationality} and am living in ${city}`);

    }
    function Person(name,nationality,city) {
        this.name = name;
        this.nationality = nationality;
        this.city = city;
        printName(nationality,city);
        // printName.call(this,this.nationality,this.city);
        // printName.apply(this,[this.nationality,this.city]);
        const pr = printName.bind(this);
        pr(this.nationality,this.city);
    }
    const pk = new Person('pk','indian','Bangkok');
})();
