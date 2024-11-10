const scrollToTop = function(){

    const topBtn = document.getElementById("scrollToTopButton")
    // console.log(topBtn)
    
    topBtn.addEventListener( "click", function(event) {
    
        event.preventDefault()
        seamless.scrollIntoView(document.querySelector(".header"), {
            behavior: "smooth",
            block: "center",
            inline: "center",
        });
    })
}
scrollToTop();
