function changeBackgroundColor(color) {
    const roundedRectangle = document.querySelector('.rounded-rectangle');
    
    roundedRectangle.style.backgroundColor = color;
  }
  document.addEventListener('click', function (event) {
    var roundedRectangle = document.getElementById('roundedRectangle');

    if (!roundedRectangle.contains(event.target)) {
      window.location.href = 'file:///Users/artemis/Desktop/Web%20to%20Print/F/final%20web/final-input/P4web-dropdown01/index.html';
    }
  });

  function changeBackgroundColor(color) {
    document.getElementById('roundedRectangle').style.backgroundColor = color;
  }
  