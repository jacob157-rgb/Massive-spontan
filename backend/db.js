const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("massive", "root", "", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to MySQL");
  })
  .catch((err) => {
    console.log("Unable to connect to MySQL: " + err);
  });

const User = sequelize.define(
  "user",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email_verified_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    no_hp: {
      type: DataTypes.STRING(15), // Change to STRING for phone number
      allowNull: false,
    },
    tgl_lahir: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    gender: {
      type: DataTypes.ENUM("L", "P"),
      allowNull: false,
    },
    coins: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    freezeTableName: false,
  }
);

const Format = sequelize.define(
  "format",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

const Topik = sequelize.define(
  "topik",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

const Tag = sequelize.define(
  "tag",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

const CP = sequelize.define(
  "cp",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    no_hp: {
      type: DataTypes.STRING(15), // Change to STRING for phone number
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

const Rekening = sequelize.define(
  "rekening",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    no_rek: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nama_bank: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nama_pemilik: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    kantor_cabang: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    kota: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

const Penyelenggara = sequelize.define(
  "penyelenggara",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    id_user: {
      type: DataTypes.BIGINT,
      references: {
        model: User,
        key: "id",
      },
    },
    id_rekening: {
      type: DataTypes.BIGINT,
      references: {
        model: Rekening,
        key: "id",
      },
    },
    banner: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    logo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    nama_penyelenggara: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tentang_kami: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    featured_event: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    sosmed: {
      type: DataTypes.JSON,
      allowNull: true,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

const Event = sequelize.define(
  "event",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    id_format: {
      type: DataTypes.BIGINT,
      references: {
        model: Format,
        key: "id",
      },
    },
    id_topik: {
      type: DataTypes.BIGINT,
      references: {
        model: Topik,
        key: "id",
      },
    },
    id_cp: {
      type: DataTypes.BIGINT,
      references: {
        model: CP,
        key: "id",
      },
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    banner: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mulai: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    berakhir: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    tipe: {
      type: DataTypes.ENUM("online", "offline"),
      allowNull: false,
    },
    visibilitas: {
      type: DataTypes.ENUM("public", "private"),
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    pinpoint: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tempat: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deskripsi: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    fasilitas: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    snk: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    isPublish: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    timestamps: true,
    freezeTableName: true,
  }
);

const Tiket = sequelize.define(
  "tiket",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    kategori: {
      type: DataTypes.ENUM("paid", "free"),
      allowNull: false,
    },
    harga: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    deskripsi: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    stok: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    mulai: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    berakhir: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    isPublish: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

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

sequelize
  .sync({ force: true })
  .then(() => {
    console.log("All models were synchronized successfully.");
  })
  .catch((err) => {
    console.error("An error occurred while synchronizing the models:", err);
  });
