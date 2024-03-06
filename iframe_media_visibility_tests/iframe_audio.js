let audio_iframe = document.querySelector("#audio_iframe")

function showIframe() {
    audio_iframe.style.setProperty("display", "block")
}

function hideIframe() {
    audio_iframe.style.setProperty("display", "none")
}

function addIframeToDom() {
    buttons_div = document.getElementById("button_row")
    buttons_div.parentElement.insertBefore(audio_iframe, buttons_div)
}

function removeIframeFromDom() {
    audio_iframe.parentElement.removeChild(audio_iframe) // https://developer.mozilla.org/en-US/docs/Web/API/Element/remove
}



let showIframeBtn = document.querySelector("#show_iframe_btn")
let hideIframeBtn = document.querySelector("#hide_iframe_btn")
let removeIframeFromDomBtn = document.querySelector("#remove_iframe_from_dom_btn")
let addIframetoDomBtn = document.querySelector("#add_iframe_from_dom_btn")

showIframeBtn.addEventListener("click", showIframe)
hideIframeBtn.addEventListener("click", hideIframe)
removeIframeFromDomBtn.addEventListener("click", removeIframeFromDom)
addIframetoDomBtn.addEventListener("click", addIframeToDom)