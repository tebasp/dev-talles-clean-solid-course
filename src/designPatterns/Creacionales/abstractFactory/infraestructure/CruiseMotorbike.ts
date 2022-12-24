import { Motorbike } from "../domain/repositories/Motorbike";

// Producto Concreto
export class CruiseMotorbike implements Motorbike {
    getSeats(): number {
        return 1;
    }

    getType(): string {
        return "Cruise motorbike";
    }

    getWheels(): number {
        return 2;
    }
}
