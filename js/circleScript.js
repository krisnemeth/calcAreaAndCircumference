// circleScript for calculating radius & circumference of a circle.

const pi = 3.14;
document.getElementById('radius').focus();//focuses the cursor into the input field

document.getElementById('calculate').addEventListener('click', function(){
    // console.log('button clicked okay')
    document.getElementById('answer').innerHTML = '';
    let radiusInput = document.getElementById('radius').value;

    if (radiusInput === '') {
        document.getElementById('answer').innerHTML = `I'd enter a value for the radius if I were you.`
    } else if (isNaN(radiusInput)) {
        document.getElementById('answer').innerHTML = `It needs to be a number my friend. Math. With numbers, yes?`
    } else {
        calcArea(radiusInput);
        calcCircum(radiusInput);
    }
})



function calcArea(radiusValue){
    let area = (pi * (radiusValue * radiusValue)).toFixed(2);
    document.getElementById('answer').innerHTML += 'The area of the circle is: ' + area + '<br><br>';
}

function calcCircum(radiusValue){
    let circumference = (2 * pi * radiusValue).toFixed(2);
    document.getElementById('answer').innerHTML += `The circumference of the circle is: ${circumference}`;
}