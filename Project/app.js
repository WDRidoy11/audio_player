for (let i = 0; i < 3; i++) {
    let heading = document.querySelectorAll('.BTN');
    heading[i].addEventListener('click', function() {
        let text = this.innerHTML;
        audio(text);
    });
};

function audio(sound) {
    switch (sound) {
        case 'a':
            var audio = new Audio('sound/clap.wav');
            audio.play();
            break;
        case 'b':
            var audio = new Audio('sound/hihat.wav');
            audio.play();
            break;
        case 'c':
            var audio = new Audio('sound/kick.wav');
            audio.play();
            break;
    };
};