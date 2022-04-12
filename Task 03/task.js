let cel = document.getElementById('celsius')
let far = document.getElementById('fahrenheit')

function celtofar(){
    let op = (parseFloat(cel.value) * 9/5)+ 32;
    far.value = parseFloat(op.toFixed(2));
}

function fartocel(){
    let op = (parseFloat(far.value) - 32) *5/9;
    cel.value = parseFloat(op.toFixed(2));
}