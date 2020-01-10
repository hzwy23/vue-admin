
const basic = {
    state: {
        height: document.documentElement.clientHeight,
        loginStatus: false,
        userInfo: {
            userId: 'admin',
            nickname: '超级管理员',
        }
    },
    mutations: {
        AUTO_WINDOW_HEIGHT: state => {
            state.height = document.documentElement.clientHeight
        },
        LOGIN_STATUS: (state, status) => {
            state.loginStatus = status
        },
        SET_USER_INFO:(state, userInfo) => {
            state.userInfo = userInfo;
        }
    },
    actions: {
        autoHeight({ commit }) {
            commit('AUTO_WINDOW_HEIGHT')
        },
        loginStatus({commit}, status){
            commit('LOGIN_STATUS', status)
        },
        setUserInfo({commit}, userInfo) {
            commit('SET_USER_INFO', userInfo)
        }
    }
}

export default basic;