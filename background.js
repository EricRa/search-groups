function openPage() {
	browser.tabs.create({
		url: "/main/main.html",
	});
}

browser.action.onClicked.addListener(openPage);