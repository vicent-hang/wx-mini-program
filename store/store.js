/**
 * 全局状态管理
 */
import { observable, action } from 'mobx-miniprogram';

export const cartSore = observable({
  // 数据字段
  cartList: [],

  // 计算属性
  get sum() {
    // 返回一些计算值，假设有需要计算的属性
    return 0; // 示例值，根据需要修改
  },

  // actions
  setUserInfo: action(function () {
    
  }),
});





