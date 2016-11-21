$.getJSON('/JSONs/data.json', function(data) {                                                   //Запрос JQuery на файл --> Парсинг

      var index=0;
      var table="<table>";
      table +="<thead>";
      table +="<tr>"+                                                                            //Создание заголовка для столбцов
                "<th data-type='number' class='place'></th>"+
                "<th data-type='string' class='team'>Команда</th>"+
                "<th data-type='number' class='stats-header' title='border-r'>М</th>"+
                "<th data-type='number' class='stats-header' title='border-c'>В</th>"+
                "<th data-type='number' class='stats-header' title='border-c'>Н</th>"+
                "<th data-type='number' class='stats-header' title='border-c'>П</th>"+
                "<th data-type='number' class='stats-header' title='border-c'>Заб.</th>"+
                "<th data-type='number' class='stats-header' title='border-c'>Проп.</th>"+
                "<th data-type='number' class='stats-score-header' title='border-l'>О</th>"+
              "</tr>";
      table +="</thead>";
      table +="<tbody>";
      for (var i=0, count=data.teams.length; i<count; i++) {                               // Цикл для заполнения таблицы
        table+="<tr id='z_"+index+"'>";                                                    //Присваивание ID для сортировки..так и не смог реализовать свой метод=(
        table+="<td data-type='number' title='color"+data.teams[i].color+"'>" + data.teams[i].place +"</td>"; //Кривой, но рабочий способ назначения цвета ячейки,
        table+="<td data-type='string' class='teams'>" +                                                      //зависящий от места в турнирной таблице
               "<img src='/img/flag.png'>"+
               "<a href="+data.teams[i].tag_url+">"+data.teams[i].name +"</a>"
               "</td>";
        table+="<td title='border-r'>" + data.teams[i].matches +"</td>";
        table+="<td title='border-c'>" + data.teams[i].win +"</td>";
        table+="<td title='border-c'>" + data.teams[i].draw +"</td>";
        table+="<td title='border-c'>" + data.teams[i].lose +"</td>";
        table+="<td title='border-c'>" + data.teams[i].goals +"</td>";
        table+="<td title='border-c'>" + data.teams[i].conceded_goals +"</td>";
        table+="<td class='score' title='border-l'>" + data.teams[i].score +"</td>";
        table+="</tr>"
        index++;
      }
      table+="</tbody>";
      table+="</table>";
      table+="<p><span class='footnote'>М</span> - матчи, <span class='footnote'>В</span> - выигрыши, "+  // <--Примечание к турнирной таблице
             "<span class='footnote'>Н</span> - ничьи, <span class='footnote'>П</span> - проигрыши, "+
             "<span class='footnote'>Заб</span> - забитые голы, <span class='footnote'>Проп</span> - пропущенные голы, "+
             "<span class='footnote'>О</span> - очки в турнире</p>"
      document.getElementById("App").innerHTML=table;                                              //Размещение сгенерированной таблицы в документе
});
