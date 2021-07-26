'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Interests', [{
      name: 'Mobile Development',
      url: 'https://imgur.com/ZDkqhQ1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Game Development',
      url: 'https://imgur.com/p1NL3I3',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Data Analyst',
      url: 'https://imgur.com/CYyhMnr',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Robotics',
      url: 'https://imgur.com/nrLabTi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Deep Learning',
      url: 'https://imgur.com/BpfncEw',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Cyber Security',
      url: 'https://imgur.com/YtZLScL',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'UIUX',
      url: 'https://imgur.com/oqrFi8N',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Computer Networking',
      url: 'https://imgur.com/Z9eQx8E',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Automation',
      url: 'https://imgur.com/UcGTQ23',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'BlockChain',
      url: 'https://imgur.com/ZDkqhQ1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Artificial Intelegent',
      url: 'https://imgur.com/bHF58HG',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Web Development',
      url: 'https://imgur.com/4cOquy8',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Virtual Reality',
      url: 'https://imgur.com/Vsd7OPe',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
