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
    for (const char of str) {
      if (char == "\n" || char == ",") {
        continue;
      } else {
        numArr.push(char);
      }
    }
  }

  sum = numArr.reduce((acc, curr) => {
    const currNum = +curr;

    return acc + currNum;
  }, 0);

  return sum;
}
