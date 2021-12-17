// circleScript for calculating radius & circumference of a circle.

const pi = 3.14;
document.getElementById('radius').focus();//focuses the cursor into the input field

document.getElementById('calculate').addEventListener('click', function(){
    // console.log('button clicked okay')
    document.getElementById('answer').innerHTML = '';

    let radiusInput = document.getElementById('radius').value;
    
    calcArea(radiusInput);
    calcCircum(radiusInput);
})



function calcArea(radiusValue){
    let area = (pi * (radiusValue * radiusValue));
    document.getElementById('answer').innerHTML += 'The area of the circle is: ' + area + '<br><br>';
}

function calcCircum(radiusValue){
    let circumference = (2 * pi * radiusValue);
    document.getElementById('answer').innerHTML += `The circumference of the circle is: ${circumference}`;
}