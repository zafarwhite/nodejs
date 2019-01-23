console.clear();
var inp1 = document.getElementById('inp1');
inp1.addEventListener('change', function(){
	console.log('change');
  var pattern = '/^\+38\(\d{3}\)\d{7}$';
  if (pattern.test(inp1.value)){
  	inp1.style.color = 'green';
  } else {
  	inp1.style.color = 'red';
  }
})

// javascript pattern

inp1 = document.getElementById('inp1');
inp1.addEventListener('keydown', function(){
	console.log(inp1.value);
})