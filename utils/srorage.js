const KEY = 'USER_INFO'

export const setInfo = (obj) => {
    // 将对象转换为字符串存储
    wx.setStorageSync(KEY, JSON.stringify(obj))
}

export const getInfo = () => {
  // 默认空对象
  const defualtObj = { token: '', userId: '' }
  const res = wx.getStorageSync(KEY)
  // 在本地存储的是字符串
  // 将字符串转换对象JSON.parse()
  return res ? JSON.parse(res) : defualtObj
}