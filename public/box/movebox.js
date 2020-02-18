var bRow = 8;
var bCol = 7;

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

var elBoard = document.querySelectorAll( 'table#move-the-box td' );
var selBox = [];

var animationCounter = 0;



function boomH() {
    let Boom = false;
    for ( let r=bRow-1; r>=0; r-- ){
        for (let c=0; c<bCol-1; c++){
            if ( board[r][c]>0){
                let l=1
                for ( let cc=c+1; cc<bCol; cc++ ){
                    if ( board[r][cc] != board[r][c] ){
                        break;
                    }
                    l++
                }
                if ( l>z ) {
                    for ( let cc=c; cc<c+l; cc++){
                        board[r][c]
                    }
                }
            }
        }
    }
    
}


//- Має щось Бути!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var Boom = false;
for ( let c= 0; c<bCol; c++ ){
    for ( let r=bRow-1; r>0; r--){
        if( board[r][c]>0 ){
            let l=1;
            //for (){

            //}
        }
    }
}
//- Має щось Бути!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!





function boom() {
    let bH = boomH();
    let bV = boomV();
    return ( bH || bV );
}//- Має щось Бути!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


function drawBoard() {
    clearBoom();
    gravitation();
    while ( animationCounter>0) {};
    let Boom = boom();
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
    if( Boom ){
        setTimeout( function(){clearBoom();}, 500)
        //schosi mae butu!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    }
}
    

function boardClick( e ) {
    let r =  e.target.parentNode.rowIndex;
    let c = e.target.cellIndex;
    selBox = [ r, c];
    if( board[r][c] > 0){
        selBox = [ r, c ];

    }
}

function moveLeft() {
    if( selBox.length>0 && selBox[1]>0 ) {
        let r = selBox[0];
        let c = selBox[1];
        if( board[r][c-1] == 0 ){
            board[r][c-1] = board[r][c];
            board[r][c] = 0;                
        }else{
            let t = board[r][c];
            board[r][c]=board[r][c-1];
            board[r][c]=t;
        }
        selBox = [];
        drawBoard();
    }
}
function moveUp() {
    if( selBox.length>0 && selBox[0]>0 ) {
        let r = selBox[0];
        let c = selBox[1];
        if( board[r-1][c]==0) {
            board[r][c-1] = board[r][c];
            board[r][c] = 0;             

        }
    }
    
}
function moveDown() {
    
}
function moveRigth() {
    
}

function moveBox( s, d ){
    let $S = $(
        $( '#move-the-box' )[0]
    .rows[ s[0]]
        .cells[ s[1] ]
        );
        let $D = $(
            $( '#move-the-box' )[0]
    .rows[ d[0]]
        .cells[ d[1] ]
            );
            
        let offS = $S.offset();
        let offD = $D.offset();
        let $B = $S[0].className;

        

let offS = $S.offset();


let $BOX = $('<div>')
    .addClass('box')
   .addClass( b ) 
    .css( offS )
    .appendTo('body')
    $S[0].className="";
    animationCounter++; 
$BOX.animate( offD, 3000, function(){
    $BOX.remove();
    $D[0].className="$B";
    animationCounter--;
});
};
drawBoard();