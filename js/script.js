function init(){
  
var fc = document.getElementById('entryinput')
		//use fc.value in inspector to see the input value
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