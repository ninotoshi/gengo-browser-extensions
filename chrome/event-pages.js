chrome.contextMenus.create({
  id: "",
  title: chrome.i18n.getMessage("right_click_on_selected_text"),
  contexts: ["selection"],
}, function(){});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  chrome.tabs.executeScript(
    tab.id,
    {file: "content.js"},
    function() {
      chrome.tabs.sendMessage(
        tab.id,
        {"text": info.selectionText},
        function() {}
      );
    }
  );
});
