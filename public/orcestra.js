function playS  ( ks ) {
    const audio = document.querySelector( 'audio[data-key="' + ks + '"]');

   const diykey = document.querySelector('div[data-key="' + ks +'"]');
   if (!audio) { return; }
   if (!divkey) { return; }
   audio.curentTime = 0;
   audio.play();
   divkey.className = 'active';
}
function clearS ( ks ) {
    const divcey = document.querySelector( 'div[data-key="' + ks + '"]');
    if (!divkey) { return; }
    divkey.className = '';
}
function myKeysDw( e ) {
    playS( e.keyCode );
}
function myKeysUp( e ) {
    clearS( e.keyCode );
}