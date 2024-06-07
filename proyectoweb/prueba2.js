document.addEventListener('DOMContentLoaded', function(){
    const movies = document.querySelectorAll('.movie');
    movies .forEach(movie => {
        movie.addEventListener('mouseenter', function(){
            this.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
        });
        movie.addEventListener('mouseleave', function(){
            this.style.boxShadow = 'none';
        });
    });
});