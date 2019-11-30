'use strict';

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  updateTimerInterface() {
    const time = Date.parse(this.targetDate) - Date.now();

    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);

    document.querySelector('[data-value="days"]').textContent = `${days}`;
    document.querySelector('[data-value="hours"]').textContent = `${hours}`;
    document.querySelector('[data-value="mins"]').textContent = `${mins}`;
    document.querySelector('[data-value="secs"]').textContent = `${secs}`;

    setInterval(() => {

      this.updateTimerInterface();
    }, 1000);
  }
}


const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Dec 02, 2019'),
});

timer.updateTimerInterface();