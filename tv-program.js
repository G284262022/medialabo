let data = {
    "list": {
      "g1": [
        {
          "id": "2022030428673",
          "event_id": "28673",
          "start_time": "2022-03-04T04:35:00+09:00",
          "end_time": "2022-03-04T04:40:00+09:00",
          "area": {
            "id": "130",
            "name": "東京"
          },
          "service": {
            "id": "g1",
            "name": "ＮＨＫ総合１",
            "logo_s": {
              "url": "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
              "width": "100",
              "height": "50"
            },
            "logo_m": {
              "url": "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
              "width": "200",
              "height": "100"
            },
            "logo_l": {
              "url": "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
              "width": "200",
              "height": "200"
            }
          },
          "title": "みんなのうた「ごっつぉさま」／「超変身！ミネラルフォーマーズ」",
          "subtitle": "「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ｆｒｏｍゴールデンボンバー",
          "content": "「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ｆｒｏｍゴールデンボンバー",
          "act": "",
          "genres": [
            "0409",
            "0700",
            "0504"
          ]
        },
        {
          "id": "2022030427069",
          "event_id": "27069",
          "start_time": "2022-03-04T23:05:00+09:00",
          "end_time": "2022-03-04T23:10:00+09:00",
          "area": {
            "id": "130",
            "name": "東京"
          },
          "service": {
            "id": "g1",
            "name": "ＮＨＫ総合１",
            "logo_s": {
              "url": "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
              "width": "100",
              "height": "50"
            },
            "logo_m": {
              "url": "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
              "width": "200",
              "height": "100"
            },
            "logo_l": {
              "url": "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
              "width": "200",
              "height": "200"
            }
          },
          "title": "パラスポーツ×アニメ「アニ×パラ」▽パラアルペンスキーテーマ曲江口寿史×ＡＣＣ",
          "subtitle": "パラスポーツの魅力をアニメで伝える番組。高速滑走に挑む精神力が試されるパラアルペンスキーを描く。キャラ原案：江口寿史／曲：Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ",
          "content": "パラスポーツの魅力をアニメで伝えるプロジェクトの第１３弾。圧倒的なスピードに挑む「パラアルペンスキー」の世界を江口寿史原案の魅力的なキャラクターで描く。平昌パラリンピック金メダリストの村岡桃佳選手への取材から生まれた主人公・桃は、スピードへの恐怖を克服していく。その壁を越えた先にあるものとは…　テーマ曲　♪「Ｏｎ　Ｙｏｕｒ　Ｍａｒｋ」はＡｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂが手掛けた。",
          "act": "【声】松本まりか，【出演】Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ，【監督】西村一彦，【脚本】加納新太，【原案】江口寿史",
          "genres": [
            "0700"
          ]
        }
      ]
    }
  };
  
  /////////////////// 課題3-2 はここから書き始めよう
  
  let p = document.querySelector('button#request');
  p.addEventListener('click', showSelectResult);

