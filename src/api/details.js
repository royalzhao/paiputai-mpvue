import { ajax } from '@/utils/index'

export function productinfo (data) {
  return new Promise((resolve, reject) => {
    ajax.post('store/api/productInfo', data)
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export function productDetails (data) {
  return new Promise((resolve, reject) => {
    ajax.post('store/api/productDetails', data)
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export function productAppraise (data) {
  return new Promise((resolve, reject) => {
    ajax.post('store/api/productAppraise', data)
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}
