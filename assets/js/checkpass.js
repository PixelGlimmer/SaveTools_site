   function checkPassword() {
            const password = document.getElementById('passwordInput').value;
            const correctPassword = 'SaveTools_Pixel_And_No_Spam';
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
