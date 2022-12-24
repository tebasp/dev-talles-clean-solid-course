import { VehicleBuilder } from "../interfaces/VehicleBuilder";
import { Bike } from "../models/Bike";

export class BikeBuilder implements VehicleBuilder<Bike> {
    private _bike: Bike;
    private _actions: number[];

    constructor() {
        this._actions = [];
        this._bike = new Bike();
    }

    assemble() {
        console.log("Bike assembled");
    }

    weld() {
        console.log("Bike welded");
    }

    paint() {
        console.log("Bike painted");
    }

    test() {
        console.log("Bike tested");
    }

    getProduct(): Bike {
        return this._bike;
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
                    this.weld();
                    break;
                case 3:
                    this.paint();
                    break;
                case 4:
                    this.test();
                    break;
                default:
                    console.log("Action not supported");
            }
        });
    }
}
