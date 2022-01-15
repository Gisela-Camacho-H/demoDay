let player = "&#127775";
const board = document.getElementById("ticTacToeTable");
function reset(){
    for(i = 0; i < board.rows.length; i++){
        for(j = 0; j < board.rows[i].cells.length ; j++){
            board.rows[i].cells[j].innerHTML = "";
        }
    }
}
function rotatePlayer(){
    if(player === "&#127758;"){
        player = "&#127775;";
    } else player = "&#127758;"
}
function mark(event) {
    object = event.target;
    object.innerHTML = player;
    rotatePlayer();
}
board.addEventListener("click", mark);