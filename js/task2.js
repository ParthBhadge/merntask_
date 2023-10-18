function sortStringAlphabetically(inputString) {
    // Convert the string to an array of characters, sort it, and join it back into a string
    const sortedString = inputString.split('').sort().join('');
    
    return sortedString;
  }
  
  // Example usage:
  const inputString = 'webmaster';
  const sortedResult = sortStringAlphabetically(inputString);
  console.log(sortedResult); // Output: 'abeemrstw'
  