import { VehiclePrototype } from "../services/VehiclePrototype";

export class Car extends VehiclePrototype {
    constructor(engine: number, seats: number) {
        super(engine, seats);
    }

    clone(): VehiclePrototype {
        return new Car(this.engine, this.seats);
    }
}
