console.log('loaded');

const hidden_form_artist = document.getElementById('hidden_form_artist')
const hidden_form_artist_btn = document.getElementById('hidden_form_artist_btn').addEventListener('click', () => {
    // Toggle the visibility of the form container
    hidden_form_artist.classList.toggle('hidden');
});

const hidden_form_festival = document.getElementById('hidden_form_festival')
const hidden_form_festival_btn = document.getElementById('hidden_form_festival_btn').addEventListener('click', () => {
    // Toggle the visibility of the form container
    hidden_form_festival.classList.toggle('hidden');
});

const hidden_form_concert = document.getElementById('hidden_form_concert')
const hidden_form_concert_btn = document.getElementById('hidden_form_concert_btn').addEventListener('click', () => {
    // Toggle the visibility of the form container
    hidden_form_concert.classList.toggle('hidden');
});