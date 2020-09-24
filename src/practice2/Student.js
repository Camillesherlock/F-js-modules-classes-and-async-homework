import { Person } from "./Person";

export class Student extends Person{
    constructor(name,className){
        super(name)
        //this.name=this.name.bind(this)
        this.className=className;
    }
    study=()=>{
      // TODO feedback：缩进跟上面的不一样了，需要格式化一下
            this.move();
            console.log(`${this.name}`+" is studying in "+`${this.className}`)}
}
