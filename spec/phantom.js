// https://gist.github.com/ryanand26/ef712e7c61dd2a886103
if (!HTMLElement.prototype.click) {
  HTMLElement.prototype.click = function () {
    var e = document.createEvent('MouseEvent');
    e.initMouseEvent('click', true, true, window);
    this.dispatchEvent(e);
  };
}
