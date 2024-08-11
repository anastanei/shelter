// console.log('1. ФИКСИРОВАННАЯ ВЁРСТКА\n  Требования к верстке\n    Страница Main\n      Проверка вёрстки\n        верстка страницы валидная(+)\n        логотип в хедере состоит из текстовых элементов(+)\n        страница содержит ровно один элемент <h1>(+)\n        добавлен favicon(+)\n      Вёрстка соответствует макету\n        блок < header >(+)\n        блок Not only(+)\n        блок About(+)\n        блок Our Friends(+)\n        блок Help(+)\n        блок In addition(+)\n        блок < footer >(+)\n      Требования к css\n        для позиционирования элементов блока Help использована сеточная верстка (flexbox или grid)(+)\n        при уменьшении масштаба страницы браузера или увеличении ширины страницы (>1280px) вёрстка размещается по центру, а не сдвигается в сторону и не растягивается по всей ширине(+)\n        фоновый цвет тянется на всю ширину страницы(+)\n      элемент About the Shelter в навигации подсвечен и неинтерактивен, остальные элементы навигации интерактивны(+)\n        каждая карточка с питомцем в блоке Our Friends интерактивна при наведении на любую область этой карточки(+)\n        плавная прокрутка по якорям\n        выполняются все ссылочные связи согласно Перечню ссылочных связей для страницы Main\n        выполнена интерактивность ссылок и кнопок. Интерактивность заключается не только в изменении внешнего вида курсора, например, при помощи свойства cursor: pointer, но и в использовании и других визуальных эффектов, например, изменение цвета фона или цвета шрифта, согласно стайлгайду в макете. Если в макете стили не указаны, реализуете их по своему усмотрению, руководствуясь общим стилем макета\n        обязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике, не влияющее на соседние элементы\n        \n        ');
console.log('1.Вёрстка страницы Main соответствует макету при ширине экрана 1280px: +14\n  блок <header>: +2\n  блок Not only: +2\n  блок About: +2\n  блок Our Friends: +2\n  блок Help: +2\n  блок In addition: +2\n  блок <footer>: +2\n2. Вёрстка страницы Main соответствует макету при ширине экрана 768px: +14\n  блок <header>: +2\n  блок Not only: +2\n  блок About: +2\n  блок Our Friends: +2\n  блок Help: +2\n  блок In addition: +2\n  блок <footer>: +2\n3. Вёрстка страницы Main соответствует макету при ширине экрана 320px: +14\n  блок <header>: +2\n  блок Not only: +2\n  блок About: +2\n  блок Our Friends: +2\n  блок Help: +2\n  блок In addition: +2\n  блок <footer>: +2\n4. Вёрстка страницы Pets соответствует макету при ширине экрана 1280px: +6\n  блок <header>: +2\n  блок Our Friends: +2\n  блок <footer>: +2\n5. Вёрстка страницы Pets соответствует макету при ширине экрана 768px: +6\n  блок <header>: +2\n  блок Our Friends: +2\n  блок <footer>: +2\n6. Вёрстка страницы Pets соответствует макету при ширине экрана 320px: +6\n  блок <header>: +2\n  блок Our Friends: +2\n  блок <footer>: +2\n7. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки, справа от отдельных блоков не появляются белые поля. Весь контент страницы при этом сохраняется: не обрезается и не удаляется: +20\n  нет полосы прокрутки при ширине страницы Main от 1280рх до 768рх: +5\n  нет полосы прокрутки при ширине страницы Main от 768рх до 320рх: +5\n  нет полосы прокрутки при ширине страницы Pets от 1280рх до 768рх: +5\n  нет полосы прокрутки при ширине страницы Pets от 768рх до 320рх: +5\n8. Верстка резиновая: при плавном изменении размера экрана от 1280px до 320px верстка подстраивается под этот размер, элементы верстки меняют свои размеры и расположение, не наезжают друг на друга, изображения могут менять размер, но сохраняют правильные пропорции (Примеры неправильной и правильной реализации): +8\n  на странице Main: +4\n  на странице Pets: +4\n9. При ширине экрана меньше 768px на обеих страницах меню в хедере скрывается, появляется иконка бургер-меню: +4\nОткрытие меню при клике на иконку бургер-меню на текущем этапе не проверяется\n10. Верстка обеих страниц валидная : +8\n');
