chrome.commands.onCommand.addListener((command) => {
  if (command === "open-links") {
    const links = [
      "https://speedcubedb.com/",
      "https://algtrainer.com/"
    ];

    links.forEach(link => {
      chrome.tabs.create({ url: link });
    });
  }
});