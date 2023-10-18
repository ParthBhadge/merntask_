function reverseNumber(number) {
    // Convert the number to a string
    const numStr = number.toString();
    
    // Reverse the string
    const reversedStr = numStr.split('').reverse().join('');
    
    // Convert the reversed string back to a number
    const reversedNumber = parseInt(reversedStr, 10);
    
    return reversedNumber;
  }
  
  // Example usage:
  const x = 32243;
  const reversedX = reverseNumber(x);
  console.log(reversedX); // Output: 34223
  
