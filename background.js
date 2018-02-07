chrome.browserAction.onClicked.addListener((tab) => 
	chrome.processes.getProcessIdForTab(tab.id, (pid) =>
		chrome.processes.terminate(pid)
	)
);
