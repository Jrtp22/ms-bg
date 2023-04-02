let player1 = 'X';
const divs = document.querySelectorAll('.divs');
divs.forEach(div => {
  div.addEventListener('click', divClick);
});
function divClick(){

}
let currentPlayer = 'X';
function restart(){
    window.location.reload();}