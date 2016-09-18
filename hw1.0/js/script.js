var result;

function pow() {
  var num = prompt ('Введите число');
  while (num == '') {
    alert ('Число не введено');
    num = prompt ('Введите число');
  }

  var degr = prompt ('Введите степень');
  while (degr == '') {
    alert ('Сетепень не введена');
    degr = prompt ('Введите степень');
  }

  var res = num;

  while (degr % 1 != 0) {
    alert ('Число в степени должно быть целым');
    degr = prompt ('Введите степень');
  }

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

result = pow();
console.log('Ответ:', result);
