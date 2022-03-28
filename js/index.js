// Переменные:
const headerRequestBtn = document.querySelector('.header__request');
const heroRequestBtn = document.querySelector('.hero__request');
const sendRequestBtn = document.querySelector('.send-request__btn');

const overlay = document.querySelector('.overlay');
const sendForm = overlay.querySelector('.send__form');
const closeModalBtn = overlay.querySelector('.modal__close');

// Открывает модалку:
const openModal = () => {
  overlay.classList.add('show');

};

// Закрывает модалку:
const closeModal = () => {
  sendForm.reset();
  overlay.classList.remove('show');
};

// Обработчики:
const requestBtnClickHandler = (evt) => {
  evt.preventDefault();
  openModal();
};

// Отправка формы:
const sendFormSubmitHandler = () => {
  evt.preventDefault();
  // Валидация данных формы
  closeModal();
};

// Клик на оверлей:
const overlayClickHandler = (evt) => {
  const target = evt.target;

  if (target.classList.contains('overlay')) {
    closeModal();
  }
};

// Закрыть модалку по кнопке:
const closeModalBtnClickHandler = () => {
  closeModal();
};

// Подключение обработчиков:
sendForm.addEventListener('submit', sendFormSubmitHandler);
headerRequestBtn.addEventListener('click', requestBtnClickHandler);
heroRequestBtn.addEventListener('click', requestBtnClickHandler);
sendRequestBtn.addEventListener('click', requestBtnClickHandler);
overlay.addEventListener('click', overlayClickHandler);
closeModalBtn.addEventListener('click', closeModalBtnClickHandler);