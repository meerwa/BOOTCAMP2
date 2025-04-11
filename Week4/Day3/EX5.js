//Only Option 2 is correct. Here’s why:

class Labrador extends Dog {
    constructor(name, size) {
      super(name);  // correctly calls the parent constructor
      this.size = size;
    }
  }


  // EXPLANATION 
  //Option 1 does not use super() which is required to call the parent constructor.
//Option 3 tries to use super(name) without defining name in the constructor parameters.
//Option 4 initializes this.name without calling the parent constructor; it should use super(name).