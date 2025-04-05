document.getElementById('toggleTheme').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs.length === 0) {
            console.error('No active tab found.');
            return;
        }

        const tabId = tabs[0].id; // Get the active tab's ID
        chrome.scripting.executeScript({
            target: { tabId: tabId },
            files: ['content.js']
        }, () => {
            if (chrome.runtime.lastError) {
                console.error('Error executing script:', chrome.runtime.lastError.message);
            } else {
                console.log('Dark theme toggled successfully.');
            }
        });
    });
});