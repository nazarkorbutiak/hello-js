
//- Має щось Бути!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


function boomH() {
    let Boom = [];
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
                if ( l>2 ) {
                    for ( let cc=c; cc<c+l; cc++){
                        Boom.push([r,cc]);
                        Boom = true;
                    }

                }
            }
        }
        return Boom;
    }
//- Має щось Бути!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    
}var Boom = false;
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
    //return ( bH || bV );
}//- Має щось Бути!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//if( Boom ){
 ///   setTimeout( function(){clearBoom();}, 500)
    //schosi mae bytu!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//clearBoom();
    //gravitation();
    //while ( animationCounter>0) {};
    //let Boom = boom();
