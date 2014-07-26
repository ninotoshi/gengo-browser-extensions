chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  var t = message.text;
  var f = document.createElement("form");
  f.action = "https://gengo.com/order/receive_job_post/";
  f.method = "post";
  f.style.display = "none";
  var i = document.createElement("input");
  i.type = "text";
  i.name = "body_src";
  i.value = t;
  f.appendChild(i);
  document.body.innerHTML = "processing ...";
  document.body.appendChild(f);
  f.submit();
});
