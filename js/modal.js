const modal = function () {

    const modal = document.querySelector('.search-model')
const modalBtn = document.querySelector('.icon_search')

const modalClose = modal.querySelector(".icon_close")

modalBtn.addEventListener('click', function() {
    // console.log("click");
    modal.style.display ="block";
});

modalClose.addEventListener('click', function () {
    modal.style.display ="none";
})

}
modal()