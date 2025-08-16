# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

Макет
https://www.figma.com/file/4epBThlWhT5iGKKMNBPSN2/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B4%D0%BB%D1%8F-%D1%84%D1%80%D0%BE%D0%BD%D1%82%D0%B0?node-id=0%3A1
Шрифт
https://www.paratype.ru/fonts/pt/pt-root-ui
Требования
Использование стека Nuxt 3 + TypeScript + pinia.
Код должен быть валидным.
Подключить уникальные шрифты (PT Root UI).
Адаптивная верстка (приложены макеты для брейкпоинтов 960+ и 1440+).
Максимальная ширина контентной части сайта 1440px. На мониторах шире контент центрируется.
Кроссбраузерная верстка. Страница должна одинаково смотреться в современных браузерах и не разваливаться в EDGE и Safari.
Нельзя использовать CSS фреймворки (Bootstrap, Foundation).
Помнить о всех возможных состояниях элементов формы (:hover, :active).
Можно использовать плагин для ползунков фильтра.
Реализовать работу кнопки “Наверх”. При клике должна произойти плавная прокрутка вверх страницы. Если прокрутка не возможна, то кнопка скрывается.
Реализовать работу фильтра. При изменении состояния необходимо блокировать изменение фильтра и отправлять запрос на сервер. (XHR/AJAX/fetch на ваше усмотрение). Поднимать бэкенд составляющую не нужно, достаточно json файла, откуда будете тянуть данные.
При клике на кнопку “Показать ещё 20” показать еще 20 карточек квартир. Кнопка должна скрываться, когда данные на сервере или в файле заканчиваются. (XHR/AJAX/fetch на ваше усмотрение). Поднимать бэкенд составляющую не нужно, достаточно json файла, откуда будете тянуть данные.
Преимуществом будет
Сохранение состояния при перезагрузке страницы.
Семантическая вёрстка.
Использование препроцессора SASS.
Использование систему контроля (Git).
Использование методологии BEM.
Не забывайте о доступности.
Оптимизация.
