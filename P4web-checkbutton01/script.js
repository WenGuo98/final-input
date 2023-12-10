document.addEventListener('DOMContentLoaded', function () {
    var radioForm = document.getElementById('radioForm');

    for (var i = 1; i <= 218; i++) {
      var radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = 'radio' + i; 
      radio.value = 'radio';
      radio.id = 'radio' + i;

      radioForm.appendChild(radio);
    }
  });

  function navigateToNextPage() {
    window.location.href = 'file:///Users/artemis/Desktop/Web%20to%20Print/F/final%20web/final-input/P4web-restart01/index.html';
  }

  function printPage() {
    window.print();
  }