const bgElements = function () {

    const elements = document.querySelectorAll(".set-bg")

    //  console.log(elements)

    elements.forEach(function (elem) {
        const src = elem.dataset.setbg
        //console.log(elem);
        elem.style.backgroundImage = `url(${src})`
    })

    // for (i=0; i< elements.length; i++ ) {

    //     const src = elements[i].dataset.setbg
    // //  elements[i].style.backgroundImage = 'url('+ src +')' 
    //     elements[i].style.backgroundImage = `url(${src})` 
    //     // console.log(src)
    //     // console.log (elements[i].style.backgroundImage)

    // }

    // const array = [1, 2, 3, 4, 5]

    // const newArray = array.filter(function (item) {
    //    return item <=3
    // })
    // console.log(newArray)

    // const array = [
    //     {
    //         id: 0,
    //         value: 100,
    //     },
    //     {
    //         id: 2,
    //         value: 300,
    //     },
        
    //     {
    //         id: 1,
    //         value: 200,
    //     },
        

    // ]

    // const newArray = array.sort(function (a, b) {
    //     return a.value - b.value
    // })
    // console.log(newArray)
}
bgElements();
