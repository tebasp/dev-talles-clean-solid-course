import { VehicleDirector } from "../domain/services/VehicleDirector";
import { CarBuilder } from "../domain/services/CarBuilder";
import { BikeBuilder } from "../domain/services/BikeBuilder";
import { BuildersType } from "../domain/enums/BuildersType";
import { Car } from "../domain/models/Car";
import { Bike } from "../domain/models/Bike";

export function createVehicles() {
    const vehicleDirector = new VehicleDirector();

    // CAR
    // De manera no dinamica podemos obtener el Producto de su propio builder
    const carBuilder = new CarBuilder();

    vehicleDirector.setBuilder(carBuilder);
    vehicleDirector.loadActions([1, 2, 3, 4]);
    vehicleDirector.executeWork();
    const car: Car = carBuilder.getProduct();

    // BIKE
    const bikeBuilder = new BikeBuilder();

    vehicleDirector.setBuilder(bikeBuilder);
    vehicleDirector.loadActions([1, 2, 3, 4]);
    vehicleDirector.executeWork();

    // CAR with director - More Dynamic - Best
    vehicleDirector.createBuilder(BuildersType.CAR);
    vehicleDirector.loadActions([1, 2, 3]);
    vehicleDirector.executeWork();
    const car2 = vehicleDirector.getProduct(); // No permite obtener el Producto dynamically
}

createVehicles();
