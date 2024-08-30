'use strict';

const axios = require('axios');

/** @type {import('sequelize-cli').Migration} */
// /** @type {import('axios') }*/
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    
    //Percobaan fetching data dari JSONPlaceHolder agar bisa dimasukkan di database mysql untuk memenuhi poin C

    const dataPosts = await axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(res => { return res.data })
      .catch(err => { console.log(err); });

    for (const data of dataPosts) {
      await queryInterface.bulkInsert('Posts', [{
        id: data.id,
        userId: data.userId,
        title: data.title,
        body: data.body,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    };
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Posts', null, {});
  }
};
