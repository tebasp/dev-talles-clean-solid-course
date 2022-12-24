export abstract class VehiclePrototype {
    private _engine: number;
    private _seats: number;

    constructor(engine: number, seats: number) {
        this._engine = engine;
        this._seats = seats;
    }

    public abstract clone(): VehiclePrototype;

    get engine(): number {
        return this._engine;
    }

    set engine(value: number) {
        this._engine = value;
    }

    get seats(): number {
        return this._seats;
    }

    set seats(value: number) {
        this._seats = value;
    }
}
