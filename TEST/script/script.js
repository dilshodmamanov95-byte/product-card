console.log("Assalamu alaykum world!");

//Покраска первой карточки

const firstCardRecolorBtn=document.getElementById("recolor-first-card-button");
const firstCard = document.querySelector('.product-card');
const blueHashcolor='#0000ff';

firstCardRecolorBtn.addEventListener('click',() => {
    firstCard.style.backgroundColor = blueHashcolor;
});

//Покраска всех карточек

const allCardsRecolorBtn = document.getElementById("recolor-all-cards-button");
const allCards = document.querySelectorAll('.product-card');
const greenHashcolor = '#008000';

allCardsRecolorBtn.addEventListener('click', () => {
    allCards.forEach(card => {
        card.style.backgroundColor = greenHashcolor;
    });
});

//Переход на страницу Googl

const googleOpenBtn=document.getElementById("open-google-button");

googleOpenBtn.addEventListener('click',openGoogle);

function openGoogle() {
    const answer=confirm('Вы дейтcвительно хотите перейти на сайт Google?');

    if (answer===true) {
        window.open('https://google.com');
    } else {
        console.log('Пользователь отменил переход на Google');
    }
}

//Кнопка при нажатии на которую меняется цвет заголовка с одного на другой

const mainHeadingRecolorBtn = document.getElementById('recolor-main-heading-button');
const productSelectionTitle = document.querySelector('.product-selection_title');
const redHashColor = '#FF0000';
mainHeadingRecolorBtn.onclick = function() {
    productSelectionTitle.classList.toggle('red-bg'); 
    console.log("Заголовок переключен!");
};

if (productSelectionTitle) {
    productSelectionTitle.addEventListener('mouseenter', () => {
        const headerText = productSelectionTitle.textContent;
        
        console.log("Выводится текст заголовка : " + headerText);
    });
}