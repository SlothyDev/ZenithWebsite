const map = document.querySelector('map')
fetch('/map.html').then(res=>res.text()).then(data=>{
    map.innerHTML=data
})