let b = document.querySelector('button#btn');
b.addEventListener('click', showSelectResult);

function showSelectResult() {
    let s = document.querySelector('select#service');
    let idx = s.selectedIndex;  // idx 番目の option が選択された
  
    let os = s.querySelectorAll('option');  // s の子要素 option をすべて検索
    let o = os.item(idx);       // os の idx 番目の要素
  
    let s1 = document.querySelector('select#genre');
    let idx1 = s.selectedIndex;  // idx 番目の option が選択された
  
    let os1 = s1.querySelectorAll('option');  // s の子要素 option をすべて検索
    let o1 = os1.item(idx1);       // os の idx 番目の要素
  
    console.log('選択された ' + idx + ' 番目の option の情報:');
    console.log('  value=' + o.getAttribute('value'));  // id 属性を表示
    console.log('  textContent='+o.textContent);
  
    console.log('選択された ' + idx1 + ' 番目の option の情報:');
    console.log('  value=' + o1.getAttribute('value'));  // id 属性を表示
    console.log('  textContent='+o1.textContent);
  }

  function generate_table() {
    // body の参照を取得
    var body = document.getElementsByTagName("body")[0];
  
    // <table> 要素と <tbody> 要素を作成
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
  
    // すべてのセルを作成
    for (var i = 0; i < 2; i++) {
      // 表の行を作成
      var row = document.createElement("tr");
  
      for (var j = 0; j < 2; j++) {
        // <td> 要素とテキストノードを作成し、テキストノードを
        // <td> の内容として、その <td> を表の行の末尾に追加
        var cell = document.createElement("td");
        var cellText = document.createTextNode(i+" 行目、 "+j+" 列目のセル");
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
  
      // 表の本体の末尾に行を追加
      tblBody.appendChild(row);
    }
  
    // <tbody> を <table> の中に追加
    tbl.appendChild(tblBody);
    // <table> を <body> の中に追加
    body.appendChild(tbl);
    // tbl の border 属性を 2 に設定
    tbl.setAttribute("border", "2");
  }
  