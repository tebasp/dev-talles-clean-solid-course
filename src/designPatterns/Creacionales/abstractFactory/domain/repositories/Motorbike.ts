import { Vehicle } from "./Vehicle";

// Producto Especifico
export interface Motorbike extends Vehicle {
    getType(): string;
}
