import { Motorbike } from "../domain/repositories/Motorbike";

// Producto Concreto
export class LuxuryMotorbike implements Motorbike {
    getSeats(): number {
        return 1;
    }

    getType(): string {
        return "Luxury motorbike";
    }

    getWheels(): number {
        return 2;
    }
}
