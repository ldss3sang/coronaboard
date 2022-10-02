import Sequelize from "sequelize";
import GlobalStat from "./global-stat.model";
import KeyValue from "./key-value.model";

const config = {
  host: process.env.CORONABOARD_MYSQL_HOST,
  port: process.env.CORONABOARD_MYSQL_PORT,
  database: process.env.CORONABOARD_MYSQL_DATABASE,
  user: process.env.CORONABOARD_MYSQL_USER,
  password: process.env.CORONABOARD_MYSQL_PASSWORD,
};

const sequelize = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  dialect: "mysql",
});

const db = {
  sequelize,
  GlobalStat: GlobalStat(sequelize),
  KeyValue: KeyValue(sequelize),
};

export default db;
