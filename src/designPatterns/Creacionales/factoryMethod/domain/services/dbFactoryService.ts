import { DBAdapter } from "../repository/DBAdapter";
import { DbAdpaterType } from "../enums/DbAdpaterType";
import { MongoDBAdapter } from "../../infraestruture/MongoDBAdapter";
import { DynamoDBAdapter } from "../../infraestruture/DynamoDBAdapter";

export class DbFactoryService {
    getAdapter(dbType: DbAdpaterType): DBAdapter {
        switch (dbType) {
            case "MONGODB":
                return new MongoDBAdapter();
            case "DYNAMODB":
                return new DynamoDBAdapter();
            default:
                throw new Error("DB type not supported");
        }
    }
}
