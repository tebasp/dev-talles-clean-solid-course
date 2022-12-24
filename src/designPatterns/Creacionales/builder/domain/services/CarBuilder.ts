import { VehicleBuilder } from "../interfaces/VehicleBuilder";
import { Car } from "../models/Car";

export class CarBuilder implements VehicleBuilder<Car> {
    public car: Car;
    private _actions: number[];

    constructor() {
        this._actions = [];
        this.car = new Car();
    }

    reset() {
        this.car = new Car();
    }

    assemble() {
        console.log("Car assembled");
    }

    paint() {
        console.log("Car painted");
    }

    test() {
        console.log("Car tested");
    }

    getProduct() {
        return this.car;
    }

    loadActions(actions: number[]): void {
        this._actions = actions;
    }

    work(): void {
        this._actions.forEach((action) => {
            switch (action) {
                case 1:
                    this.assemble();
                    break;
                case 2:
                    this.paint();
                    break;
                case 3:
                    this.test();
                    break;
                default:
                    console.log("Action not supported");
            }
        });
    }
}
