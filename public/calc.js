
var elem_A = document.getElementById('el_a');
var elem_B = document.getElementById('el_b');
var elem_R = document.getElementById('el_r');



function myAdd(){
    let A = elem_A.value;
    let B = elem_B.value;
    let R = Number(A) + Number(B);
    elem_R.innerHTML = R;
}

