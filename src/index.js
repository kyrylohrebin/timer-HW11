'use strict';
import './css/styles.css';
import { CountdownTimer } from './js/timer.js';

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: '1 Jan 2021',
});


const timerNext = new CountdownTimer({
    selector: '#timer-2',
    targetDate: '1 Jan 2022',
  });

  const timerMyBirthDay = new CountdownTimer({
    selector: '#timer-3',
    targetDate: '5 Sep 2021',
  });

timer.setTimer();
timerNext.setTimer();
timerMyBirthDay.setTimer();