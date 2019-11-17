
const boardSize = 4;

var board = [
    [2, , 0, 0],
    [0, 2, 0, 0],
    [0, 0, 2, 2],
    [0, 2, 0, 0],
];

var elBoard = document.querySelectorAll( 'table#game2048 td' );
function drawBoard(  ) {
    for ( let r=0; r< boardSize; r++ ) {
        for ( let c=0; c< boardSize; c++ ){
            let i = boardSize * r +c;
            if( board[ r ][ c ] >0) {
                elBoard[ i ].innerText = board[ r ][ c ];
            }else{
                elBoard[ i ].innerText = '';
            }      
        }
    }
    
}
 
drawBoard();
// [ 0, 0, 0, 0]
// 1. всі кліт без останн (с)
//  2. 0 ?( так )
//   2.1)  вправо ? > 0 ( cNe0 ) = 0
//   2.2) ( c ) = (cNe0); cNeo = 0
//   3. вправо = c ?  так  ( cEq )
//  3.1) (c) += (cEq); (cEq=0)
