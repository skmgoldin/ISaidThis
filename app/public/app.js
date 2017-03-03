const React = require('react')
const ReactDOM = require('react-dom')
const truffleContract = require('truffle-contract')
const ISaidThisJSON = require('../truffle/build/contracts/ISaidThis.json')

const ISaidThis = truffleContract(ISaidThisJSON)
ISaidThis.setProvider(web3.currentProvider) 

const raw = "I love cats!"

ISaidThis.deployed()
.then(function(instance) {
  return instance.verifyRaw(raw)
})
.then(function(response) {
  ReactDOM.render(
    <h1>Hello World</h1>,
    document.getElementById('root')
  );
})

