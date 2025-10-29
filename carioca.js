document.getElementById("btnInicio").addEventListener("click", function(e) {
    e.preventDefault();
    const destino = this.href;
    document.body.classList.add('fade-out');

    setTimeout(function() {
        window.location.href = destino;
    }, 500);
});