   function checkPassword() {
            const password = document.getElementById('passwordInput').value;
            const correctPassword = '123321';
            const errorMessage = document.getElementById('errorMessage');
            
            if (password === correctPassword) {
                document.getElementById('passwordOverlay').style.display = 'none';
            } else {
                errorMessage.style.display = 'block';
                document.getElementById('passwordInput').value = '';
            }
        }
        
        // Обработка нажатия Enter в поле пароля
        document.getElementById('passwordInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                checkPassword();
            }
        });1
