document.addEventListener('DOMContentLoaded', function () {
  var inputField = document.getElementById('fname');

  inputField.addEventListener('input', function () {
    var inputValue = inputField.value.trim().toLowerCase();

    // 使用相对路径跳转到下一页
    if (inputValue === 'input') {
      window.location.href = 'P4web-range01/index.html';
    }
  });
});
