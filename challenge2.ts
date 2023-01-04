class Person {
    name: string;
    age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    
    tellMyName() {
      console.log(`I am ${this.name}`);
    }
    
    tellMyAge() {
      console.log(`I am ${this.age} years old`);
    }
  }
  
  const john = new Person('John', 40);
  const mary = new Person('Mary', 35);
  
  john.tellMyName(); // I am John
  john.tellMyAge(); // I am 40 years old
  
  mary.tellMyName(); // I am Mary
  mary.tellMyAge(); // I am 35 years old