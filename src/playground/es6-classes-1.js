class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreetting() {
        return `Hi, I am ${this.name}!`
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();
        
        if(this.hasMajor()){
            description += ` Their major is ${this.major}.`;
        }

        return description;
    }
}

class Traveller extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreetting() {
        let greeting = super.getGreetting();

        if(this.homeLocation) {
            greeting += ` I'm visiting from ${this.homeLocation}`;
        }

        return greeting;
    }
}

const me = new Traveller('Andrew Mead', 26, 'Computer Science');
console.log(me.getGreetting());

const other = new Traveller();
console.log(other.getGreetting());