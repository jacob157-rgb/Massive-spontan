const { DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

module.exports = (sequelize) => {
  const User = sequelize.define(
    "users",
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      refresh_token: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
      },
      avatar: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      nama: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
      },
      email_verified: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      googleId: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
      },
      no_hp: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      tgl_lahir: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      gender: {
        type: DataTypes.ENUM("L", "P", "N"),
        allowNull: false,
        defaultValue: "N",
      },
      coins: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: true,
      },
    },
    {
      timestamps: true,
      freezeTableName: true,
    }
  );

  // Hash password before saving user
  User.beforeCreate(async (user) => {
    if (user.password) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(user.password, salt);
    }
  });

  // Method to validate password
  User.prototype.isValidPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };

  return User;
};
