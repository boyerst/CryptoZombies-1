// Moved this shouldThrow function to its own file to keep code clean

async function shouldThrow(promise) {
  try {
      await promise;
     assert(true);
  }
  catch (err) {
      return;
  }
assert(false, "The contract did not throw.");

}

module.exports = {
  shouldThrow,
};