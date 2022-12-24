import { CruiseMotorbike } from "../../infraestructure/CruiseMotorbike";
import { LuxuryMotorbike } from "../../infraestructure/LuxuryMotorbike";
import { Vehicle } from "../repositories/Vehicle";

export class MotorBikeFactory {
    getVehicle(type: string): Vehicle {
        switch (type) {
            case "CRUISE":
                return new CruiseMotorbike();
            case "LUXURY":
                return new LuxuryMotorbike();
            default:
                throw new Error("Giver motorbike type is no supported");
        }
    }
}
