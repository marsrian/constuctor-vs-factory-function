// OOP: Object Oriented Programming

// Factory function
function createCircle(radius) {
    return {
        radius,
        make() {
            console.log('Fun with JS');
        }
    };
}
const myCircle = createCircle(1);
console.log(myCircle);

// Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.just = function() {
        console.log('JS is awesome');
    }
}
const circle = new Circle(1);
console.log(circle);
