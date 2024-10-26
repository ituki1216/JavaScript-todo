from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")  # HTMLファイルを返す

@app.route("/add", methods=["POST"])
def add():
    data = request.get_json()  # フロントからの送信情報をJSON形式で取得する
    result = {'message': 'データを処理しました！'}
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)
