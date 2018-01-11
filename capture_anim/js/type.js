
window.onload = function () {
    var question1 = "Bonjour je voudrais créer un client",
        question2 = "Ragantoni Jeanne";


    document.getElementById('type-first-question').onclick = function () {
        
    };

    document.getElementById('type-second-question').onclick = function () {
        typeWriter({
            twID: 123,
            text: question2,
            id: 'type-second-question',
            delay: 100
        });
    };



};
