const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
  return key in sampleObject;
}

// Test the function with user input
const key = prompt("Enter Key.");
alert(hasKey(key));
