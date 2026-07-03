document.addEventListener('DOMContentLoaded', () => {
  browser.storage.local.get('lastCommand').then((res) => {
    if (res.lastCommand) {
      document.getElementById('commandBox').value = res.lastCommand;
    } else {
      document.getElementById('commandBox').value = "No stream intercepted yet. Play a video first.";
    }
  });

  document.getElementById('copyBtn').addEventListener('click', () => {
    let copyText = document.getElementById('commandBox');
    copyText.select();
    document.execCommand("copy");
  });
});