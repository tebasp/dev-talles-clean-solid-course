import { DbFactoryService } from "../domain/services/dbFactoryService";
import { DbAdpaterType } from "../domain/enums/DbAdpaterType";
import { DBAdapter } from "../domain/repository/DBAdapter";

export default function handler() {
    const dbFactoryService: DbFactoryService = new DbFactoryService();

    const dynamoDBAdapter: DBAdapter = dbFactoryService.getAdapter(
        DbAdpaterType.DYNAMODB
    );
    dynamoDBAdapter.getConnection();

    const mongoDBAdapter: DBAdapter = dbFactoryService.getAdapter(
        DbAdpaterType.MONGODB
    );
    mongoDBAdapter.getConnection();
}

handler();
