'use strict';

class Car {

  static getSpecs({maxSpeed, price, speed, isOn, distance} = {}) {
    console.log(`maxspeed: ${maxSpeed}, speed: ${speed}, isOn: ${isOn}, distance: ${distance}, price: ${price}`);
  } 
   
  constructor({ maxSpeed, price, speed = 0, isOn = false, distance = 0 }) {
    this.speed = speed;
    this._price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = isOn;
    this.distance = distance;
  }

  get price() {
    return this._price;
  }

  set price(price) {
    this._price = price;
  }

  turnOn() {
    this.isOn = !this.isOn;
  }

  turnOff() {
    this.isOn = !this.isOn;
    this.speed = 0;
  }

  accelerate(value) {
    if (value > this.maxSpeed) {
      console.log('Warning!!!! Maxspeed!!!!!');
    } else {
      this.speed += value;
    };
  }

  decelerate(value) {
    if(this.speed - value > 0) {
      this.speed -= value;
    }
  }

  drive(hours) {
    if (this.isOn = true) {
      this.distance = hours * this.speed;
    }
  }

}

const mustang = new Car({ maxSpeed: 200, price: 2000 });


mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);
console.log(mustang);

//Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();
console.log(mustang);

//Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 120, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000