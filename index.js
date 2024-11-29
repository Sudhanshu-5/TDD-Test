export function Add(str) {
  //if str == ""

  let sum = 0;
  let numArr = [];

  if (str == "") {
    return 0;
  } else {
    if (str.startsWith("//")) {
      const newLineIndex = str.indexOf("\n");
      const delimiter = str.slice(2, newLineIndex);
      numArr = str.slice(newLineIndex).split(delimiter);
    } else {
      for (const c of str) {
        if (c !== "\n" && c != ",") {
          numArr.push(c);
        }
      }
    }
  }

  sum = numArr.reduce((acc, curr) => {
    const currNum = +curr;

    return acc + currNum;
  }, 0);

  return sum;
}
