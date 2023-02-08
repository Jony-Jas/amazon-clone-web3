const Amazon = artifacts.require('Amazon.sol');

module.exports = function(deployer){
    deployer.deploy(Amazon);
}