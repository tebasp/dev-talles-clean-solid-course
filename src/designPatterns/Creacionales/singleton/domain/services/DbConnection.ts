export class DbConnection {
    private static _instance: DbConnection | null = null;

    private _host: string;
    private _port: number;
    private _dbName: string;

    private constructor(host: string, port: number, dbName: string) {
        this._host = host;
        this._port = port;
        this._dbName = dbName;
    }

    public static getInstance(
        host: string,
        port: number,
        dbName: string
    ): DbConnection {
        if (this._instance === null) {
            this._instance = new DbConnection(host, port, dbName);
        }

        return this._instance;
    }

    connect() {
        console.log(`Db Connected ${this._dbName}`);
    }
}
