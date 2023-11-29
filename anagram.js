function areAnagrams(str1, str2) {
    function countCharacters(str) {
      const charCount = {};
  
      for (let i = 0; i < str.length; i++) {
        const char = str[i].toLowerCase();
  
        if (char >= 'a' && char <= 'z') {
          charCount[char] = (charCount[char] || 0) + 1;
        }
      }
  
      return charCount;
    }
  
    function compareCharCounts(count1, count2) {
      const chars = Object.keys(count1);
  
      if (chars.length !== Object.keys(count2).length) {
        return false;
      }
  
      for (let i = 0; i < chars.length; i++) {
        const char = chars[i];
  
        if (count1[char] !== count2[char]) {
          return false;
        }
      }
  
      return true;
    }
  
    const charCount1 = countCharacters(str1);
    const charCount2 = countCharacters(str2);
  
    return compareCharCounts(charCount1, charCount2);
  }
  
  // Example usage:
  const string1 = "Listen";
  const string2 = "Silent";
  
  if (areAnagrams(string1, string2)) {
    console.log(`${string1} and ${string2} are anagrams.`);
  } else {
    console.log(`${string1} and ${string2} are not anagrams.`);
  }
  