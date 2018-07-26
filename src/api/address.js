import { ajax } from '@/utils/index'
// 地址列表
export function addressList (data) {
  return new Promise((resolve, reject) => {
    ajax.post('store/api/addressList', data)
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}
// 新增地址
export function addAddress (data) {
  return new Promise((resolve, reject) => {
    ajax.post('store/api/addAddress', data)
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}
// 删除地址
export function delAddress (data) {
  return new Promise((resolve, reject) => {
    ajax.post('store/api/delAddress', data)
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}
// 设置默认收货地址
export function setDefaultAddress (data) {
  return new Promise((resolve, reject) => {
    ajax.post('store/api/setDefaultAddress', data)
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}
