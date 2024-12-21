
// que:1

class student {
    constructor(name) {
        this.name = name;
    }
    getname() {
        console.log(`${this.name}`)
    }
}

class customer extends student {
    getcustomername() {
        console.log(`${this.name}`)
    }
}
let cust = new customer('mahi')
console.log(cust);



// que:2

class shape {
    constructor(color) {
        this.color = color;
    }
    getcolor() {
        return this.color;
    }

}


class circle extends shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    getradius() {
        return this.radius
    }
}


class coloredcircle extends circle {
    constructor(color, radius) {
        super(color, radius);
    }
}

let obj = new coloredcircle('red', 5);
console.log(obj);