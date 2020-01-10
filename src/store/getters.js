const getters = {
    height: state => state.basic.height,
    mockInitFinished: state => state.basic.mockInitFinished,
    loginStatus: state => state.basic.loginStatus,
    userInfo: state => state.basic.userInfo,
}

export default getters;