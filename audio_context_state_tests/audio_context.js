"use strict"

const AUDIO_CONTROL_BTN = "audio-control-btn";
const CLOSE_AUDIO_CONTEXT_BTN = "close-audio-context-btn"
const STATE_LOGGING_DIV = "state-logging";

let audio_control_btn = document.getElementById(AUDIO_CONTROL_BTN);
let close_audio_context_btn = document.getElementById(CLOSE_AUDIO_CONTEXT_BTN);

const audio_ctx = new AudioContext();
const oscillator = audio_ctx.createOscillator();
oscillator.connect(audio_ctx.destination);

function log(msg) {
  const new_state = document.createTextNode(msg);
  const new_state_paragraph = document.createElement("p");
  new_state_paragraph.appendChild(new_state)

  let state_logging_div = document.getElementById(STATE_LOGGING_DIV);
  state_logging_div.appendChild(new_state_paragraph);
}

window.addEventListener("load", () => {
  log(audio_ctx.state)
})

audio_control_btn.addEventListener('click', () => {
  if (audio_control_btn.textContent === "Start AudioContext") {
    oscillator.start();
    audio_control_btn.textContent = "Suspend AudioContext";
    close_audio_context_btn.style.setProperty('visibility', 'visible');
  } else if (audio_ctx.state === "suspended") {
    audio_ctx.resume()
    audio_control_btn.textContent = "Suspend AudioContext";
  } else if (audio_ctx.state === "running") {
    audio_ctx.suspend()
    audio_control_btn.textContent = "Resume AudioContext";
  }
});

close_audio_context_btn.addEventListener('click', () => {
  if (audio_ctx.state !== "closed") {
    audio_ctx.close();
  }
})

audio_ctx.addEventListener("statechange", (event) => {
  log(audio_ctx.state)
})