function showSelectResult() {
  let s = document.querySelector('select#service');
  let idx = s.selectedIndex;  // idx 番目の option が選択された
  var ss = ['','g1','e1'];
  let service = ss[idx];

  let s1 = document.querySelector('select#genre');
  let idx1 = s1.selectedIndex;  // idx 番目の option が選択された
  var sss = ['','0000','0100','0205','0300','0409','0502','0600','0700','0800','0903','1000','1100'];
  let genre = sss[idx1];
    
  let os = s.querySelectorAll('option');  // s の子要素 option をすべて検索
  let o = os.item(idx);       // os の idx 番目の要素

  let os1 = s1.querySelectorAll('option');  // s の子要素 option をすべて検索
  let o1 = os1.item(idx1);       // os の idx 番目の要素

  console.log('選択された ' + idx + ' 番目の option の情報:');
  console.log('  value=' + o.getAttribute('value'));  // id 属性を表示
  console.log(' service='+o.textContent);

  console.log('選択された ' + idx1 + ' 番目の option の情報:');
  console.log('  value=' + o1.getAttribute('value'));  // id 属性を表示
  console.log(' genre='+o1.textContent);

  let url = 'https://www.nishita-lab.org/web-contents/jsons/nhk/' + service + '-' + genre + '-j.json';

  // 通信開始
  axios.get(url)
      .then(showResult)   // 通信成功
      .catch(showError)   // 通信失敗
      .then(finish);      // 通信の最後の処理
}
// 通信が成功した時の処理
function showResult(resp) {
  // サーバから送られてきたデータを出力
  let data = resp.data;

  // data が文字列型なら，オブジェクトに変換する
  if (typeof data === 'string') {
      data = JSON.parse(data);
  }

  // data をコンソールに出力
  console.log(data);
  
  let s = document.querySelector('select#service');
  let idx = s.selectedIndex;  // idx 番目の option が選択された
  let os = s.querySelectorAll('option');  // s の子要素 option をすべて検索
  let o = os.item(idx);       // os の idx 番目の要素

  var ss = ['','g1','e1'];
  let service = ss[idx];

  let s1 = document.querySelector('select#genre');
  let idx1 = s1.selectedIndex;  // idx 番目の option が選択された

  var sss = ['','0000','0100','0205','0300','0409','0502','0600','0700','0800','0903','1000','1100'];
  let genre = sss[idx1];

  let os1 = s1.querySelectorAll('option');  // s の子要素 option をすべて検索
  let o1 = os1.item(idx1);       // os の idx 番目の要素

  if (service === 'g1' && genre === '0600' ||
      service === 'g1' && genre === '0903' ||
      service === 'g1' && genre === '1100' ||
      service === 'e1' && genre === '0100' ||
      service === 'e1' && genre === '0600' ||
      service === 'e1' && genre === '0903' ||
      service === 'e1' && genre === '1000'){
        console.log("データがありません");
  } else {
  let count = 0;
  if (service === 'g1'){
    for(let {title} of data.list.g1){
      console.log(title);
      count = count + 1;
    }
    console.log(count);
  } else if(service === 'e1'){
    for(let {title} of data.list.e1){
      console.log(title);
      count = count + 1;
    }
    console.log(count);
  }
  let ban = document.querySelector('th#kyoku');
  ban.textContent = o.textContent;
  let daimei = document.querySelector('th#title');
  daimei.textContent = o1.textContent;

  let p9 = document.querySelector('tbody') ;
  p9.remove();

  // body の参照を取得
  var body = document.getElementsByTagName("body")[0];
  
  // <table> 要素と <tbody> 要素を作成
  var tbl = document.querySelector('table');
  var tblBody = document.createElement("tbody");

  var youso_t = new Array(count);
  var youso_s = new Array(count);
  var youso_e = new Array(count);
  let k1 = 0;

  if (service === 'g1'){
      for(let {title} of data.list.g1){
        youso_t[k1] = title;
        k1++;
      }
      console.log(youso_t);
      k1 = 0;
      for(let k = 0; k < count; k++){
        youso_s[k] = "0";
        youso_e[k] = "0";
      }
      for(let {start_time} of data.list.g1){
        youso_s[k1] = start_time;
        k1++;
      }
      k1 = 0;
      for(let {end_time} of data.list.g1){
        youso_e[k1] = end_time;
        k1++;
      }
      console.log(youso_s);
  } else if(service === 'e1'){
      for(let {title} of data.list.e1){
        youso_t[k1] = title;
        k1++;
      }
      console.log(youso_t);
      k1 = 0;
      for(let k = 0; k < count; k++){
        youso_s[k] = "0";
        youso_e[k] = "0";
      }
      for(let {start_time} of data.list.e1){
        youso_s[k1] = start_time;
        k1++;
      }
      k1 = 0;
      for(let {end_time} of data.list.e1){
        youso_e[k1] = end_time;
        k1++;
      }
      console.log(youso_s);
  }
  var youso;
  youso = [youso_t, youso_s, youso_e];
  // すべてのセルを作成
  for (var i = 0; i < count+1; i++) {
    if (i === 0){
      var row = document.createElement("tr");
      for (var j = 0; j < 3; j++) {
        // <td> 要素とテキストノードを作成し、テキストノードを
        // <td> の内容として、その <td> を表の行の末尾に追加
        var gyou = ["番組名", "開始時間", "終了時間"];
        var cell = document.createElement("td");
        var cellText = document.createTextNode(gyou[j]);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
    } else {

      // 表の行を作成
      var row = document.createElement("tr");

      for (var j = 0; j < 3; j++) {
        // <td> 要素とテキストノードを作成し、テキストノードを
        // <td> の内容として、その <td> を表の行の末尾に追加
        var cell = document.createElement("td");
        var cellText = document.createTextNode(youso[j][i-1]);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
    }
    // 表の本体の末尾に行を追加
    tblBody.appendChild(row);
  }
  // <tbody> を <table> の中に追加
  tbl.appendChild(tblBody);
  // <table> を <body> の中に追加
  body.appendChild(tbl);
  }
}

// 通信エラーが発生した時の処理
function showError(err) {
  console.log(err);
}

// 通信の最後にいつも実行する処理
function finish() {
  console.log('Ajax 通信が終わりました');
}