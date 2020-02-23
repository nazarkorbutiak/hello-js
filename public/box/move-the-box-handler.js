
function mouseOver( e ){
    let r = e.target.parentNode.rowIndex;
    let c = e.target.cellIndex;
    let offS =$(e.target).offset();
    if (board[r][c]>0 ){
        $('div#buttons')
            .show()
            .css( offS );
        selBox = [r,c];
    }else{
        $( 'div#buttons')
            .hide()
            .css( offS );
        selBox = [];
    }

}

function moveUp(){
    logs( 'Up' )

}

function moveLeft(){
    logs( 'Left' )

}

function moveRigth(){
    logs( 'RRR' )

}
function moveDown(){
    logs( 'DDD' )

}
function logs( msg ){
    console.log( msg, selBox )

}
