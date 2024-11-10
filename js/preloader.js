const preloader =  function() {
    const preloader = document.querySelector(".preloder")
// console.log(preloader)
preloader.classList.add('active')

// setTimeout( function() {
//     preloader.classList.remove('active')
// }, 500)

setTimeout( () => {
preloader.classList.remove("active")
})
}

preloader();