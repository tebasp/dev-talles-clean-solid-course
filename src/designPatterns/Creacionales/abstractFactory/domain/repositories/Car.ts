import { Vehicle } from "./Vehicle";

// Producto especifico
export interface Car extends Vehicle {
    getDoors(): number;
}
