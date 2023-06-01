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