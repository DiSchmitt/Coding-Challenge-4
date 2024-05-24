// U4888-2664 - Dawson Schmitt
//Same thing as the third challenge, start with a car class with speed and make.
class Car{ 
    constructor(make,speed){ 
        this.make = make
        this.speed = speed
    }
    //Keeping accerate and brake for later
    accelerate(){
        this.speed = this.speed + 10
        console.log(`The ${this.make} sped up to ${this.speed}km/h`)
    }
    brake(){
        this.speed = this.speed - 5
        console.log(`The ${this.make} slowed down to ${this.speed}km/h`)
    }
}
//Extend the Car class with an EV class that includes charge
class EV extends Car {
    constructor(make, speed, charge){
        super(make, speed)
        this.charge = charge
    }
    //introducing the chargeBattery method in the EV class with the arguement 'chargeTo'
    chargeBattery(chargeTo){
        this.charge = chargeTo
        console.log("The electic vehicle has been charged to", this.charge+"%")
    }
}
//Testing to make sure I got everything correct
chargeTo = 80
let car3 = new EV ('Tesla',120,23)
console.log(car3)
car3.chargeBattery(chargeTo)
console.log(car3)