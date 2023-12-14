function changeBackgroundColor(color) {
    const roundedRectangle = document.querySelector('.rounded-rectangle');
    
    roundedRectangle.style.backgroundColor = color;
  }
  document.addEventListener('click', function (event) {
    var roundedRectangle = document.getElementById('roundedRectangle');

    if (!roundedRectangle.contains(event.target)) {
      window.location.href = '../P4web-dropdown01/index.html';
    }
  });

  function changeBackgroundColor(color) {
    document.getElementById('roundedRectangle').style.backgroundColor = color;
  }
  