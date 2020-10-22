import api from '../../api/index' // 导入api接口
import { getToken, setToken, removeToken } from '@/utils/auth'

const user = {
  state: {
    token: getToken(),
    name: '',
    avatar: '',
    roles: []
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: ( state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
        state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },
  actions: {
    // 登入
    LoginByUsername({commit}, userinfo){
      const username = userinfo.username.trim()
      return new Promise((resolve, reject) => {
        api.login.loginByUsernameApi(username, userinfo.password)
        .then(resp => {
          const data = resp
          setToken(data.access_token)
          commit('SET_TOKEN', data.access_token)
          commit('SET_NAME', username)
          sessionStorage.setItem('user',username)
          resolve()
        })
        .catch(err => {
          reject(err)
        })
      })
    },
    // 获取用户权限等
    GetUserInfo({commit, state}) {
      return new Promise((resolve, reject) => {
        api.login.getUserInfoApi(state.token,sessionStorage.getItem('user'))
        .then(resp => {
          if(!resp){
            reject('error')
          }
          const data = resp
          if(data && data.length){
            commit('SET_ROLES', data)
          }else {
            reject('getUserInfoApi: roles must be a non-null array!')
          }
          resolve(resp)
        })
        .catch(err => {
          reject(err)
        })
      })
    },
    // 登出
    LogOut({commit, state}){
      return new Promise((resolve, reject) => {
        logoutApi(state.token)
        .then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          removeToken()
          resolve()
        })
        .catch(err => {
          reject(err)
        })
      })
    },
    // 前端登出
    FedLogOut({commit}){
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        commit('SET_ROLES', [])
        commit('SET_ROUTERS', [])
        sessionStorage.removeItem('defaultactive')
        sessionStorage.removeItem('defaultactive2')
        resolve()
      })
    }
  }
}

export default user