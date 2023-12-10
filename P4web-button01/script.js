document.addEventListener('DOMContentLoaded', function () {
    var buttonContainer = document.getElementById('buttonContainer');

    buttonContainer.addEventListener('click', function (event) {
      var targetButton = event.target;

      if (targetButton.tagName === 'INPUT' && targetButton.type === 'button') {

        var randomColor = getRandomColor();
        targetButton.style.backgroundColor = randomColor;


        if (targetButton.id === 'button1') {
          window.location.href = 'P4web-checkbutton01/index.html';
        }
      }
    });

    var buttonForm = document.getElementById('buttonForm');

    for (var i = 1; i <= 644; i++) {
      var button = document.createElement('input');
      button.type = 'button';
      button.value = 'BUTTON';
      button.id = 'button' + i;

      buttonForm.appendChild(button);
    }

        var nextButton = document.createElement('input');
        nextButton.type = 'button';
        nextButton.value = 'NEXT';
        nextButton.id = 'nextButton';
    
        buttonForm.appendChild(nextButton);

    nextButton.addEventListener('click', function () {
      window.location.href = 'P4web-checkbutton01/index.html';
  });

    var printButton = document.createElement('input');
    printButton.type = 'button';
    printButton.value = 'PRINT';
    printButton.id = 'printButton';

    buttonForm.appendChild(printButton);

    printButton.addEventListener('click', function () {
        console.log('PRINT button clicked');
    });

    printButton.addEventListener('click', function () {
      // 触发打印操作
      window.print();
  });

    function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  });