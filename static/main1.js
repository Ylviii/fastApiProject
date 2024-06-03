document.addEventListener("DOMContentLoaded", function() {
    // Получить элементы
    var modal = document.getElementById("modal");
    var openModalBtn = document.getElementById("gaga");
    var closeBtn = document.getElementsByClassName("close-button")[0];
    var downloadBtn = document.getElementById('downloadButton');





    // Функция для проверки инпута файлов
    function checkFileInput() {
        const fileInput = document.getElementById('fileInput');
        const file = fileInput.files[0];

        if (!file) {
            alert('Ошибка: Пожалуйста, выберите файл.');
            return false;
        }
        return true;
    }

    // Открыть модальное окно при клике на кнопку если инпут не пустой
    openModalBtn.onclick = function() {
        if (checkFileInput()) {
            modal.style.display = "block";
        }
    }

    // Закрыть модальное окно при клике на кнопку закрытия
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    // Закрыть модальное окно при клике вне модального содержимого
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }


});
const fileInput = document.getElementById('fileInput');
    const downloadButton = document.getElementById('downloadButton');

    // Функция проверки файлов и отключения/включения кнопки
    function checkFile(input) {
        if (input.files.length > 0) {
            downloadButton.removeAttribute('disabled');
        } else {
            downloadButton.setAttribute('disabled', 'true');
        }
    }

    // Инициализация состояния кнопки при загрузке страницы
    checkFile(fileInput);

    // Привязка функции проверки к событию change инпута
    fileInput.addEventListener('change', function() {
        checkFile(fileInput);
    });
