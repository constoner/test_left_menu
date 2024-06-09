import { fillCounters } from "./mockup.js";

export const setCounters = () => {
  const notificationsCounter = document.querySelector('#notifications');
  const approvalCounter = document.querySelector('#approval');
  const totalCounter = document.querySelector('#total');
  const counters = { "totalCounter": totalCounter, "notificationsCounter": notificationsCounter, "approvalCounter": approvalCounter };

  fillCounters(counters); // моковая функция для заполнения счетчиков уведомлений
}
