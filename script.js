// JavaScript per animazioni e interazioni

document.addEventListener('DOMContentLoaded', function() {
    // Funzione per mostrare ulteriori dettagli
    document.getElementById('showMore').addEventListener('click', function() {
        alert('Mostra ulteriori dettagli non implementati in questo esempio.');
    });

    // Gestione del modulo di contatto
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Evita l'invio del modulo per il test
        alert('Modulo inviato con successo!');
    });
});

