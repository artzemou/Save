
window.onload = function () {
    var toType = "Bertrand Magalie";


    document.getElementById('print').onclick = function () {
        typeWriter({
            twID: 123,
            text: toType,
            id: 'search-input',
            delay: 100
        });
    };
    
    

};