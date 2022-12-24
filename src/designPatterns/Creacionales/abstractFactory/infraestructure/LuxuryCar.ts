// Producto Concreto
import { Car } from "../domain/repositories/Car";

export class LuxuryCar implements Car {
    getDoors(): number {
        return 2;
    }

    getSeats(): number {
        return 2;
    }

    getWheels(): number {
        return 4;
    }
}
