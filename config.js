const MINE_RATE = 1000;               //1000ms , i.e 1sec initially
const INITIAL_DIFFICULTY = 3;
const GENESIS_DATA = {
    timestamp: 1,
    lastHash: '-----',
    difficulty: INITIAL_DIFFICULTY,
    nonce: 0,
    hash: 'hash-one',
    data: []
};

module.exports = { GENESIS_DATA, MINE_RATE };