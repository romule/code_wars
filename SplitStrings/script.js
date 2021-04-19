// f() for start

function solution(str) {
  return oddOrnot(str);
}

// f() if string length is odd
function odd(x, newArr) {
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
function notOdd(x, newArr) {
  console.log(x.length);
  for (let i = 0; i < x.length; i++) {
    console.log(`x${i} = ` + x[i]);

    if (i % 2 === 0) {
      newArr[i] = x[i] + x[i + 1];
    }
  }
  console.log(x.length);

  let filtr = newArr.filter(function (e) {
    return e != null;
  });

  return filtr;
}

function oddOrnot(x) {
  let newArr = [];
  if (x.length % 2 === 0) return odd(x, newArr);
  else return notOdd(x, newArr);
}

console.log(solution("abcdef"));
console.log(solution("abcdefg"));
