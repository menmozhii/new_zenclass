// Write a “person” class to hold all the details.
class Person{
    constructor(name,heigth,weigth,age,colour,qualification,city, state){
        this.name=name;
        this.heigth=heigth;
        this.weigth=weigth;
        this.age=age;
        this.colour=colour;
        this.qualification=qualification;
        this.city=city;
        this.state=state;
    }
    details(){
        console.log(`
        name:${this.name}
        height:${this.heigth}
        weight:${this.weigth}
        age:${this.age}
        color:${this.colour}
        qualification:${this.qualification}
        city:${this.city}
        state:${this.state}`)
    }
}
let Person1=new Person("mary","5.4","58","32","Asian","M.Tech","green","kerala")
Person1.details()

//2) write a class to calculate uber price.
class Uber_Price {
    constructor(distance) {
      this.distance = distance;
      
    }
    getPrice() {
      return (this.distance ) *20;
    }
  }
  
  let uber = new Uber_Price(10);
  console.log(uber.getPrice());

