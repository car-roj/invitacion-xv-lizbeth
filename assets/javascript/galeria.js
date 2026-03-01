var slide_index = 0;
var size = 1;
var num_imgs = 6
function move(n){
    slide_index = slide_index+n
    if(slide_index >= num_imgs){
        slide_index = 0
    }
    if(slide_index < 0){
        slide_index = num_imgs-1
    }
    for(var i=1; i<=size; i++){
        document.getElementById("Galeria-" + i).src = "./assets/imgs/Galeria/IMG (" + ((i+slide_index)) + ").jpg"
    }
}
