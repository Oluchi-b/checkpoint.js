// Function to calculate the dot product of two vectors
function dotProduct(v1, v2) {
    if (v1.length !== v2.length) {
      throw new Error("Vectors must have the same length");
    }
  
    let product = 0;
    for (let i = 0; i < v1.length; i++) {
      product += v1[i] * v2[i];
    }
  
    return product;
  }
  
  // Function to check if two vectors are orthogonal
  function areOrthogonal(v1, v2) {
    const product = dotProduct(v1, v2);
    return product === 0;
  }
  
  // Function to check orthogonality of n pairs of vectors
  function checkOrthogonality(pairs) {
    const orthogonalFlags = [];
  
    for (const pair of pairs) {
      if (pair.length !== 2) {
        throw new Error("Each pair should contain exactly two vectors");
      }
  
      const v1 = pair[0];
      const v2 = pair[1];
  
      const isOrthogonal = areOrthogonal(v1, v2);
      orthogonalFlags.push(isOrthogonal);
    }
  
    return orthogonalFlags;
  }
  
  // Example usage:
  const vectors = [
    [[1, 0], [0, 1]],      // Orthogonal vectors
    [[1, 2], [3, 4]],      // Not orthogonal vectors
    [[0, 1], [1, 0]],      // Orthogonal vectors
  ];
  
  const orthogonalFlags = checkOrthogonality(vectors);
  console.log("Orthogonal Flags:", orthogonalFlags); // Output should indicate orthogonality
  


  function insertionSort(arr) {
    const n = arr.length;
    
    for (let i = 1; i < n; i++) {
      let key = arr[i];
      let j = i - 1;
      
      // Move elements of arr[0..i-1] that are greater than key
      // one position ahead of their current position
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
      }
      
      // Place the key at its correct position in the sorted array
      arr[j + 1] = key;
    }
  }
  
  // Example usage:
  const arr = [12, 11, 13, 5, 6];
  insertionSort(arr);
  console.log("Sorted Array:", arr); // Output: [5, 6, 11, 12, 13]
  