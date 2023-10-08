function toggleActive(btn){
    btn.classList.toggle('active');
}

function toggleList(id){
    document.getElementById(id).classList.toggle('d-none');
}

function toggleNext(btn){
    btn.nextElementSibling.classList.toggle('d-none');
}