$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:2500,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        820:{
            items:1
        }
    }
})



let nav = ["მთავარი","წითელი","თეთრი","ქვევრი","კონტაქტი"]
let links = ["index.html","witeli.html","tetri.html","qvevri.html","Contact.html"]

let text = '<ul class="flex">';

for(let i=0;i<nav.length;i++) {
    text += "<li><a href="+links[i]+">" + nav[i] + "</a></li>";
}
document.getElementById("nav").innerHTML = text;

function gamochena() {
    document.getElementById("messagebox").style.display = "block";
}

function gaqri() {
    document.getElementById("messagebox").style.display = "none";
}