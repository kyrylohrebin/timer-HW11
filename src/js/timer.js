export class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.targetDate = new Date(targetDate);
    this.valueDays = document.querySelector(
      `${selector} .value[data-value="days"]`,
    );
    this.valueHours = document.querySelector(
      `${selector} .value[data-value="hours"]`,
    );
    this.valueMinutes = document.querySelector(
      `${selector} .value[data-value="mins"]`,
    );
    this.valueSeconds = document.querySelector(
      `${selector} .value[data-value="secs"]`,
    );
  }

  calculate() {
    const currentDate = new Date();
    const totalSeconds = (this.targetDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = this.formatTime(Math.floor((totalSeconds / 3600) % 24));
    const minutes = this.formatTime(Math.floor((totalSeconds / 60) % 60));
    const seconds = this.formatTime(Math.floor(totalSeconds % 60));
    this.valueDays.textContent = days;
    this.valueHours.textContent = hours;
    this.valueMinutes.textContent = minutes;
    this.valueSeconds.textContent = seconds;
  }

  formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }

  setTimer() {
    setInterval(() => this.calculate(), 1000);
  }
}
