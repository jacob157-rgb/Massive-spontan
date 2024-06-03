const { Sequelize } = require("sequelize");
const UserModel = require("./Users");
const FormatModel = require("./Format");
const TopikModel = require("./Topik");
const TagModel = require("./Tag");
const CPModel = require("./CP");
const RekeningModel = require("./Rekening");
const PenyelenggaraModel = require("./Penyelenggara");
const EventModel = require("./Event");
const TiketModel = require("./Tiket");
const config = require("../../config/config")[
  process.env.NODE_ENV || "development"
];

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    port: config.port,
    dialect: config.dialect,
  }
);

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

module.exports = {
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
