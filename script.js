document.getElementById('url-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const url = document.getElementById('url').value;

    fetch(`/fetch-html?url=${encodeURIComponent(url)}`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('html-output').textContent = data;
        })
        .catch(error => {
            console.error('エラー:', error);
            document.getElementById('html-output').textContent = '取得に失敗しました。';
        });
});
