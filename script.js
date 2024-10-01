// Music playlist
const audioPlayer = document.getElementById('audioPlayer');
const playlist = ['GET_ENUF.mp3', 'JACK_DA_FUNK.mp3', 'DA_PEOPLE.mp3']; // Replace with your actual file names
let currentSong = 0;
let shuffleMode = false;

// Set the first song and volume
audioPlayer.src = playlist[currentSong];
audioPlayer.volume = 0.25;

// Play music on page load
window.onload = () => {
    audioPlayer.play();
};

// Automatically play the next song when the current one ends
audioPlayer.addEventListener('ended', nextSong);

// Next song function
function nextSong() {
    if (shuffleMode) {
        currentSong = Math.floor(Math.random() * playlist.length); // Random song
    } else {
        currentSong++;
        if (currentSong >= playlist.length) {
            currentSong = 0; // Loop back to the first song
        }
    }
    audioPlayer.src = playlist[currentSong];
    audioPlayer.play();
}

// Previous song function
function prevSong() {
    currentSong--;
    if (currentSong < 0) {
        currentSong = playlist.length - 1; // Go to the last song
    }
    audioPlayer.src = playlist[currentSong];
    audioPlayer.play();
}

// Shuffle toggle function (no alert)
function toggleShuffle() {
    shuffleMode = !shuffleMode;
}

// Button event listeners
document.getElementById('nextSong').addEventListener('click', nextSong);
document.getElementById('prevSong').addEventListener('click', prevSong);
document.getElementById('shuffle').addEventListener('click', toggleShuffle);