//封装操作localstorage本地存储的方法   模块化的文件


var storage = {
  /**
   * 添加
   * @param key
   * @param value
   */
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  },
  /**
   * 获取
   * @param key
   * @returns {undefined}
   */
  get(key) {
    return JSON.parse(localStorage.getItem(key));
  },
  /**
   * 删除
   * @param key
   */
  remove(key) {
    localStorage.removeItem(key)
  }
}

// 导出storage，便于引用
export default storage
