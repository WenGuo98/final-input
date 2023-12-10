function navigateToPage() {

  var selectElement = document.getElementById('subject');

  var selectedValue = selectElement.value;

  var nextPageUrl = 'file:///Users/artemis/Desktop/Web%20to%20Print/F/final%20web/final-input/P4web-checkbox02/index.html';

  var finalUrl = nextPageUrl + '?dropdownValue=' + selectedValue;

  window.location.href = finalUrl;
}