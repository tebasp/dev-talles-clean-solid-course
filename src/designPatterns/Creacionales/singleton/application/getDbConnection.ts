import { DbConnection } from "../domain/services/DbConnection";

function getDbConnection() {
    const dbConnection = DbConnection.getInstance("myHost", 5432, "myDB");
    dbConnection.connect();

    const dbConnection2 = DbConnection.getInstance("myHost", 5432, "anotherDB");
    dbConnection2.connect();
}

getDbConnection();
