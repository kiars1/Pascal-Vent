# Проект Pascal Vent

<img src="./images/logo.png" max-width="500" title="Pascal Vent">

## Введение

Данный сайт является лендингом для компании Pascal Vent (не существующая компания).
За основу был взят макет <img src="https://cdn2.downdetector.com/static/uploads/logo/figma2.png" height="15" title="Fligma">[Figma](https://www.figma.com/file/RnYKlNVTRDYqseHoV8mhUh/Pascal-Vent?type=design&t=fm66IWJNEN2Q0HLn-6).
Сайт поддерживает как ПК так и мобильные устройства за счет реализации адаптивной верстки.

Реализация основанна на JS Vanila <img src="https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png" height="15" title="JavaScript"> и HTML<img src="https://camo.githubusercontent.com/da7acacadecf91d6dc02efcd2be086bb6d78ddff19a1b7a0ab2755a6fda8b1e9/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f68746d6c352f68746d6c352d6f726967696e616c2e737667" width="15" title="HTML5"> CSS
<img src="https://pngicon.ru/file/uploads/css3.png" height="15" title="CSS3"> соответственно.

## API
Для реализации некоторых особенностей были использованны сторонние API.

1. [Swiper](https://swiperjs.com/).

   > Для реализации Swipe меню. Первое меню поддерживает переключени с помощью стрелок на клавиатуре, когда блок находится в видемости окна просмотра. Второе меню данной особенности > не имеет. 
   > Смена блоков возможна как с помощью кнопок переключения, так и с помощь "свайпов".

2. [Google Form](https://github.com/jsdevel/google-form).

   > API использует Google Form для сбора данных из форм на сайте. Данные передаюся в таблицу на основе <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Google_Sheets_logo_%282014-2020%29.svg/1498px-Google_Sheets_logo_%282014-2020%29.svg.png" height="15" title="Google Sheets"> [Google Sheets](https://docs.google.com/spreadsheets/d/1hA40SR9eXGamHbe_n4P9q4QEqJ-z5hhuEUyY-tPwWN8/edit?usp=sharing).

   > ### ВНИМАНИЕ!
   > [Ссылка](https://docs.google.com/spreadsheets/d/1hA40SR9eXGamHbe_n4P9q4QEqJ-z5hhuEUyY-tPwWN8/edit?usp=sharing) на таблицу рабочая.
   > Предоставлено право доступа только на чтение. Поэтому особо важно не использовать реальные персональные данные для проверки работоспособности данной функции.
   > 
   > Данный способ сбора информации был выбрал для реализации с использование GH-Pages, или иным ресурсам без поддержки PHP или наличия back-end'а.

## Ссылка на проект

   [Страница Pascal Vent](https://kiars1.github.io/Pascal-Vent)
   
   <img src="./images/Pascal.png" max-width="1000" title="Pascal Vent">

## Развитие проекта

В дальнейшем планируется:
1. Рефакторинг кода, для уменьшения количества файлов.
 2. Реализация добавления фото-эелементов с помощью "template". Для удобного обновления информации.