const panels = document.querySelectorAll('.panel');
const soundButtons = document.querySelectorAll('.btnSound');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    });
});

// Fungsi untuk menghapus kelas aktif dari semua panel
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}

// Event listener untuk tombol sound
soundButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const audio = button.getElementsByTagName('audio')[0]
        stopAllAudio();
        const onOffIcon = button.getElementsByTagName('img')[0]
        if (onOffIcon.getAttribute("src") === 'mute.png') {
            onOffIcon.setAttribute("src", 'sound-on.png');
            audio.play();
        } else {
            onOffIcon.setAttribute("src", 'mute.png');
            audio.pause();
        }
    });
});

// Fungsi untuk menghentikan semua audio
function stopAllAudio() {
    const audios = document.querySelectorAll('audio');
    audios.forEach(audio => {
        audio.pause();
        audio.currentTime = 0; // Reset audio ke awal
    });
}