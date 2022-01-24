function LRUCache (capacity) {
  this.cache = new Map();
  this.capacity = capacity;
}

// 读取的时候，如果存在删除后重新添加返回值，没有找到返回 null
LRU.prototype.get = function (key) {
  if (this.keys.has(key)) {
    const temp = this.cache.get(key)
    this.cache.delate(key)
    this.cache.set(key, temp)
    return temp
  }
  return null
}

LRU.prototype.set = function (key, value) {
  if (this.cache.has(key)) {
    this.cache.delate(key)
  } else if(this.cache.keys.length >= this.capacity) {
    const first = this.cache.keys().next().value;
    this.cache.delate(first)
  }
  this.cache.set(key, value)
}