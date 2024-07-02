// db/index.js
import { Sequelize } from "sequelize";
import UserModel from "./Users.js";
import FormatModel from "./Format.js";
import TopikModel from "./Topik.js";
import TagModel from "./Tag.js";
import CPModel from "./CP.js";
import RekeningModel from "./Rekening.js";
import PenyelenggaraModel from "./Penyelenggara.js";
import EventModel from "./Event.js";
import TiketModel from "./Tiket.js";
import config from "../../config/config.js";

const { database, username, password, host, port, dialect } = config[process.env.NODE_ENV || "development"];

const sequelize = new Sequelize(database, username, password, {
  host,
  port,
  dialect,
});

const User = UserModel(sequelize);
const Format = FormatModel(sequelize);
const Topik = TopikModel(sequelize);
const Tag = TagModel(sequelize);
const CP = CPModel(sequelize);
const Rekening = RekeningModel(sequelize);
const Penyelenggara = PenyelenggaraModel(sequelize);
const Event = EventModel(sequelize);
const Tiket = TiketModel(sequelize);

// Define associations
User.hasMany(Penyelenggara, { foreignKey: "id_user" });
Rekening.hasMany(Penyelenggara, { foreignKey: "id_rekening" });
Penyelenggara.belongsTo(User, { foreignKey: "id_user" });
Penyelenggara.belongsTo(Rekening, { foreignKey: "id_rekening" });

Format.hasMany(Event, { foreignKey: "id_format" });
Topik.hasMany(Event, { foreignKey: "id_topik" });
CP.hasMany(Event, { foreignKey: "id_cp" });
Event.belongsTo(Format, { foreignKey: "id_format" });
Event.belongsTo(Topik, { foreignKey: "id_topik" });
Event.belongsTo(CP, { foreignKey: "id_cp" });

Event.belongsToMany(Penyelenggara, {
  through: "PenyelenggaraEvent",
  foreignKey: "id_event",
});
Penyelenggara.belongsToMany(Event, {
  through: "PenyelenggaraEvent",
  foreignKey: "id_penyelenggara",
});

Event.belongsToMany(Tag, { through: "TagEvent", foreignKey: "id_event" });
Tag.belongsToMany(Event, { through: "TagEvent", foreignKey: "id_tag" });

Event.belongsToMany(Tiket, { through: "TiketEvent", foreignKey: "id_event" });
Tiket.belongsToMany(Event, { through: "TiketEvent", foreignKey: "id_tiket" });

export {
  sequelize,
  User,
  Format,
  Topik,
  Tag,
  CP,
  Rekening,
  Penyelenggara,
  Event,
  Tiket,
};
