document.getElementById('openLinks').addEventListener('click', function() {
    const links = [
      'https://speedcubedb.com/',
      'https://algtrainer.com/'
    ];
  
    links.forEach(link => {
      chrome.tabs.create({ url: link });
    });
  });