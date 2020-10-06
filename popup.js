let form = document.querySelector("form");
// let cancel_btn = document.querySelector("#cancel");
let submit_btn = document.querySelector("#submit");

form.addEventListener("input", () => {
  submit_btn.disabled = false
});

form.addEventListener("submit", function(event) {
  event.preventDefault();
  // submit_btn.style.display = "none";
  // cancel_btn.style.display = "block";
  
  let timeChunk = event.target.elements["interval"].value * 60 * 1000;

  chrome.storage.sync.set({timeChunk});

});