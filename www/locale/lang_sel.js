function select_language(language) {
  var e = document.body.getElementsByTagName("*");
  var i;
  for (i = 0; i < e.length; i++) {
    var l = e[i].getAttribute("lang");
    if (l != null) {
      console.log(e[i].nodeName + ", " + e[i].style.display);
      if (l == language) {
        if (e[i].prev_style != null) {
          e[i].style.display = e[i].prev_style;
        } else {
          e[i].style.display = 'run-in';
        }
      } else {
        e[i].prev_style = e[i].style.display;
        e[i].style.display = 'none';
      }
    }
  }
}

function parseURL() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
    vars[key] = value;
  });
  return vars;
}

function parseParam(param, dVal) {
  var urlparameter = dVal;
  if(window.location.href.indexOf(param) > -1){
    urlparameter = parseURL()[param];
  }
  return urlparameter;
}
