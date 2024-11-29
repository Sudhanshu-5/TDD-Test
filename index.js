export function Add(numbers) {
  if (!numbers) return 0;

  let delimiters = [",", "\n"];
  let numbersString = numbers;

  if (numbers.startsWith("//")) {
    const delimiterLineEnd = numbers.indexOf("\n");
    const delimiterLine = numbers.slice(2, delimiterLineEnd);
    let customDelimiters = [];
    let start = 0;
    while (start < delimiterLine.length) {
      if (delimiterLine[start] === "[") {
        const end = delimiterLine.indexOf("]", start);
        customDelimiters.push(delimiterLine.slice(start + 1, end));
        start = end + 1;
      } else {
        customDelimiters.push(delimiterLine[start]);
        start++;
      }
    }
    delimiters = customDelimiters.length ? customDelimiters : [delimiterLine];

    numbersString = numbers.slice(delimiterLineEnd + 1);
  }

  let numArray = [numbersString];

  delimiters.forEach((delim) => {
    let tempArray = [];
    numArray.forEach((numPart) => {
      tempArray.push(...numPart.split(delim));
    });
    numArray = tempArray; // Update numArray with the new split values
  });

  const negatives = numArray.filter((num) => Number(num) < 0);
  if (negatives.length > 0) {
    throw new Error(`negatives not allowed: ${negatives.join(", ")}`);
  }

  const sum = numArray.reduce((acc, num) => {
    const n = Number(num);
    return n <= 1000 ? acc + n : acc; // Ignore numbers > 1000
  }, 0);

  return sum;
}
