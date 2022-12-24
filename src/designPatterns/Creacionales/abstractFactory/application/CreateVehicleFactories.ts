import { VehicleAbstractFactory } from "../domain/services/VehicleAbstractFactory";
import { AbstractFactoryType } from "../domain/enums/AbstractFactoryType";
import { CarType } from "../domain/enums/CarType";
import { Vehicle } from "../domain/repositories/Vehicle";
import { MotorbikeType } from "../domain/enums/MotorbikeType";

export function CreateVehicleFactories() {
    // Car Factory
    const carFactory = VehicleAbstractFactory.getFactory(
        AbstractFactoryType.CARFACTORY
    );
    const luxuryCar: Vehicle = carFactory.getVehicle(CarType.LUXURY);
    const luxuryCarSeats = luxuryCar.getSeats();
    console.log(luxuryCarSeats);

    // Bike Factory
    const motorbikeFactory = VehicleAbstractFactory.getFactory(
        AbstractFactoryType.MOTORBIKEFACTORY
    );
    const cruiseMotorbike: Vehicle = motorbikeFactory.getVehicle(
        MotorbikeType.CRUISE
    );
    cruiseMotorbike.getSeats();
}

CreateVehicleFactories();
