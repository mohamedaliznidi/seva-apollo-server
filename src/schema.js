const { gql } = require('apollo-server');

const typeDefs = gql`
  # Schema definitions go here
  type Query {
    "Get contracts array for grid"
    contractsForGrid: [Contract]
    contract(_id: ID!): Contract
  }

  type Contract {
    _id: ID!
    isDraft: Boolean
    isActif: Boolean
    dateCreation: String
    dateModification: String
    dateValidation: String
    dateCloture: String
    userCreator: User
    userModifier: User
    userValidate: User
    souscripteur: Souscripteur
    produit: Produit
    cotisation: Cotisation
  }
  type User {
    id: ID
    nom: String
    email: String
    img: String
  }
  type Souscripteur {
    fullName: String
    nss: String
    dateNais: String
    mobile: String
    email: String
    adresse: String
  }
  type Produit {
    id: ID
    nom: String
    description: String
  }
  type Cotisation {
    modePayement: String
    frequencePayement: String
    montant: Float
    jourAppel: String
    tiers: String
  }
`;
module.exports = typeDefs;
