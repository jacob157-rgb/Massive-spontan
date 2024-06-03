"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "tiketevent",
      {
        id_event: {
          type: Sequelize.BIGINT,
          references: {
            model: "Event",
            key: "id",
          },
        },
        id_tiket: {
          type: Sequelize.BIGINT,
          references: {
            model: "Tiket",
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
    await queryInterface.dropTable("tiketevent");
  },
};
