document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'xelaowner' && password === 'XLpass') {
        // フォームの要素をフェードアウト
        var formElements = document.querySelector('.login-form').querySelectorAll('h2, .form-group, button');
        formElements.forEach(function(element) {
            element.classList.add('fade-out');
        });

        // チェックマークを表示（フェードアウトしない）
        var checkmarkContainer = document.getElementById('checkmark-container');
        checkmarkContainer.style.display = 'flex';
    } else {
        alert('ユーザー名またはパスワードが間違っています。');
    }
});
