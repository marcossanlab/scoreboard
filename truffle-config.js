module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 22001,
      network_id: ",*",  // Match any network id
      gas: 0xfffff,
      gasPrice: 0x0,
      from: '0x0defda53d6e0ba7627a4891b43737c5889e280cc'
    }
  }
};
