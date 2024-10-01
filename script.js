// Music playlist
const audioPlayer = document.getElementById('audioPlayer');
const playlist = ['GET_ENUF.mp3', 'JACK_DA_FUNK.mp3', 'DA_PEOPLE.mp3']; // Replace with your actual file names
let currentSong = 0;

audioPlayer.src = playlist[currentSong]; // Set the first song
audioPlayer.volume = 0.5; // Set volume to 50%

// Automatically play music on page load
window.onload = () => {
    audioPlayer.play();
};

// Automatically play the next song when the current one ends
audioPlayer.addEventListener('ended', () => {
    currentSong++;
    if (currentSong >= playlist.length) {
        currentSong = 0; // Loop back to the first song
    }
    audioPlayer.src = playlist[currentSong]; // Set the next song
    audioPlayer.play(); // Play the new song
});

