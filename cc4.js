// U4888-2664 - Dawson Schmitt
//I am building off the Car class from the third project so here is the class and the older methods.
class Car{ 
    constructor(make,speed){ 
        this.make = make
        this.speed = speed
    }
    //I need brake for later and I need to show that I have overridden accelerate so I am keeping both.
    accelerate(){
        this.speed = this.speed + 10
        console.log(`The ${this.make} sped up to ${this.speed}km/h`)
    }
    brake(){
        this.speed = this.speed - 5
        console.log(`The ${this.make} slowed down to ${this.speed}km/h`)
    }
}
//I am leaving out the old test data so as not to take more space than I already am.

//Task 1:Extend the Car class with an EV class that includes charge.
class EV extends Car {
    constructor(make, speed, charge){
        super(make, speed)
        this.charge = charge
    }
//Task 2:Introduce the chargeBattery method in the EV class with the arguement 'chargeTo.'
        chargeBattery(chargeTo){
        this.charge = chargeTo
        console.log("The electic vehicle has been charged to", this.charge+"%")
    }
//Task 3: Override the accelerate method for the EV class so it reduces charge by 1% per acceleration and increases speed by 20 km/h.
    accelerate(){
        this.speed = this.speed + 20
        if(this.charge - 1 <= 0){
            this.charge = 0
            this.speed = this.speed - 20
            console.log(`The EV has run out of battery and is coasting at the same speed of ${this.speed}km/h.`)
        }
        else {
            this.charge = this.charge - 1
            console.log(`${this.make} going at ${this.speed}km/h, with a charge of ${this.charge}%`)
        }
}
}
//Creating chargeTo varriable for the chargeBattery function to use as an arguement
let chargeTo = 80
//Task 4: Create an EV object using the provided data and call all three methods
let car3 = new EV ('Tesla',120,23)
console.log(car3)
//Testing that all the methods work and that we are using the overridden acceleration method for EVs
car3.accelerate()
car3.accelerate()
car3.accelerate()
car3.accelerate()
car3.accelerate()
car3.accelerate()
car3.accelerate()
car3.accelerate()
car3.brake()
car3.accelerate()
car3.accelerate()
car3.accelerate()
car3.accelerate()
car3.accelerate()
car3.accelerate()
car3.accelerate()
car3.accelerate()
car3.accelerate()
car3.accelerate()
car3.accelerate()
car3.accelerate()
car3.accelerate()
car3.accelerate()
car3.brake()
car3.accelerate()
//Realistically, that was way too fast, I just wanted to test my if/else statement as part of the:
//'Observe and document the behavior of the EV object, particularly how the battery charge impacts the ability to accelerate'
//I made it so that the battery charge impacts the car's ability to accelerate.
//now lets pretend we can charge the vehicle on the go, speed up a little more, and then test the brakes a little
car3.chargeBattery(chargeTo)
car3.accelerate()
car3.accelerate()
car3.brake()
car3.brake()
car3.brake()
car3.brake()
//Looks like they work and that seems to be all from my end. Have a wonderful day!