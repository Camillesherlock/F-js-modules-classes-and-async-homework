export class Person {
    constructor(name){
        this.name = name;
    }
    move =()=>{
        return console.log(`${this.name}` +" is moving");
  }
}
