const { RESTDataSource } = require('apollo-datasource-rest');

class ContractAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:5000/';
  }
  getContractsForGrid() {
    return this.get('contract');
  }
  getContract({ _id }) {
    return this.get(`contract/${_id}`);
  }
  postNewContract({ contract }) {
    return this.post('contract', contract);
  }
  updateContract({ _id, contract }) {
    return this.patch(`contract/${_id}`, contract);
  }
}
module.exports = ContractAPI;
