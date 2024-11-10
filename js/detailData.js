const detailData = function() {
    
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
    
        const renderAnimeDetail = function (array, itemId) {
            
        }
    
        // const renderTopAnime = function (array) {
        //     const filterGallery = document.querySelector('.filter__gallery')
    
        //     filterGallery.innerHTML = "";

        //     console.log(filterGallery)
        //     array.forEach(function (item) {
        //         console.log(item)
        //         filterGallery.insertAdjacentHTML('afterbegin',
        //             `<div class="product__sidebar__view__item set-bg mix day years"
        //                 data-setbg="${item.image}">
        //                 <div class="ep">${item.rating} / 10</div>
        //                 <div class="view"><i class="fa fa-eye"></i> ${item.views}</div>
        //                 <h5><a href="/anime-details.html">${item.title}</a></h5>
        //             </div>
        //    `)
        //     });
    
        //     filterGallery.querySelectorAll(".set-bg").forEach(function (elem) {
        //         const src = elem.dataset.setbg
    
        //         elem.style.backgroundImage = `url(${src})`
        //     })
    
    
        //     // console.log(filterGallery)
        // }
    
        fetch("https://anime-47ba1-default-rtdb.firebaseio.com/anime.json")
            .then(function (response1) {
                return response1.json()
            })
            .then(function (data) {
    
                

                const ganres = new Set()
                const params = new URLSearchParams(window.location.search).get("itemId")
                console.log(params);

                data.forEach(function (item) {
                    ganres.add(item.ganre)
                })
    
                // renderTopAnime(data.sort(function (a, b) {
                //     return b.views - a.views
                // }).slice(0, 5))

                if (params) {
                    renderAnimeDetail(data, [params])
                }
                else {
                    console.log ("Аниме отсуцтвует!")
                }
    
                
                // console.log(ganres)
                
                renderGanreList(ganres)
            })






}
detailData();