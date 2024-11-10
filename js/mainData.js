const mainData = function () {

const renderGanreList = function(ganres) {
    const dropdownblock = document.querySelector('.header__menu .dropdown')
    dropdownblock.innerHTML = '';
    ganres.forEach(function(ganre){
        dropdownblock.insertAdjacentHTML('afterbegin', 
        `<ul>
        <li><a href="./categories.html?ganre=${ganre}">${ganre}</a></li>
        </ul>`
        )
    })
}

    const renderAnimeList = function (array, ganres) {
        const wrapper = document.querySelector('.product .col-lg-8')
        wrapper.innerHTML = "";

        ganres.forEach(function (ganre) {
            const preoductBlock = document.createElement('div')
            const listBlock = document.createElement('div')

            listBlock.classList.add('row')
            preoductBlock.classList.add('mb-5')

            const list = array.filter(function (item) {
                return item.ganre === ganre
            })

            preoductBlock.insertAdjacentHTML('afterbegin', `
                        <div class="row">
                            <div class="col-lg-8 col-md-8 col-sm-8">
                                <div class="section-title">
                                    <h4>${ganre}</h4>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4">
                                <div class="btn__all">
                                    <a href="/categories.html?ganre=${ganre}" class="primary-btn">View All <span class="arrow_right"></span></a>
                                </div>
                            </div>
                        </div>
            
            ` )

            list.forEach(function (item) {
                const tagsBlock = document.createElement('ul')
                
                item.tags.forEach(function (tag) {
                    tagsBlock.insertAdjacentHTML("afterbegin",
                        `<li>${tag}</li>`
                    )
                    // console.log( tagsBlock)
                })

                listBlock.insertAdjacentHTML("afterbegin", `
                <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="product__item">
                                    <div class="product__item__pic set-bg" data-setbg="${item.image}">
                                        <div class="ep">${item.rating} / 10</div>
                                        <div class="view"><i class="fa fa-eye"></i> ${item.views}</div>
                                    </div>
                                    <div class="product__item__text">
                                        ${tagsBlock.outerHTML}
                                        <h5><a href="/anime-details.html?itemId=${item.id}">${item.title}</a></h5>
                                    </div>
                                </div>
                            </div>
                `)
            })

            preoductBlock.append(listBlock)
            wrapper.append(preoductBlock)

            wrapper.querySelectorAll(".set-bg").forEach(function (elem) {
                const src = elem.dataset.setbg

                elem.style.backgroundImage = `url(${src})`
            })


        })
    }

    const renderTopAnime = function (array) {
        const filterGallery = document.querySelector('.filter__gallery')

        filterGallery.innerHTML = "";
        array.forEach(function (item) {
            console.log(item)
            filterGallery.insertAdjacentHTML('afterbegin',
                `<div class="product__sidebar__view__item set-bg mix day years"
                    data-setbg="${item.image}">
                    <div class="ep">${item.rating} / 10</div>
                    <div class="view"><i class="fa fa-eye"></i> ${item.views}</div>
                    <h5><a href="/anime-details.html">${item.title}</a></h5>
                </div>
       `)
        });

        filterGallery.querySelectorAll(".set-bg").forEach(function (elem) {
            const src = elem.dataset.setbg

            elem.style.backgroundImage = `url(${src})`
        })


        // console.log(filterGallery)
    }

    fetch("https://anime-47ba1-default-rtdb.firebaseio.com/anime.json")
        .then(function (response1) {
            return response1.json()
        })
        .then(function (data) {

            const ganres = new Set()

            renderTopAnime(data.sort(function (a, b) {
                return b.views - a.views
            }).slice(0, 5))

            data.forEach(function (item) {
                ganres.add(item.ganre)
            })
            // console.log(ganres)
            renderAnimeList(data, ganres)
            renderGanreList(ganres)
        })

}
mainData()