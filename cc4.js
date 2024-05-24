// U4888-2664 - Dawson Schmitt
//Creation of "Car" class that initalizes both make and speed.
class Car{ 
    constructor(make,speed){ 
        this.make = make
        this.speed = speed
    }
    //Cleaned up the accelerate method that adds 10 the speed and logs it.
    accelerate(){
        this.speed = this.speed + 10
        console.log(`The ${this.make} sped up to ${this.speed}km/h`)
    }
    //Cleaned up the Accelerate method that decreases speed by 5 and logs it.
    brake(){
        this.speed = this.speed - 5
        console.log(`The ${this.make} slowed down to ${this.speed}km/h`)
    }
}
class EV extends Car {
    constructor(make, speed, charge){
        super(make, speed)
        this.charge
    }}
//Testing the class and fufuiling the requirements by using the provided object data.
let Car1 = new Car("BMW",120);
let Car2 = new Car("Mercedes",95)
//Cleaned up this introduction and made both 'make' and 'speed' appear on the same line
console.log('The first car is a', Car1.make, 'that starts at',Car1.speed,'km/h')
console.log('The second car is a', Car2.make, 'that starts at',Car2.speed,'km/h')
//Racing Time BABY!
Car1.accelerate()
Car2.accelerate()
Car2.accelerate()
Car1.accelerate()
Car1.accelerate()
Car1.brake()
Car2.accelerate()
Car1.accelerate()
Car1.brake()
Car1.brake()
Car2.brake()
Car1.brake()
Car2.accelerate()
Car1.brake()
Car2.brake()
Car1.brake()
Car2.brake()
Car2.brake()
//And it looks like the BMW stayed at the highest speed for longer so it wins!