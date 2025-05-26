function generatePyramid() {
    let num = parseInt(document.getElementById("numInput").value);
    let pyramid = "";

    if (isNaN(num) || num < 1) {
        document.getElementById("pyramidOutput").innerHTML = "<pre>올바른 숫자를 입력하세요!</pre>";
        return;
    }

    for (let i = 0; i < num; i++) {
        let space = "&nbsp;".repeat(num - i);  // 공백을 HTML 엔티티로 변환
        let stars = "*".repeat(i * 2 + 1);  // 별 개수 설정
        pyramid += space + stars + "<br>";
    }

    document.getElementById("pyramidOutput").innerHTML = `<pre>${pyramid}</pre>`;
}
