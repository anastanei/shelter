// console.log('1. ФИКСИРОВАННАЯ ВЁРСТКА\n  Требования к верстке\n    Страница Main\n      Проверка вёрстки\n        верстка страницы валидная(+)\n        логотип в хедере состоит из текстовых элементов(+)\n        страница содержит ровно один элемент <h1>(+)\n        добавлен favicon(+)\n      Вёрстка соответствует макету\n        блок < header >(+)\n        блок Not only(+)\n        блок About(+)\n        блок Our Friends(+)\n        блок Help(+)\n        блок In addition(+)\n        блок < footer >(+)\n      Требования к css\n        для позиционирования элементов блока Help использована сеточная верстка (flexbox или grid)(+)\n        при уменьшении масштаба страницы браузера или увеличении ширины страницы (>1280px) вёрстка размещается по центру, а не сдвигается в сторону и не растягивается по всей ширине(+)\n        фоновый цвет тянется на всю ширину страницы(+)\n      элемент About the Shelter в навигации подсвечен и неинтерактивен, остальные элементы навигации интерактивны(+)\n        каждая карточка с питомцем в блоке Our Friends интерактивна при наведении на любую область этой карточки(+)\n        плавная прокрутка по якорям\n        выполняются все ссылочные связи согласно Перечню ссылочных связей для страницы Main\n        выполнена интерактивность ссылок и кнопок. Интерактивность заключается не только в изменении внешнего вида курсора, например, при помощи свойства cursor: pointer, но и в использовании и других визуальных эффектов, например, изменение цвета фона или цвета шрифта, согласно стайлгайду в макете. Если в макете стили не указаны, реализуете их по своему усмотрению, руководствуясь общим стилем макета\n        обязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике, не влияющее на соседние элементы\n        \n        ');
// console.log('1.Вёрстка страницы Main соответствует макету при ширине экрана 1280px: +14\n  блок <header>: +2\n  блок Not only: +2\n  блок About: +2\n  блок Our Friends: +2\n  блок Help: +2\n  блок In addition: +2\n  блок <footer>: +2\n2. Вёрстка страницы Main соответствует макету при ширине экрана 768px: +14\n  блок <header>: +2\n  блок Not only: +2\n  блок About: +2\n  блок Our Friends: +2\n  блок Help: +2\n  блок In addition: +2\n  блок <footer>: +2\n3. Вёрстка страницы Main соответствует макету при ширине экрана 320px: +14\n  блок <header>: +2\n  блок Not only: +2\n  блок About: +2\n  блок Our Friends: +2\n  блок Help: +2\n  блок In addition: +2\n  блок <footer>: +2\n4. Вёрстка страницы Pets соответствует макету при ширине экрана 1280px: +6\n  блок <header>: +2\n  блок Our Friends: +2\n  блок <footer>: +2\n5. Вёрстка страницы Pets соответствует макету при ширине экрана 768px: +6\n  блок <header>: +2\n  блок Our Friends: +2\n  блок <footer>: +2\n6. Вёрстка страницы Pets соответствует макету при ширине экрана 320px: +6\n  блок <header>: +2\n  блок Our Friends: +2\n  блок <footer>: +2\n7. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки, справа от отдельных блоков не появляются белые поля. Весь контент страницы при этом сохраняется: не обрезается и не удаляется: +20\n  нет полосы прокрутки при ширине страницы Main от 1280рх до 768рх: +5\n  нет полосы прокрутки при ширине страницы Main от 768рх до 320рх: +5\n  нет полосы прокрутки при ширине страницы Pets от 1280рх до 768рх: +5\n  нет полосы прокрутки при ширине страницы Pets от 768рх до 320рх: +5\n8. Верстка резиновая: при плавном изменении размера экрана от 1280px до 320px верстка подстраивается под этот размер, элементы верстки меняют свои размеры и расположение, не наезжают друг на друга, изображения могут менять размер, но сохраняют правильные пропорции (Примеры неправильной и правильной реализации): +8\n  на странице Main: +4\n  на странице Pets: +4\n9. При ширине экрана меньше 768px на обеих страницах меню в хедере скрывается, появляется иконка бургер-меню: +4\nОткрытие меню при клике на иконку бургер-меню на текущем этапе не проверяется\n10. Верстка обеих страниц валидная : +8\n');
// 1. Реализация burger menu на обеих страницах: +26
//     * при ширине страницы меньше 768рх панель навигации скрывается, появляется бургер-иконка: +2
//     * высота адаптивного меню занимает всю высоту экрана: +2
//     * бургер-иконка создана при помощи html+css, без использования изображений: +2
//     * расположение и размеры элементов в бургер-меню соответствует макету (центрирование по вертикали и горизонтали элементов меню, расположение иконки). При этом на странице Pets цветовая схема может быть как темная, так и светлая: +2
//     * область, свободная от бургер-меню, затемняется: +2
//     * при нажатии на бургер-иконку, справа плавно появляется адаптивное меню шириной 320px, бургер-иконка плавно поворачивается на 90 градусов: +4
//     * страница под бургер-меню не прокручивается: +4
//     * при повторном нажатии на бургер-иконку или на свободное от бургер-меню пространство (оба варианта должны быть реализованы) адаптивное меню плавно скрывается уезжая за правую часть экрана, бургер-иконка плавно поворачивается на 90 градусов обратно: +4
//     * ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям, сохраняются заданные на первом этапе выполнения задания требования интерактивности элементов меню: +2
//     * при клике по любой ссылке (интерактивной или неинтерактивной) в меню адаптивное меню плавно скрывается вправо, бургер-иконка поворачивается на 90 градусов обратно: +2
// Реализация попап на обеих страницах: +12
// + попап появляется при нажатии на любое место карточки с описанием конкретного животного: +2
// + часть страницы вне попапа затемняется: +2
// + при открытии попапа вертикальный скролл страницы становится неактивным, при закрытии - снова активным: +2
// + при нажатии на область вокруг попапа или на кнопку с крестиком попап закрывается (оба варианта должны быть реализованы), при этом при нажатии на сам попап ничего не происходит: +2
// + кнопка с крестиком интерактивная: +2
// + окно попапа (не считая кнопку с крестиком) центрировано по всем осям, размеры элементов попапа и их расположение совпадают с макетом: +2


