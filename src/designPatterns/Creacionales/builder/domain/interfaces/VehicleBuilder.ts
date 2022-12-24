export interface VehicleBuilder<T> {
    loadActions(actions: number[]): void;
    work(): void;
    getProduct(): T;
}
