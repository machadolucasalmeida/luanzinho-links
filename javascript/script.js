document.addEventListener('DOMContentLoaded', () => {

    new TypeIt('.text', {
        speed: 200,
        loop: true,
    })
        .type('Streamer', { delay: 900}) .delete(8)
        .type('Youtuber', { delay: 900}) .delete(8)
    .go()
});