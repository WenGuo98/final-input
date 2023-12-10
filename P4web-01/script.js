document.addEventListener('DOMContentLoaded', function () {
    var inputField = document.getElementById('fname');

    inputField.addEventListener('input', function () {
      // 获取输入框的值
      var inputValue = inputField.value.trim().toLowerCase();

      // 如果输入值为 "input"，执行页面跳转
      if (inputValue === 'input') {
        window.location.href = 'file:///Users/artemis/Desktop/Web%20to%20Print/F/web/P4web-range01/index.html';
      }
    });
  });