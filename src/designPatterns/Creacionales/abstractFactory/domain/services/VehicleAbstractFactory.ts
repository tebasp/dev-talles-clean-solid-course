import { Vehicle } from "../repositories/Vehicle";
import { CarFactory } from "./CarFactory";
import { MotorBikeFactory } from "./MotorBikeFactory";

export abstract class VehicleAbstractFactory {
    public abstract getVehicle(type: string): Vehicle;

    static getFactory(type: string) {
        switch (type) {
            case "CARFACTORY":
                return new CarFactory();
            case "MOTORBIKEFACTORY":
                return new MotorBikeFactory();
            default:
                throw new Error("Given type is not supported");
        }
    }
}
