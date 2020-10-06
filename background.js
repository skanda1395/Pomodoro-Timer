chrome.storage.onChanged.addListener(function(changes, namespace) {
  let chunk = parseInt(changes.timeChunk.newValue);

  setTimeout(function() {
    let notifOptions = {
      type: "basic",
      iconUrl: "pomodoro-timer-logo.png",
      title: "Time's up!",
      message: "Take a break and come back."
    }
    chrome.notifications.create("timeOver", notifOptions, function(notifId) {
      console.log("Time Over!");
      chrome.storage.sync.set({timeChunk: null});
    });
  }, chunk);
  
});