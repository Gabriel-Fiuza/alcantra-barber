let count = 1
document.getElementById('slide1').checked = true

setInterval(() => nextImage(), 1500)

function nextImage(){
    count++;
    if(count > 3){
        count = 1
    }
    document.getElementById(`slide${count}`).checked = true
}