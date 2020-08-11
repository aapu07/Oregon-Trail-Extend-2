class Traveler {
    constructor(name, food, isHeatlthy) {
        this.name = name
        this.food = 1
        this.isHeatlthy = true
    }
    hunt() {

        this.food += 2
    }
    eat() {


        if (this.food < 1) {
            return this.isHeatlthy = false
        }
        else {
            this.food -= 1
        }
    }
}
class Doctor extends Traveler {
    constructor(name ) {
        super(name );

        
    }
    heal(traveler) {
       traveler.isHeatlthy = true
    }
}

class Hunter extends Traveler {
    constructor (name){
        super(name);
        this.food =2;
    }

    hunt(){
        this.food += 5;
    }
    eat(){
        if (this.food < 2) {
            this.food = 0;
            return this.isHeatlthy = false
        }
        else {
            this.food -= 2
        }


    }
    giveFood(traveler,numofFoodUnits) {
        if ( this.food >= numofFoodUnits){
            
            this.food -= numofFoodUnits
    traveler.food += numofFoodUnits
        }
                
    }
}


class Wagon {
    constructor(capacity, passengers) {

        this.capacity = capacity
        this.passengers = []

    }
    getAvailableSeatCount() {

        let AvailableSeatCount = this.capacity - this.passengers.length
        return AvailableSeatCount
    }
    join(traveler) {

        if (this.getAvailableSeatCount() > 0) {
            this.passengers.push(traveler)

        }

    }
    shouldQuarantine() {

        let healthyPassenger = this.passengers.some(traveler => traveler.isHeatlthy === false)
        return healthyPassenger

    }

    totalFood() {

        let meals = 0
        for (let i = 0; i < this.passengers.length; i += 1) {
            meals += this.passengers[i].food
        }
        return meals

    }
}