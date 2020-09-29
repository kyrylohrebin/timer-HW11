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
    this.valueDays.textContent = Math.floor(totalSeconds / 3600 / 24);
    this.valueHours.textContent = this.formatTime(Math.floor((totalSeconds / 3600) % 24));
    this.valueMinutes.textContent = this.formatTime(Math.floor((totalSeconds / 60) % 60));
    this.valueSeconds.textContent = this.formatTime(Math.floor(totalSeconds % 60));
  }

  formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }

  setTimer() {
    setInterval(() => this.calculate(), 1000);
  }
}
