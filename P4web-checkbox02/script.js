document.addEventListener('DOMContentLoaded', function () {
  var innerSquare = document.querySelector('.inner-square');
  var innerSquare2 = document.querySelector('.inner-square2');

  innerSquare.addEventListener('click', navigateToNextPage);
  innerSquare2.addEventListener('click', printCurrentPage);

  var checkboxForm = document.getElementById('roundedRectangle').querySelector('form');

  for (var i = 1; i <= 678; i++) {
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'checkbox' + i;
    checkbox.name = 'checkbox' + i;

    var label = document.createElement('label');
    label.setAttribute('for', 'checkbox' + i);

    checkboxForm.appendChild(checkbox);
    checkboxForm.appendChild(label);
  }

  function navigateToNextPage() {
    window.location.href = '../P4web-button01/index.html';
  }

  function printCurrentPage() {
    console.log('Printing the current page...');
    window.print();
  }
});

