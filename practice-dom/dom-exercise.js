//// 注意: 以下は編集しないこと!
let data = [
	{name:'札幌', lat:43.06417, lng:141.34694},
	{name:'仙台', lat:38.26889, lng:140.87194},
	{name:'新宿', lat:35.68944, lng:139.69167},
	{name:'名古屋', lat:35.18028, lng:136.90667},
	{name:'大阪', lat:34.68639, lng:135.52},
	{name:'広島', lat:34.39639, lng:132.45944},
	{name:'高知', lat:33.55972, lng:133.53111},
	{name:'福岡', lat:33.60639, lng:130.41806},
	{name:'鹿児島', lat:31.56028, lng:130.55806},
	{name:'沖縄', lat:26.2125, lng:127.68111}
];
//// 注意: 以上は編集しないこと!

// 練習4-2 メッセージ追加プログラ¥
let p1 = document.querySelector('h2#ex42');
let p = document.createElement('p');
p.textContent = '写真表と都市の緯度経度のページです';
p1.insertAdjacentElement('afterend', p);
p.style.textEmphasis = 'sesame green';
// 練習4-3 写真表作成プログラム

let p2 = document.querySelector('div#phototable');
let p7 = document.createElement('img');
p7.setAttribute('src', 'hanako.png');
let p8 = document.createElement('p');
p2.insertAdjacentElement('afterbegin', p8); 
p7.textContent = ''; 
p8.insertAdjacentElement('afterbegin', p7);

let p5 = document.createElement('img');
p5.setAttribute('src', 'jiro.png');
let p6 = document.createElement('p');
p2.insertAdjacentElement('afterbegin', p6); 
p5.textContent = ''; 
p6.insertAdjacentElement('afterbegin', p5); 

let p3 = document.createElement('img');
p3.setAttribute('src', 'taro.png');
let p4 = document.createElement('p');
p2.insertAdjacentElement('afterbegin', p4);
p3.textContent = '';
p4.insertAdjacentElement('afterbegin', p3);

// 練習4-4 箇条書き削除プログラム
let p9 = document.querySelectorAll('li') ;
for(let w of p9){
	w.remove();
  } 
// 練習4-5 箇条書き追加プログラム
let p10 = document.getElementById('ul#location') ;

for(let {name,lat,lng} of data){
	console.log(name + '... 緯度:' + lat + ', 経度:' + lng);
}

let p11 = document.createElement('li');
p11.textContent = 'hahaha';
