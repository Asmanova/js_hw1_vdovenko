var number = prompt ('Введите число');
var degree = prompt ('Введите степень');
var result;

function pow(num, degr) {
  var res = num;

  if (degr == 0) {
    res = 1;
  } else if (degr < 0) {
    degr = degr * -1;
    for (var i = 0; i < degr-- ; i++) {
      res = res * num;
    }
    res = 1 / res;
  } else {
    for (var i = 0; i < degr-- ; i++) {
      res = res * num;
    }
  }
  return res;
}

result = pow(number, degree);
console.log('Ответ:', result);
