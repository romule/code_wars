function solution(str) {
  let newArr = [];
  if (str.length % 2 === 0) {
    for (let i = 0; i < str.length; i++) {
      if (i % 2 === 0) {
        newArr[i] = str[i] + str[i + 1];
      }
    }

    return newArr;
  } else return;
}

console.log(solution("abcdef"));
console.log(solution("abcdefg"));
