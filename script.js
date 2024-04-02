document.addEventListener('DOMContentLoaded', function() {
    const audio = document.querySelector('#audio audio');
    if(audio) {
        audio.addEventListener('play', function() {
            for(let i = 0; i < 9; i++) {
                setTimeout(confetti, i * 3000);
            }
        });
    } else {
        console.log('Audio-Element wurde nicht gefunden');
    }
});