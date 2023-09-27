window.addEventListener('load',function(){
    console.log('page is loaded');

    fetch('http://api.open-notify.org/astros.json')
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);
    })
})
