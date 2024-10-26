//現在時刻は2024/10/26です。眠いです。
// letは変数宣言
// htmlのfromタグ取得する
const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("ul") // htmlからulタグを取得する

const todos = JSON.parse(localStorage.getItem("todos")); // ""は文字列で扱いにくいのでJSON.parsを使用する

if (todos) { // もしtodosが空ではなかったら
    todos.forEach(todo => {
        add(todo);
    });
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    add();
});

function add(todo) {
    let todoText = input.value;

    if (todo) {
        todoText = todo;
    }

    if (todoText) { // もしフォームにtodoTextに入力された文字が0文字より多きならしたのconstを回す Trueを返す
        const li = document.createElement("li"); // liタグを作るのでdocument.createElementでliを指定する
        li.innerText = todoText; // ユーザーが入力した値を取得したいのでuserが入力するinput valueとする
        li.classList.add("list-group-item"); // liタグにデザインを適用したいのでclassリストにlist-group-itemをhtml側に追加する

        li.addEventListener("contextmenu", function
            (event) {
                event.preventDefault(); //右クリックのイベントをブロック
                li.remove();
                saveData();
            });

        ul.appendChild(li);
        input.value = ""; // 入力フォームを送信する毎に空にする
        saveData();
    }
}

function saveData() {
    const lists = document.querySelectorAll("li"); // documentからデータを取得するためliをとってくる
    let todos = [];
    lists.forEach(list => {
        todos.push(list.innerText)
    })
    localStorage.setItem("todos", JSON.stringify(todos)); // json形式に変換したほうが楽
}
