let iframe = document.createElement('iframe');
//iframe.src = "https://webrtc.github.io/samples/src/content/getusermedia/getdisplaymedia/";
iframe.src = "https://stevebeckermsft.github.io/repro_pages/media/autoplay.html";
iframe.allow = "media-playback-while-not-visible 'none'; display-capture *"
iframe.id = "media_frame"
iframe.style.setProperty('width', '800px')
iframe.style.setProperty('height', '600px')
document.body.appendChild(iframe);

const BTN_HIDE_DISPLAY_NONE_STR = 'Hide Iframe (display)';
const BTN_SHOW_DISPLAY_NONE_STR = 'Show Iframe (display)';

const BTN_HIDE_VISIBILITY_STR = 'Hide Iframe (visibility)';
const BTN_SHOW_VISIBILITY_STR = 'Show Iframe (visibility)';

// const BTN_HIDE_ABS_POSITION_STR = 'Hide Iframe (absolute position)';
// const BTN_SHOW_ABS_POSITION_STR = 'Show Iframe (absolute position)';

let display_btn = document.createElement('button');
display_btn.innerHTML = BTN_HIDE_DISPLAY_NONE_STR;
display_btn.addEventListener('click', () => {
	if (display_btn.innerHTML == BTN_HIDE_DISPLAY_NONE_STR){
  	iframe.style.setProperty('display', 'none')
    display_btn.innerHTML = BTN_SHOW_DISPLAY_NONE_STR
  } else {
  	iframe.style.setProperty('display', 'block')
    display_btn.innerHTML = BTN_HIDE_DISPLAY_NONE_STR
  }
});

let display_visibility_btn = document.createElement('button');
display_visibility_btn.innerHTML = BTN_HIDE_VISIBILITY_STR;
display_visibility_btn.addEventListener('click', () => {
	if (display_visibility_btn.innerHTML == BTN_HIDE_VISIBILITY_STR){
  	iframe.style.setProperty('visibility', 'collapse')
    display_visibility_btn.innerHTML = BTN_SHOW_VISIBILITY_STR
  } else {
  	iframe.style.setProperty('visibility', 'visible')
    display_visibility_btn.innerHTML = BTN_HIDE_VISIBILITY_STR
  }
});

// let display_border_btn = document.createElement('button');
// display_border_btn.innerHTML = BTN_HIDE_ABS_POSITION_STR;
// display_border_btn.addEventListener('click', () => {
// 	if (display_border_btn.innerHTML == BTN_HIDE_ABS_POSITION_STR){
//   	iframe.style.setProperty('position', 'absolute')
//     iframe.style.setProperty('width', '0')
//     iframe.style.setProperty('height', '0')
//     iframe.style.setProperty('border', '0')
//     display_border_btn.innerHTML = BTN_SHOW_ABS_POSITION_STR
//   } else {
//   	iframe.style.setProperty('position', 'absolute')
//     iframe.style.setProperty('width', '150px')
//     iframe.style.setProperty('height', '300px')
//     iframe.style.setProperty('border', '2px')
//     display_border_btn.innerHTML = BTN_HIDE_ABS_POSITION_STR
//   }
// });
document.body.appendChild(display_btn);
document.body.appendChild(display_visibility_btn);
// document.body.appendChild(display_border_btn);