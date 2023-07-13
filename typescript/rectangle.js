"use strict";
class Rectangle {
    constructor(sideA, sideB) {
        this.name = "rectangle";
        this.getArea = () => this.sideA * this.sideB;
        this.sideA = sideA;
        this.sideB = sideB;
    }
}
