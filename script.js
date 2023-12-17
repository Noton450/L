document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var errorMessage = document.getElementById('error-message');

    if (username === 'xelaowner' && password === 'XLpass') {
        // フォームの要素をフェードアウト
        var formElements = document.querySelector('.login-form').querySelectorAll('h2, .form-group, button');
        formElements.forEach(function(element) {
            element.classList.add('fade-out');
        });

        // チェックマークを表示（フェードアウトしない）
        var checkmarkContainer = document.getElementById('checkmark-container');
        checkmarkContainer.style.display = 'flex';
        errorMessage.style.display = 'none';
    } else {
        document.getElementById('error-message').style.display = 'block';
        errorMessage.style.display = 'block';
        errorMessage.classList.add('blink');

        errorMessage.addEventListener('animationend', function() {
            errorMessage.classList.remove('blink');
        });
    }
});
