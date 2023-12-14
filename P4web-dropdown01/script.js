function navigateToPage() {

  var selectElement = document.getElementById('subject');

  var selectedValue = selectElement.value;

  var nextPageUrl = '../P4web-checkbox02/index.html';

  var finalUrl = nextPageUrl + '?dropdownValue=' + selectedValue;

  window.location.href = finalUrl;
}