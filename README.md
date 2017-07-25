# Calendar - React native with backend data

# Promo
    [Live version](http://calendar-react.bitballoon.com/)
    
# Part 1

# Tech stack
 * React
 * Webpack
 * Airbnb styleguide + lint
 * ES6+ or Typescript of Flow

### Requirements

Система должна реализовывать два основных предствления:
  * [В виде календаря на десктопе](http://intljusticemission.github.io/react-big-calendar/examples/index.html)
  * На телефонах/планшетах должна быть responsive (like Google Calendar/ iOS calendar/ any other calendar).

На календаре должны отображаться дедлайны по таскам (и сами таски) и лекции/вебинары.
Система должна предоставлять возможность посмотреть задания на неделю/месяц.

По каждой лекции система должна предостовлять следующую информацию:
  * Видеозапись занятия / вебинара
  * Слайды
  * План занятия, описание
  * Возможность оставить фидбек по занятию
  * Время и место проведения, карту если необходимо
  * Список лекторов для данного занятия

По каждому таску:
 * Название таска
 * Описание таска
 * Кто будет проверять данный таск
 * Куда заливать данный таск
 * Критерии оценки (если есть)
 * Дедлайн
 * Возможность оставить комментарии и пояснения 
 
 ### Design
 Дизайн системы может быть основан на базе  (optional)
  * https://www.lightningdesignsystem.com/
  * https://github.com/mashmatrix/react-lightning-design-system
  
  ### Back-end
  * Тестовый Back-end для этого таска будет развернут тут - http://128.199.53.150/
  * Исходный код тут - https://github.com/Shastel/rs-calendar-task
  
  ### Api Back-end
  
  * GET http://128.199.53.150/events
  * GET http://128.199.53.150/events/:id (например http://128.199.53.150/events/5915cd1589e1e8ac13de8550)
  
  * GET http://128.199.53.150/trainers
  * GET http://128.199.53.150/trainers/:id 

# Install
 - npm i
 - webpack-dev-server --progress --colors
 
# Part II (DRAFT)

Суть задания - дороботка предыдушей версии RS Calendar

Задача минимум:

Написать свой back-end на NodeJS/Express/Mongo.
Написать админку для календаря.
Дополнительно:

Интеграционные тесты (Nightwatch.js/webdriver.io/Protractor/etc)
Запуск сервера в docker контейнере
Написать юнит-тесты для front-end.
Написать юнит-тесты для back-end.
Server-side rendering

Критерии оценки:
Соответствие всем обязательным функциональным требованиям
Качество кода
React Router и степень его использования
Redux
Design/UI/UX. Удобство интерфейса, интересные фичи
Mobile версия и её функциональность
Интеграция с сервисами типа Google Maps, Youtube
Наличие админки
Структура проекта
Подробность истории комитов
TBD
 
 
 
 
