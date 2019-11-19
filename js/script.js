function init(){
  
var fc = document.getElementById('entryinput')

		alert(fc.value);
		fc.value = "words";	

  document.getElementById("textoutput").innerHTML = fc.value;
}




var x = document.getElementById('container');
x.addEventListener('click', init);
x.addEventListener('click', function(){
  console.log('I was Clicked!');
  x.innerHTML = 'entryinput';
		});


window.addEventListener('load', init);