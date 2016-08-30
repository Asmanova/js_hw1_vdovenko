var list = new Array();
var flag = -1;

for (var i = 0; i < 5; i++) {
  list[i] = prompt ('Введите '+i+'-e имя для записи');
}

alert ('Массив успешно записан.')
var search = prompt ('Введите имя для поиска');

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