class Modal {
  constructor(modalSelector, buttonSelector, overlaySelector, buttonCloseSelector = false, linkSelector = false) {
      this.modal = document.querySelector(modalSelector);
      this.modalButton = document.querySelector(buttonSelector);
      this.overlay = this.modal.querySelector(overlaySelector);
      this.closeButton = buttonCloseSelector && this.modal ? this.modal.querySelector(buttonCloseSelector) : undefined;
      this.links = linkSelector && this.modal ? this.modal.querySelectorAll(linkSelector) : [];
      this.toggle = this.toggle.bind(this);
      this.init();
  }

  init() {
    const elements = [
      this.closeButton,
      this.overlay,
      this.modalButton,
      ...this.links
    ];
    elements.forEach(element => {
      if (element) {
        element.addEventListener('click', this.toggle);
      }
    });
  }

  toggle() {
    const isOpened = this.modal.classList.toggle('--visible');
    this.modalButton.classList.toggle('--opened', isOpened);
    this.toggleScrollLock(isOpened);
  }

  toggleScrollLock(isLocked) {
    document.body.classList.toggle('--scroll-locked', isLocked);
  }
}

new Modal('[data-menu]', '[data-menu-button]', '[data-menu-overlay]', false, '[data-menu-link]');
new Modal('[data-popup]', '[data-popup-open-button]', '[data-popup-overlay]', '[data-popup-close-button]');

// function toggleScrollLock (isLocked) {
//   document.body.classList.toggle('--scroll-locked', isLocked);
// }

// function toggleModal (modalButton, modal) {
//   const isOpened = modal.classList.toggle('--visible');
//   modalButton.classList.toggle('--opened', isOpened);
//   toggleScrollLock(isOpened);
// }

// function modal (modalSelector, buttonSelector, overlaySelector, buttonCloseSelector = false, linkSelector = false) {
//   const modal = document.querySelector(modalSelector);
//   const modalButton = document.querySelector(buttonSelector);
//   const overlay = modal.querySelector(overlaySelector);
//   const closeButton = buttonCloseSelector && modal.querySelector(buttonCloseSelector);
//   const links = linkSelector && modal.querySelectorAll(linkSelector);
//   const toggle = () => toggleModal(modalButton, modal);

//   if (closeButton != false) {
//     closeButton.addEventListener('click', toggle);
//   }
//   overlay.addEventListener('click', toggle);
//   modalButton.addEventListener('click', toggle);
//   overlay.addEventListener('click', toggle);
//   links && links.forEach(link => link.addEventListener('click', toggle));
// }

// modal('[data-menu]', '[data-menu-button]', '[data-menu-overlay]', false, '[data-menu-link]');
// modal('[data-popup]', '[data-popup-open-button]', '[data-popup-overlay]', '[data-popup-close-button]');