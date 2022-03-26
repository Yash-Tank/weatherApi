var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

button.addEventListener('click', function(){
    // use your own id from open Weather map                                       here
fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=50a7aa80fa492fa92e874d23ad061374')  
// https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=50a7aa80fa492fa92e874d23ad061374  for log & lat
.then(response => response.json())
.then(data => {
    var nameValue = data['name'];
    var tempValue = data['main']['temp'];
    var descValue = data['weather'][0]['description'];

    name.innerHtml = nameValue;
    temp.innerHTML = tempValue;
    desc.innerHTML = descValue;

})

.catch(err=>alert("wrong city name!"))
})