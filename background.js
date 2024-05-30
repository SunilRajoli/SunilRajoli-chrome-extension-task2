chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'fetchProfiles') {
    let urls = request.urls;
    urls.forEach((url, index) => {
      setTimeout(() => {
        chrome.tabs.create({ url: url.trim(), active: false }, (tab) => {
          if (chrome.runtime.lastError) {
            console.error('Error creating tab:', chrome.runtime.lastError.message);
            return;
          }
          if (!tab || !tab.id) {
            console.error('Invalid tab object:', tab);
            return;
          }
          chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ['content.js']
          }, () => {
            if (chrome.runtime.lastError) {
              console.error('Error executing content script:', chrome.runtime.lastError.message);
              return;
            }
            console.log('Content script executed successfully.');
          });
        });
      }, index * 10000); // Open each tab with a delay
    });
  }
});
