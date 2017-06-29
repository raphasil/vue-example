
import axios from 'axios'

export default class RandomUserService {

  constructor () {
    this.HTTP = axios.create({
      baseURL: 'https://randomuser.me/api/'
    })
  }

  getOne () {
    return new Promise((resolve, reject) => {
      this.HTTP.get().then(res => {
        if (res.status === 200) {
          if (res.data && res.data.results) {
            resolve(res.data.results[0])
          } else {
            reject(new Error('Nenhum usuario criado'))
          }
        } else {
          const err = new Error('Nenhum usuario criado')
          err.extra = `http status code ${res.status}`
          reject(err)
        }
      }).catch(e => {
        const err = new Error('Ocorreu um error ao criar usuario')
        err.extra = e
        reject(err)
      })
    })
  }

  getMany (size) {
    return new Promise((resolve, reject) => {
      this.HTTP.get(`?results=${size}`).then(res => {
        if (res.status === 200) {
          if (res.data && res.data.results) {
            resolve(res.data.results)
          } else {
            reject(new Error('Nenhum usuario criado'))
          }
        } else {
          const err = new Error('Nenhum usuario criado')
          err.extra = `http status code ${res.status}`
          reject(err)
        }
      }).catch(e => {
        const err = new Error('Ocorreu um error ao criar usuario')
        err.extra = e
        reject(err)
      })
    })
  }

}
