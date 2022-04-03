function show(val){
    document.getElementById('ans').value += val;
}

function solve(){
    let val = document.getElementById('ans').value;
    let res = eval(val);
    document.getElementById('ans').value = res;
}

function clearscreen(){
    document.getElementById('ans').value = '';
}