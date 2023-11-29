function findUniqueValue(arr) {
    let frequencyMap = {};
  
    for (let i = 0; i < arr.length; i++) {
      const current = arr[i];
  
      // If the value is already in the frequency map, increment its count
      if (frequencyMap[current]) {
        frequencyMap[current]++;
      } else {
        // If the value is not in the map, initialize its count to 1
        frequencyMap[current] = 1;
      }
    }
  
    // Iterate through the array to find the first value with a count of 1
    for (let i = 0; i < arr.length; i++) {
      if (frequencyMap[arr[i]] === 1) {
        return arr[i];
      }
    }
  
    
    return null;
  }
  

  const array1 = [1, 2, 3, 4, 5];
  const array2 = [1, 2, 3, 4, 1];
  
  console.log(findUniqueValue(array1)); 
  console.log(findUniqueValue(array2)); 
  