import { Module } from "../core/module";
import { createTimer, countDownTimer } from "../core/utils/timer";
//Alexey

export class TimerModule extends Module {
  constructor(type, text) {
    super(type, text);

    this.container = document.createElement("div");
    this.container.className = "containerTimer";
  }

  trigger() {
    if (createTimer(this.container)) {
      countDownTimer();
      const refreshId = setInterval(() => {
        countDownTimer(refreshId);
      }, 1000);
    }
  }
}
