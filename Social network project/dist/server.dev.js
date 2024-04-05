"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var options = process.cwd();
var port = 3000;
app.use(_express["default"]["static"]('public'));
app.get('/', function (req, res) {
  res.sendFile('public/web.html', {
    root: options
  });
});
app.listen(port, function () {
  console.log('server is running');
});