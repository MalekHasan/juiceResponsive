function navToggle(){
    var nav=document.querySelector('nav');
    var navTogg=document.querySelector('.menu i');
    nav.classList.toggle('toggle');
    navTogg.classList.toggle('fa-times');

}
function showVideo() {
    var videoContainer=document.querySelector('.videoContainer');
    videoContainer.classList.add('playToggle');
}
function closeBtn() {
    var videoContainer=document.querySelector('.videoContainer');
    videoContainer.classList.remove('playToggle');

    
}