pragma solidity ^0.4.8;

contract ISaidThis {
    
    mapping(bytes=>bytes32) rawToSha;
    mapping(bytes32=>uint) shaToBlockNum;

    function ISaidThis() {}

    function addProofBySha(bytes32 sha) returns (uint) {
        return shaToBlockNum[sha] = block.number;
    }

    function addProofByRaw(bytes raw) returns (uint) {
        bytes32 sha = sha256(raw);
        rawToSha[raw] = sha;
        return addProofBySha(sha);
    }

    function verifySha(bytes32 sha) constant returns (uint) {
        if(shaToBlockNum[sha] > 0) { return shaToBlockNum[sha]; }
        return 0;
    }

    function verifyRaw(bytes raw) constant returns (uint) {
        if(rawToSha[raw] > 0) { return verifySha(rawToSha[raw]); }
        return 0;
    }
}
