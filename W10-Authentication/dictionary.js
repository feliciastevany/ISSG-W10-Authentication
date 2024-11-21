const crypto = require('crypto');
const fs = require('fs');

// Bob's hashed password
const passHash = "578ed5a4eecf5a15803abdc49f6152d6";

// List of passwords file
const passFile = '500-worst-passwords.txt';

// Function to hash a given input using MD5
function hashMD5(input) {
    return crypto.createHash('md5').update(input).digest('hex');
}

// Dictionary attack function
function findPassword(passFile) {
    const dictionary = fs.readFileSync(passFile, 'utf8').split('\n');
    for (const word of dictionary) {
        // Hash the current password and compare to the target hash
        if (hashMD5(word) === passHash) {
            return word;
        }
    }
    return null;
}

const password = findPassword(passFile);

if (password) {
    console.log(`Bob's password is: ${password}`);
} else {
    console.log('Failed to find the password.');
}
