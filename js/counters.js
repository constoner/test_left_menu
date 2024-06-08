import { fillCounter } from "./mockup.js";

export const setCounters = () => {
  const notificationsCounter = document.querySelector('#notifications');
  const approvalCounter = document.querySelector('#approval');
  const counters = [notificationsCounter, approvalCounter];

  counters.forEach((counter) => {
    fillCounter(counter); // моковая функция для заполнения счетчиков уведомлений
  })

}
