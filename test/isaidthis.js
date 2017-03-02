var ISaidThis = artifacts.require("./ISaidThis.sol")

contract('ISaidThis', function(accounts) {
  let raw = 'I love cats!'
  it("should add the phrase " + raw + " to the rawToSha mapping", function() {
    return ISaidThis.deployed().then(function(instance) {
      return instance.addProofByRaw(raw)
    }).then(function(block) {
      return ISaidThis.deployed()
    }).then(function(instance) {
      return instance.verifyRaw.call(raw)
    }).then(function(blockNum) {
      assert.isAbove(blockNum, 0, "The phrase '" + raw + "' was stored in a block.")
    })
  });
});
