// f() for start
function solution(str) {
  if (str.length % 2 === 0) return odd(str);
  else return notOdd(str);
}

// f() if string length is odd
function odd(x) {
  let newArr = [];
  for (let i = 0; i < x.length; i++) {
    if (i % 2 === 0) {
      newArr[i] = x[i] + x[i + 1];
    }
  }

  let filtr = newArr.filter(function (e) {
    return e != null;
  });

  return filtr;
}

// f() if string length is NOT! odd
function notOdd(x) {
  let newArr = [];
  for (let i = 0; i < x.length + 1; i++) {
    newArr[i] = x[i];
    if (i === x.length) newArr[i] = "_";
  }

  return odd(newArr);
}

console.log(solution("abcdef"));
console.log(solution("abcdefg"));
