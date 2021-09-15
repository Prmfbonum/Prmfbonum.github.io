// Задание:
// Проект: Emoji Finder
// Задания:
//     - сверстать
//     - выводить карточки со всеми emoji
// - на карточке выводить название и ключевые слова без повторений
// - сделать фильтрацию по ключевым словам
// Дополнительно:
//     - сделать чтобы хорошо смотрелось на мобильном устройстве
// - сделать чтобы можно было вводить несколько ключевых слов в поле для текста

"use strict";

let allCards = document.querySelector(".card-list"); //  объявляем переменну и присваиваем элементу в с заданным классом
drawCards(data)    // вызываем функцию и отрисовываем data
function drawCards(arr) {           //объявляем функцию отрисовки карточек
    allCards.innerHTML = "";     // назначаем переменной  значение пустой строки
    let a = ""                   // новой переменной  присваиваем пустое значение строки
    arr.forEach(function (elem) {  // методом FOREACH  прогоняем массив  в котором переменной CARD  присваеваем каждый раз строчное значание равное значению HTML
        let card = `<div class="card">                   
          <p class="card-title"> ${elem.symbol}</p>   
          <p class="card-symbol"> ${elem.title}</p>  
          <p class="card-keywords"> ${elem.keywords.split(" ").filter((item,i,arr) => i==arr.indexOf(item)).join(" ")}</p>  
          </div>` ;
        a += card         //  все строки из переработанного массива собираются в переменной A
    });
    allCards.innerHTML = a;    //  Вставляем  в HTML всю строку переменной A  соотвтетсвтенно происходит рендер!
}
console.log(data);

let keyWordsInput = document.querySelector(".input");

    console.log(keyWordsInput)

    keyWordsInput.addEventListener("input", cardSearch)

function cardSearch() {
    let l = keyWordsInput.value.trim();
    let filteredCard = data.filter(function (elem) {
            return elem.keywords.toUpperCase().includes(l.toUpperCase());
        })
    console.log(filteredCard)
    drawCards(filteredCard)
}





