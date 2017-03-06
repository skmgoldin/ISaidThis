var ISaidThis = artifacts.require("./ISaidThis.sol")

const raw = 'I love cats!'

module.exports = 
function(deployer) {
  deployer.then(function() {
    return deployer.deploy(ISaidThis)
    .then(function(instance) {
      return ISaidThis.deployed()
    })
    .then(function(instance) {
      return instance.addProofByRaw(raw)
    })
    .then(function() {
      return ISaidThis.deployed()
    })
    .then(function(instance) {
      return instance.verifyRaw(raw)
    })
    .then(function(block) {
      console.log(block)
    })
  })
}




