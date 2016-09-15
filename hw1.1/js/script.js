var list = new Array();
var flag = -1;
var v;

for (var i = 0; i < 5; i++) {
  v = i + 1;
  list[i] = prompt ('Введите '+v+'-e имя для записи');
}

alert ('Массив успешно записан.')
var search = prompt ('Введите имя для поиска');

while (search == '') {
  alert ('Имя не введено');
  search = prompt ('Введите имя для поиска');
}

for (var i = 0; i < 5; i++) {
  if (list[i] == search) {
    flag = i;
  }
}

if (flag < 0) {
  alert ('В системе нет такого пользователя');
} else {
  alert (''+list[flag]+', вы успешно вошли.')
}
