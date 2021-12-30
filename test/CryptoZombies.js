// First thing have to do when writing new test suite is to load the build artifacts of the contract you want to interact with
  // The function you use to load the build artifacts will return a 'contract abstraction

const CryptoZombies = artifacts.require("CryptoZombies");
// Initialize zombie names as a global array
  // Instead of giving names to Alice and Bob's zombies for each test
  // This way we can just call the contract's methods like this...
    // contractInstance.createRandomZombie(zombieNames[0]);

const zombieNames = ["Zombie 1", "Zombie 2"];
contract("CryptoZombies", (accounts) => {
    // Initialize palceholders for accounts in array because using accounts[0] and accounts[1] wouold noit make our tests read well
    let [alice, bob] = accounts;
    it("should be able to create a new zombie", async() => {
        // Create a contract instance using our contract abstraction and set equal to the result of the CryptoZombies.new() function
          // In order to interact with our smart contract we have to create a JS object that will act as an instance of the contract
        const contractInstance = await CryptoZombies.new()
    })
})'