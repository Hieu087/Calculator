function insert(num){
    document.form.textview.value = document.form.textview.value + num;
}

function calculate(){
    var index = document.form.textview.value;
    if(index){
        document.form.textview.value = eval(index);
    }
}

function clean(){
    document.form.textview.value = "";
}

function back(){
    var index = document.form.textview.value;
    document.form.textview.value = index.substring(0, index.length - 1);
}