const resolvers = {
  Query: {
    contractsForGrid: (_, __, { dataSources }) => {
      return dataSources.contractAPI.getContractsForGrid();
    },
    contract: (_, { _id }, { dataSources }) => {
      return dataSources.contractAPI.getContract({ _id });
    },
  },
};

module.exports = resolvers;
