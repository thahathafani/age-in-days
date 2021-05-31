//Challenge 2:


function ageDays(){
    var birthYear = prompt('Please Enter Your Birth Year');
    var ageInDay = (2021 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageInDay + ' old');
    h1.setAttribute('id', 'ageDays');
    h1.appendChild(textAnswer);
    document.getElementById('result').appendChild(h1);
}

function reset(){
    document.getElementById('ageDays').remove();
}
