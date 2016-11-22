  function sort(colNum, type, dir){                      //Объявление функции сортировки
    var table = document.getElementById('stats-table-italy');
    var tbody = table.getElementsByTagName('tbody')[0];
    var rowsArray = [].slice.call(tbody.rows);
    var compare;
    switch (dir){
      case "desc":                                     //Убывание
        switch (type){
          case "number":
            compare = function(rowA, rowB){
              return rowB.cells[colNum].innerHTML - rowA.cells[colNum].innerHTML;
            };
            break;

          case "string":
            compare = function(rowA, rowB){
              return rowA.cells[colNum].children[0].nextSibling.innerHTML < rowB.cells[colNum].children[0].nextSibling.innerHTML ? 1 : -1;
            };
          break;
      }
      break;

      case "inc":                                     //Возрастание
        switch (type) {
           case "number":
             compare = function(rowA, rowB){
                return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
              };
           break;

          case "string":
            compare = function(rowA, rowB){
               return rowA.cells[colNum].children[0].nextSibling.innerHTML > rowB.cells[colNum].children[0].nextSibling.innerHTML ? 1 : -1;
            };
          break;
        }
      break;
    }
    rowsArray.sort(compare);
    table.removeChild(tbody);
    for (var i = 0; i < rowsArray.length; i++){
      tbody.appendChild(rowsArray[i]);
    }
      table.appendChild(tbody);
  }
                                                          //Инициализация
var App = document.getElementById('App');
var prevName;
  App.onclick = function(event){
  /*  console.log(event);*/                               //для отладки
    if (event.target.tagName != 'TH'){
      return;
    }
    else if (event.target == prevName){
      prevName = "";
      sort(event.target.cellIndex, event.target.getAttribute('data-type'), "desc");
      return;
    }
      prevName = event.target;
      sort(event.target.cellIndex, event.target.getAttribute('data-type'), "inc");
  };
