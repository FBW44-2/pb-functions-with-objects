const word = "Mosquito"; // M 1, o 2, s 1, q 1, u 1, i 1, t 1

// {
//     char: charCount
// }

function getLetterCounts(str) {
    const letterCount = {};

    for (let char of str) {
        // Check if i have seen this letter before
        if (!letterCount.hasOwnProperty(char)) {
            letterCount[char] = 1;
        } else {
            letterCount[char] += 1;
            // letterCount[char]++;
            // letterCount[char] = letterCount[char] + 1;
        }
    }

    return letterCount;
}

console.log(getLetterCounts(word)); // M 1, o 2, s 1, q 1, u 1, i 1, t 1