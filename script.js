document.getElementById('action-button').addEventListener('click', function() {
    var sentence1 = document.getElementById('sentence1');
    var sentence2 = document.getElementById('sentence2');
    
    sentence1.classList.toggle('hidden');
    sentence2.classList.toggle('hidden');
});
