import { countersAPI } from "../API/api.js"
import { COUNTERS } from "../API/api.js"

// рандомайзер для уведомлений
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// моковая функция для загрузки данных
export async function getCounterData() {
  const countersData = {};
  console.log(`Загружаем данные из "${countersAPI}"`)
  Object.values(COUNTERS).forEach(counter => countersData[counter] = randomIntFromInterval(1, 15)); // тут должен быть фетч к API
  return await countersData;
};

// моковая функция для кнопки "Сообщить об ошибке"
export function fillErrorMesage() {
  console.log(`
    Сообщение об ошибке отправлено!

    constantin.kalinin@gmail.com

    https://github.com/constoner

    https://t.me/constoner
    `);
};
