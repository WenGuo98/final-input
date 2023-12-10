document.addEventListener('DOMContentLoaded', function () {
    var inputField = document.getElementById('fname');

    inputField.addEventListener('input', function () {
      var inputValue = inputField.value.trim().toLowerCase();

      if (inputValue === 'input') {
        window.location.href = 'file:///Users/artemis/Desktop/Web%20to%20Print/F/final%20web/final-input/P4web-range01/index.html';
      }
    });
  });