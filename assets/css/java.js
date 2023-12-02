
const loading=document.querySelector('.loading')

window.addEventListener('load', function(){
    
    setTimeout(function(){

        loading.classList.add('opacity-0','invisible')
    }, 3000)
});