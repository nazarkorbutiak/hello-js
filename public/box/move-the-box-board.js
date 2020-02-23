var bRow = 8;
var bCol = 7;
var elBoard = document.querySelectorAll( 'table#move-the-box td' );


var board = [
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 1, 2, 0, 1, 0, 0 ]
];

function drawBoard() {
    
    for ( let r = 0; r < bRow; r++ ) {
        for ( let c=0; c< bCol; c++ ){
            let i = bCol * r +c;
            if (board[r][c] == 0 ) {
                elBoard[i].className ='';
            }else{
                elBoard[i].className ='box-' + board[r][c];
            }
        }
    }
    
    }
