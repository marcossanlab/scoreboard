module.exports = {
  networks: {
    development: {
      host: "35.176.19.89",
      port: 22000,
      network_id: ",*",  // Match any network id
      gas: 0xfffff,
      gasPrice: 0x0,
      from: '0xd65616c46a2e55957aff33e238b31bc568358e20'
    }
  }
};
