import { getCounterData } from "../mockup/mockup.js";

const counters = {};
const countersElements = document.querySelectorAll("[data-counter]");

Array.from(countersElements).forEach((counter) => {
  counters[counter.dataset.counter] = counter;
});

const totalCount = (data) => {
  data.total = Object.values(data).reduce((acc, item) => acc + item, 0);
}

// функция для заполнения элементов счетчиков
const fillCounter = (value, category) => {
  value.textContent = category;
  value.setAttribute("style", "visibility: visible;");
}

export const initCounters = () => {

  try {

    getCounterData()
      .then((res) => res) // тут нужно спарсить JSON
      .then((data) => {

        totalCount(data);

        Object.entries(counters).forEach(([category, value]) => {
          fillCounter(value, data[category]);
        });
      })
      .then(console.log("Данные загружены!"))
      .catch((err) => console.error(err));

  } catch (err) {
    console.error(err)
  }

};

