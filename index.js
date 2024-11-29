export function Add(str) {
  //if str == ""

  let sum = 0;
  let numArr = [];

  if (str == "") {
    return 0;
  }

  const negativeNumbers = str.split(/,|\n/).filter((num) => num < 0);
  if (negativeNumbers.length > 0) {
    throw new Error(`negatives not allowed: ${negativeNumbers.join(", ")}`);
  }

  if (str.startsWith("//")) {
    const newLineIndex = str.indexOf("\n");
    const delimiter = str.slice(2, newLineIndex);
    numArr = str.slice(newLineIndex).split(delimiter);
  } else {
    const arr = str.split(/[\n,]/);
    for (const char of arr) {
      if (char == "\n" || char == ",") {
        continue;
      } else {
        numArr.push(char);
      }
    }
  }

  sum = numArr.reduce((acc, curr) => {
    const currNum = +curr;
    return currNum > 1000 ? acc : acc + currNum;
  }, 0);

  return sum;
}
