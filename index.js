export function Add(str) {
  //if str == ""

  let sum = 0;
  let numArr = [];

  if (str == "") {
    return 0;
  } else {
    for (const c of str) {
      if (c !== "\n" && c != ",") {
        numArr.push(c);
      }
    }
  }

  sum = numArr.reduce((acc, curr) => {
    const currNum = +curr;

    return acc + currNum;
  }, 0);

  return sum;
}
