function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function fillCounters(counters) {

  const values = Array.from({ length: 2 }).map((item) => {
    const output = randomIntFromInterval(1, 3);
    return output % 2 === 0 ? 0 : output;
  });

  counters["totalCounter"].textContent = values.reduce((acc, item) => acc + item, 0);
  counters["totalCounter"].setAttribute("style", "visibility: visible;");

  counters["notificationsCounter"].textContent = values[0];
  if (values[0] !== 0) {
    counters["notificationsCounter"].setAttribute("style", "visibility: visible;");
  }

  counters["approvalCounter"].textContent = values[1];
  if (values[1] !== 0) {
    counters["approvalCounter"].setAttribute("style", "visibility: visible;");
  }
};

function fillErrorMesage() {
  console.log(`
    Сообщение об ошибке отправлено!

    constantin.kalinin@gmail.com

    https://github.com/constoner

    https://t.me/constoner
    `);
};

export { fillCounters, fillErrorMesage };
