function init() {
  var button = document.getElementById('entrybutton');
  var text = document.getElementById('entryinput');
  var showresults = document.getElementById('textoutput');

  button.addEventListener('click', function() {
    window.alert('Scotts website says: ' + text.value);
  });

  button.addEventListener('click', function() {
    showresults.innerHTML = text.value;
    });
}
window.addEventListener('load', init);