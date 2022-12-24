import { DBAdapter } from "../domain/repository/DBAdapter";

// Concrete Product
export class MongoDBAdapter implements DBAdapter {
    getConnection(): boolean {
        console.log("Connected to MongoDB");
        return true;
    }
}
