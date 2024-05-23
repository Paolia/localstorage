// inputタグの要素を取得
const fileInput = document.getElementById("fileinput");
let data = [];
let store = [];
// ファイルが選択されたら読み込む
fileInput.addEventListener("change", function (event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    // ファイルをテキストとして読み込む
    reader.readAsText(file);

    // 読み込みを完了したらCSVデータを処理
    reader.onload = function (event) {
        const csvData = event.target.result;

        const rows = csvData.split("\n");
        // 各行をカンマで分割し、2次元配列に変換
        data = rows.map(row => row.split(","));

        const check_read = document.getElementById("check_read");
        check_read.innerHTML = data;

        let json_extract = JSON.stringify(data);
        localStorage.setItem('canycom_sales', json_extract);
    };

});

// inputタグの要素を取得
const clearBtn = document.getElementById("clear");
clearBtn.addEventListener('click', function (e) {
    localStorage.removeItem('canycom_sales');
});