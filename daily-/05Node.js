function List () {
  this.head = null;
  this.length = 0;
  this.Node = function (element) {
    this.element = element;
    this.next = null
  }
}

List.prototype.getList = function () {
  return this.head
}
List.prototype.search = function (list, element) {}
List.prototype.append = function (list, element) {}
List.prototype.insert = function (position, element) {}
List.prototype.remove = function (element) {}
List.prototype.isEmpty = function () {}
List.prototype.size = function () {}