const string = "JavaScript program";

// const result = string.startsWith("Java");

// console.log(result);

function startsWith(str, prefix) {
  for (let i = 0; i < prefix.length; i++) {
    if (str[i] !== prefix[i]) {
      return false;
    }
  }
  return true;
}

const result = startsWith(string, "Java");

console.log(result);
