const crypto = require('crypto');

// Alice's hashed PIN
const PINHash = "5531a5834816222280f20d1ef9e95f69";

// Function to hash a given PIN using MD5
function hashMD5(input) {
    return crypto.createHash('md5').update(input).digest('hex');
}

// Find the pin using brute force attack
function findPIN() {
    // Assume the PIN is a 4-digit number
    for (let pin = 0; pin <= 9999; pin++) {
        const pinString = pin.toString().padStart(4, '0'); // PIN format is 4-digit string
        
        // Hash the current PIN and compare to the target hash
        if (hashMD5(pinString) === targetHash) {
            return pinString;
        }
    }
    return null;
}

const pin = findPIN();

if (pin) {
    console.log(`Alice's PIN is: ${pin}`);
} else {
    console.log('Failed to find the PIN.');
}
