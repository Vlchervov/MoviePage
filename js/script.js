'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const animeDB = {
        anime: [
            'Наруто',
            'Блич',
            'Атака Титанов',
            'Этот замечательный мир',
            'Клинок рассекающий демонов',
            'Магическая битва',
        ],
    };

    const adv = document.querySelectorAll('.promo__adv img'),
        background = document.querySelector('.promo__bg'),
        animeList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]'),
        wrapper = document.querySelector('.promo__menu');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newAnime = addInput.value;
        const favorite = checkbox.checked;

        if (newAnime) {
            if (newAnime.length > 21) {
                newAnime = `${newAnime.substring(0, 22)}...`;
            }

            if (favorite) {
                console.log('Добавляем любимый фильм');
            }

            animeDB.anime.push(newAnime);
            sortArr(animeDB.anime);

            createAnimeList(animeDB.anime, animeList);
        }

        event.target.reset();
    });

    wrapper.addEventListener('click', (event) => {
        if (event.target && event.target.tagName == 'A') {
            console.log('click');
        }
    });

    // genre.textContent = 'Сёнен';

    // background.style.cssText = `background: url('../img/Kimetsu.jpg')`;

    const sortArr = (arr) => {};

    // movieDB.movies.forEach((film, i) => {
    //     movieList.innerHTML =
    // })

    function createAnimeList(anime, parent) {
        parent.innerHTML = '';
        sortArr(anime);

        anime.map((film, index) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">${index + 1} ${film}
            <div class="delete"></div>
            </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                animeDB.anime.splice(i, 1);

                createAnimeList(anime, parent);
            });
        });
    }

    createAnimeList(animeDB.anime, animeList);

    //slider

    const listOfAnime = [
        {
            name: 'Клинок рассекающий демонов',
            image: 'https://moe.shikimori.one/system/user_images/original/33635/1450197.jpg',
            descr: 'Действие происходит в эпоху Тайсё. Ещё с древних времён ходят слухи о том, что в лесу обитают человекоподобные демоны, которые питаются людьми и ходят по ночам, ища новую жертву. Но... это же просто легенда, ведь так?..',
            ratingIMDb: 'IMDb: 8.7',
            ratingKP: 'Кинопоиск: 8.1'
        },
        {
            name: 'Невероятные приключения ДжоДжо: Каменный Океан',
            image:
            'https://images4.alphacoders.com/898/thumb-1920-898798.jpg',
            descr: 
            'Действие происходит в 2011 году в порту Сент-Люси, Флорида. Дочь Джотаро, Джолин Куджо, оказывается втянута в неприятный инцидент, в результате которого попадает в тюрьму. Не видя никакого выхода из этой ситуации, Джолин почти теряет надежду выбраться из заключения и уже готова смириться со своей незавидной участью, когда в ней пробуждается стенд.',
            ratingIMDb: 'IMDb: ???',
            ratingKP: 'Кинопоиск: ???'
        },
        {
            name: 'Магическая Битва',
            image: 'https://wallpapercave.com/wp/wp8047223.jpg',
            descr: 'Действие аниме происходит в мире, где люди оказались вовсе не последним звеном в пищевой цепочке и любой ничего не подозревающий обыватель при известной доле невезения может оказаться съеденным демоном.',
            ratingIMDb: 'IMDb: 8.7',
            ratingKP: 'Кинопоиск: 8'
        },
    ];

    const sliderContainer = document.querySelector('.slider-container'),
        sliderList = document.querySelector('.slider-container__list'),
        nextButton = document.getElementById('next'),
        backButton = document.getElementById('back');

    listOfAnime.map(({ name, image, descr, ratingIMDb, ratingKP}) => {
        sliderList.innerHTML += `
          <li class="slider-container__item">
          <img src='${image}'
          <div class="promo__bg">
              <div class="new__bg">
                  <div class="promo__title">${name}</div>
                  <div class="promo__descr">${descr}</div>
                  <div class="promo__ratings">
                      <span>${ratingIMDb}</span>
                      <span>${ratingKP}</span>
                  </div>
              </div>
          </div>
      </li> 
          `;
    });

    //     sliderList.innerHTML = `
    //   <li class="slider-container__item">
    //   <div class="promo__bg">
    //       <div class="new__bg">
    //           <div class="promo__genre">Сёнен</div>
    //           <div class="promo__title">Клинок рассекающий демонов</div>
    //           <div class="promo__descr">Герои бросают вызов врагу, в то время как поезд «Бесконечный» мчится в
    //               долину отчаяния.</div>
    //           <div class="promo__ratings">
    //               <span>IMDb: 8.7</span>
    //               <span>Кинопоиск: 8.1</span>
    //           </div>
    //       </div>
    //   </div>
    // </li>
    //   `;

    let moveRight = () => {
        nextButton.style.display = 'none';
        let elem, clonedNode;
        sliderList.style.transition = 'margin 1s linear';
        sliderList.style.marginLeft = `-200vw`;
        setTimeout(() => {
            sliderList.style.transition = 'margin 0s linear';
            elem = sliderList.firstElementChild;
            clonedNode = elem.cloneNode(true);
            sliderList.append(clonedNode);
            sliderList.removeChild(elem);
            sliderList.style.marginLeft = `-100vw`;
            nextButton.style.display = 'block';
        }, 1200);
    };

    let moveLeft = () => {
        backButton.style.display = 'none';
        let elem, clonedNode;
        sliderList.style.transition = 'margin 1s linear';
        sliderList.style.marginLeft = `0vw`;
        setTimeout(() => {
            sliderList.style.transition = 'margin 0s linear';
            elem = sliderList.lastElementChild;
            clonedNode = elem.cloneNode(true);
            sliderList.prepend(clonedNode);
            sliderList.removeChild(elem);
            sliderList.style.marginLeft = `-100vw`;
            backButton.style.display = 'block';
        }, 1200);
    };

    nextButton.addEventListener('click', () => {
        moveRight();
    });

    backButton.addEventListener('click', () => {
        moveLeft();
    });
});
