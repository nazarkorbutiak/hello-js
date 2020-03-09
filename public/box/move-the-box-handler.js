
function mouseOver( e ){
    let r = e.target.parentNode.rowIndex;
    let c = e.target.cellIndex;
    let offS =$(e.target).offset();
    if ( board[r][c]>0 ){
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
    if ( selBox.length > 0 && selBox[0] > 0){
        let r = selBox [0];
        let c = selBox [1];
        if ( board[r-1][c] == 0){
            moveCells([r,c],[r-1,c] );
            moveBox( [r,c], [r-1,c] );

        }else{
            swapCells( [r,c], [r-1,c] );
            moveBox( [r,c], [r-1,c] );
            moveBox( [r-1,c], [r,c] );

        }
    }
    selBox=[];
}

function moveLeft(){
    if ( selBox.length > 0 && selBox[0]< bCol-1){
        let r = selBox [0];
        let c = selBox [1];
        if ( board[r][c-1] == 0){
            moveCells([r,c],[r,c-1] );
            moveBox( [r,c], [r,c-1] );

        }else{
            swapCells( [r,c], [r,c-1] );
            moveBox( [r,c], [r,c-1] );
            moveBox( [r,c-1], [r,c] );

        }
    }
    selBox=[];
}

function moveRigth(){
    if ( selBox.length > 0 && selBox[0]< bCol+ 1){
        let r = selBox [0];
        let c = selBox [1];
        if ( board[r][c+1] == 0){
            moveCells([r,c],[r,c+1] );
            moveBox( [r,c], [r,c+1] );

        }else{
            swapCells( [r,c], [r,c+1] );
            moveBox( [r,c], [r,c+1] );
            moveBox( [r,c+1], [r,c] );

        }
    }
    selBox=[];
}

function moveDown(){
    if ( selBox.length > 0 && selBox[0] < bRow - 1){
        let r = selBox [0];
        let c = selBox [1];
        if ( board[r+1][c] == 0){
            moveCells([r,c],[r+1,c] );
            moveBox( [r,c], [r+1,c] );

        }else{
            swapCells( [r,c], [r+1,c] );
            moveBox( [r,c], [r+1,c] );
            moveBox( [r+1,c], [r,c] );

        }
    }

    selBox=[];
}
function logs( msg ){
    console.log( msg, selBox )

}


