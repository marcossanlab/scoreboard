var Users = artifacts.require("./Users.sol");
module.exports = function(deployer) {
    web3.personal.unlockAccount(web3.eth.accounts[0], "Passw0rd"); 
    deployer.deploy(Users);
};