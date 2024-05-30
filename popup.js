document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('fetch-profiles').addEventListener('click', () => {
    const urls = document.getElementById('linkedin-urls').value.split(',');
    chrome.runtime.sendMessage({ action: 'fetchProfiles', urls: urls });
  });
});
