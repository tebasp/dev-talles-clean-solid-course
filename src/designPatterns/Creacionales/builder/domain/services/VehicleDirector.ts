import { VehicleBuilder } from "../interfaces/VehicleBuilder";
import { CarBuilder } from "./CarBuilder";
import { BikeBuilder } from "./BikeBuilder";
import { Car } from "../models/Car";
import { Bike } from "../models/Bike";

export class VehicleDirector {
    private _vehicleBuilder: VehicleBuilder<Car | Bike> | null = null;

    constructor() {
        // this._vehicleBuilder = null;
    }

    setBuilder(builder: VehicleBuilder<Car | Bike>) {
        this._vehicleBuilder = builder;
    }

    loadActions(actions: number[]) {
        this._vehicleBuilder?.loadActions(actions);
    }

    executeWork() {
        this._vehicleBuilder?.work();
    }

    getProduct() {
        return this._vehicleBuilder?.getProduct();
    }

    createBuilder(builder: string) {
        switch (builder) {
            case "CAR":
                this._vehicleBuilder = new CarBuilder();
                break;
            case "BIKE":
                this._vehicleBuilder = new BikeBuilder();
                break;
            default:
                throw new Error("Builder not supported");
        }
    }
}
