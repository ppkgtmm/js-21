(() => {
    // 1. NaN
    //to prevent error like Nan/NaN = 1
    // NaN !== NaN
   const res = 1/'hello';
   console.log(res);
   // cannot check if result === NaN
    if(Number.isNaN(res))
    {
        console.log('Equals to NaN');
    }
  // 2. Type Coercion
    console.log(2 + '1'); // 21 as string
    console.log(2 - '1');
    console.log(true + false); // 1 + 0

  // 3. Interpreter & Compiler
    function getPerson() {
        return { // must have brace on same line with return
            name: 'Jane'
        };
    }
    console.log(getPerson());

  // 4. Checking Object Type
    const person = null;
    // type of null can be object
    if(typeof person === "object" && person !== null)
    {
        console.log("It's object");
    }
})();
