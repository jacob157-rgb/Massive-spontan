"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "tagevent",
      {
        id_event: {
          type: Sequelize.BIGINT,
          references: {
            model: "Event",
            key: "id",
          },
        },
        id_tag: {
          type: Sequelize.BIGINT,
          references: {
            model: "Tag",
            key: "id",
          },
        },
      },
      {
        timestamps: true,
        freezeTableName: true,
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("tagevent");
  },
};
