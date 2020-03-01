var animationCounter = 0;
function moveBox(s,d){
    let $S = $(
        $('#move-the-box')[0]
        .rows[s[0]]
          .cells[ s[1]]    
    );
    let $D = $(
        $('#move-the-box')[0]
        .rows[d[0]]
          .cells[ d[1]]    
    );
    let offS = $S.offset();
    let offD = $D.offset();
    let $B = $S[0].className;
    let $BOX = $('<div>')
        .addClass('box')
        .addClass($B)
        .css(offS)
        .appendTo('body')
        $S[0].className='';
        animationCounter++;
        $BOX.animate( offD, 1500, function(){
            $BOX.remove();
            $D[0].className = $B;
            animationCounter--;
        });
}
























