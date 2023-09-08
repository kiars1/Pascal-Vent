# Проект Pascal Vent

## Введение

Данный сайт является лендингом для компании Pascal Vent (не существующая компания).
За основу был взять макет [Figma]<img src="https://cdn2.downdetector.com/static/uploads/logo/figma2.png" width="30" title="Fligma">(https://www.figma.com/file/RnYKlNVTRDYqseHoV8mhUh/Pascal-Vent?type=design&t=fm66IWJNEN2Q0HLn-6).
Сайт поддерживает как ПК так и мобильные устройства за счет реализации адаптивной верстки.

Реализация основанна на JS Vanila <img src="https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png" width="30" title="JavaScript"> и HTML<img src="https://camo.githubusercontent.com/da7acacadecf91d6dc02efcd2be086bb6d78ddff19a1b7a0ab2755a6fda8b1e9/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f68746d6c352f68746d6c352d6f726967696e616c2e737667" width="30" title="HTML5"> CSS
<img src="https://pngicon.ru/file/uploads/css3.png" width="30" title="CSS3"> соответственно.


To create the React app, I'll be using [`create-react-app`](https://create-react-app.dev/), which is a tool people can use to create a React app from scratch. To deploy the React app, I'll be using [`gh-pages`](https://github.com/tschaub/gh-pages), which is an npm package people can use to deploy things to [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages), a free web hosting service provided by GitHub.

If you follow along with this tutorial, you'll end up with a new React app—hosted on GitHub Pages—which you can then customize.

## API
Для реализации некоторых особенностей были использованны сторонние API.

1. [Swiper](https://swiperjs.com/).

   > Для реализации Swipe меню. Первое меню поддерживает переключени с помощью стрелок на клавиатуре, когда блок находится в видемости окна просмотра. Второе меню данной особенности > не имеет. 
   > Смена блоков возможна как с помощью кнопок переключения, так и с помощь "свайпов".

2. [Google Form](https://github.com/jsdevel/google-form).

   > API использует Google Form для сбора данных из форм на сайте. Данные передаюся в таблицу на основе <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Google_Sheets_logo_%282014-2020%29.svg/1498px-Google_Sheets_logo_%282014-2020%29.svg.png" width="30" title="Google Sheets"> [Google Sheets](https://docs.google.com/spreadsheets/d/1hA40SR9eXGamHbe_n4P9q4QEqJ-z5hhuEUyY-tPwWN8/edit?usp=sharing).

   > ### ВНИМАНИЕ!
   > [Ссылка](https://docs.google.com/spreadsheets/d/1hA40SR9eXGamHbe_n4P9q4QEqJ-z5hhuEUyY-tPwWN8/edit?usp=sharing) на таблицу рабочая.
   > Предоставлено право доступа только на чтение. Поэтому особо важно не использовать реальные персональные данные для проверки работоспособности данной функции.
   > 
   > Данный способ сбора информации был выбрал для реализации с использование GH-Pages, или иным ресурсам без поддержки PHP или наличия back-end'а.

## Ссылка на проект

   [Ссылка на gt-pages](https://kiars1.github.io/Pascal-Vent).
   <img src="./images/Pascal.png" width="100" title="Pascal Vent">

### Развитие проекта

    В дальнейшем планируется:
    1. Рефакторинг кода, для уменьшения количества файлов.
    2. Реализация добавления фото-эелементов с помощью "template". Для удобного обновления информации.