function show(word) {
    document.querySelector('.textbox').value = word;

}
let dropdown = document.querySelector('.dropdown');
dropdown.onclick = function(){
    dropdown.classList.toggle('active');
}