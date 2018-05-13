const app = require('./app')

let checkPlayerDeckLength = [1,2,3,4,5,6,7,8,9] 

// checkPlayerDeckLength
test('counts number of items in an array', ()=> {
    expect(checkPlayerDeckLength.length).toBe(9);
});