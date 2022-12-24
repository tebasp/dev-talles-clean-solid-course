import { DBAdapter } from "../domain/repository/DBAdapter";

// Concrete Product
export class DynamoDBAdapter implements DBAdapter {
    getConnection(): boolean {
        console.log("Connected to DynamoDB");
        return true;
    }
}
