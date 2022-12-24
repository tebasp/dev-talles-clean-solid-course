import { Vehicle } from "../repositories/Vehicle";
import { LuxuryCar } from "../../infraestructure/LuxuryCar";

export class CarFactory {
    getVehicle(type: string): Vehicle {
        switch (type) {
            case "LUXURY":
                return new LuxuryCar();
            default:
                throw new Error("Given car is not supported");
        }
    }
}
