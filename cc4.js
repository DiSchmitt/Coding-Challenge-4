// U4888-2664 - Dawson Schmitt
//Same thing as the third challenge, start with a car class with speed and make.
class Car{ 
    constructor(make,speed){ 
        this.make = make
        this.speed = speed
    }
    //Keeping accerate and brake as they seem to be needed for the 3rd and 4th tasks
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
        this.charge
    }
}
//The first pushed code was my starting point, I forgot to save the file so it wasn't the correct one.