// Select the necessary elements
const audioPlayer = document.getElementById('audioPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');
const prevTrackBtn = document.getElementById('prevTrack');
const nextTrackBtn = document.getElementById('nextTrack');
const progressBar = document.getElementById('progressBar');
const trackTitleElement = document.getElementById('trackTitle');
const trackArtistElement = document.getElementById('trackArtist');
const trackPlayButtons = document.querySelectorAll('.track-play-btn');

let isPlaying = false;
let currentTrackIndex = 0;

const tracks = [
    { src: 'choo lo.mp3', title: 'choo lo', artist: 'choo lo' },
    { src: 'dil tu.mp3', title: 'dil tu', artist: 'dil tu' },
    { src: 'tum se.mp3', title: 'tum se', artist: 'tum se' },
    { src: 'oochi oochi.mp3', title: 'oochi oochi', artist: 'oochi oochi' },
    { src: 'dildara.mp3', title: 'dildara', artist: 'dildara' },
    { src: 'suniya.mp3', title: 'suniya', artist: 'suniya' },
    { src: 'saudebaazi.mp3', title: 'saudebaazi', artist: 'saudebaazi' },
     { src: 'jiyein Kyun 128 Kbps.mp3', title: 'Jiyein Kyun 128 kbps', artist: 'Jiyein Kyun 128 Kbps' },
    { src: 'tu chaiyea.mp3', title: 'tu chaiyea', artist: 'tu chaiyea' }
    
    
];
function playTrack(index) {
    const track = tracks[index];
    audioPlayer.src = track.src;
    audioPlayer.play();
    trackTitleElement.textContent = track.title;
    trackArtistElement.textContent = track.artist;
    playPauseBtn.textContent = 'Pause';
    isPlaying = true;
}

function togglePlayPause() {
    if (isPlaying) {
        audioPlayer.pause();
        playPauseBtn.textContent = 'Play';
    } else {
        audioPlayer.play();
        playPauseBtn.textContent = 'Pause';
    }
    isPlaying = !isPlaying;
}

function updateProgress() {
    if (audioPlayer.duration) {
        const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        progressBar.value = progress;
    }
}

function setProgress() {
    const value = progressBar.value;
    audioPlayer.currentTime = (value / 100) * audioPlayer.duration;
}

function playNextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    playTrack(currentTrackIndex);
}

playPauseBtn.addEventListener('click', togglePlayPause);
prevTrackBtn.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    playTrack(currentTrackIndex);
});
nextTrackBtn.addEventListener('click', playNextTrack);
progressBar.addEventListener('input', setProgress);

audioPlayer.addEventListener('timeupdate', updateProgress);
audioPlayer.addEventListener('ended', playNextTrack); // Autoplay next track when current one ends

trackPlayButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        currentTrackIndex = index;
        playTrack(currentTrackIndex);
    });
});
