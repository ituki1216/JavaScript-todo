//現在時刻は2024/10/26です。眠いです。

// htmlのfromタグ取得する
const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("ul") // htmlからulタグを取得する

form.addEventListener("submit", function (event) {
    event.preventDefault();
    add();
});

function add() {
    let todoText = input.value;
    if (todoText) { // もしフォームにtodoTextに入力された文字が0文字より多きならしたのconstを回す Trueを返す
        const li = document.createElement("li"); // liタグを作るのでdocument.createElementでliを指定する
        li.innerText = input.value; // ユーザーが入力した値を取得したいのでuserが入力するinput valueとする
        li.classList.add("list-group-item"); // liタグにデザインを適用したいのでclassリストにlist-group-itemをhtml側に追加する
        ul.appendChild(li);
        input.value = ""; // 入力フォームを送信する毎に空にする
        saveData();
    }
}

function saveData () {
    const lists = document.querySelectorAll("li"); // documentからデータを取得するためliをとってくる
    console.log(lists);
}