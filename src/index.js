const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const ContractAPI = require('./datasources/contract-rest-api');

const mocks = {
  Query: () => ({
    contractsForGrid: () => [...new Array(2)],
  }),
  Contract: () => ({
    id: () => 'contract_01',
    isDraft: () => false,
    isActif: () => true,
    dateCreation: () => '2020-01-01',
    dateModification: () => '2020-01-01',
    dateValidation: () => '2020-01-01',
    dateCloture: () => '2020-01-01',
    userCreator: () => ({
      id: 'user_01',
      nom: 'nom_01',
      email: 'email_01',
      img: 'img_01',
    }),
    userModifier: () => ({
      id: 'user_01',
      nom: 'nom_01',
      email: 'email_01',
      img: 'img_01',
    }),
    userValidate: () => ({
      id: 'user_01',
      nom: 'nom_01',
      email: 'email_01',
      img: 'img_01',
    }),
    souscripteur: () => ({
      fullName: 'Souscripteur 1',
      nss: '123456789',
      dateNais: '2020-01-01',
      mobile: '0612345678',
      email: 'doe@mail.com',
      adresse: '1 rue de la paix',
    }),
    produit: () => ({
      id: 'produit_01',
      nom: 'Produit 1',
      description: 'Description 1',
    }),
    cotisation: () => ({
      modePayement: 'Espèce',
      frequencePayement: 'Mensuelle',
      montant: 100,
      jourAppel: 'lundi',
      tiers: 'tiers_01',
    }),
  }),
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      contractAPI: new ContractAPI(),
    };
  },
});

server.listen().then(() => {
  console.log(`
      🚀  Server is running!
      🔉  Listening on port 4000
      📭  Query at https://studio.apollographql.com/dev
    `);
});
