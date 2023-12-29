// Function to calculate dot product and store it in a variable
function dotProduct(v1, v2, resultArray) {
    resultArray[0] = 0; // Storing the result in the provided array
    // Assuming v1 and v2 have the same length
    for (let i = 0; i < v1.length; i++) {
        resultArray[0] += v1[i] * v2[i];
    }
}

// Algorithm to determine orthogonality of n pairs of vectors using nested loops
function determineOrthogonality(n, vectors) {
    for (let pair = 0; pair < n; pair++) {
        const v1 = vectors[pair * 2];
        const v2 = vectors[pair * 2 + 1];
        
        // Array to store the result of dot product
        const resultArray = [];

        // Call the function with different types of parameter passing
        dotProduct(v1, v2, resultArray);

        // Access the result from the array
        const result = resultArray[0];

        if (result === 0) {
            console.log(`Vectors ${pair * 2} and ${pair * 2 + 1} are orthogonal.`);
        } else {
            console.log(`Vectors ${pair * 2} and ${pair * 2 + 1} are not orthogonal.`);
        }
    }
}