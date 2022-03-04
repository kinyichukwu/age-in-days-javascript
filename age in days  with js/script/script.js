function ageInDays(){
    var age = prompt('what year were you born in ', 'eg. 2003')
    var result = (2021 - age) * 365
    var h1 = document.createElement('h1');
    var text = document.createTextNode('You are ' + result + ' days old.');
    h1.appendChild(text);
    h1.setAttribute('id' , "ageInDaysText");
    document.getElementById('test').appendChild(h1)
}

function reset(){
    document.getElementById('ageInDaysText').remove();
}
