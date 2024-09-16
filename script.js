
function indexOfIgnoreCase(s1, s2) {
  // Convert both strings to lowercase for case-insensitive comparison
  const lowerS1 = s1.toLowerCase();
  const lowerS2 = s2.toLowerCase();

  // Use indexOf to find the position of s2 in s1
  return lowerS1.indexOf(lowerS2);
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));

