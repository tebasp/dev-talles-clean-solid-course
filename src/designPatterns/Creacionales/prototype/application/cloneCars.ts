import { Car } from "../domain/models/Car";

function cloneCars() {
    const carOne = new Car(1.6, 4);
    console.log(carOne.engine, carOne.seats);

    const carTwo = carOne.clone();
    carTwo.engine = 2.0;
    console.log(carTwo.engine, carTwo.seats);
}

cloneCars();
