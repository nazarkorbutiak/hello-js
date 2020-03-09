
var selBox = [];

var animationCounter = 0;






//- Має щось Бути!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


  

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