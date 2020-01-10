import qs from 'qs'
const menu = {
    'POST /login': function(params){
        const param = qs.parse(params.body)
        if (param.username == 'admin' && param.password == '123456') {
            return {
              statusCode: "200",
              statusMessage: '登陆成功',
              data: {
                accessToken: 'xxx',
                refreshToken: 'xxx'
              }
            }
        } else {
          return {
            statusCode: "403",
            statusMessage: '登陆失败',
            data: {
              accessToken: '-',
              refreshToken: '-'
            }
          }
        }
    },
    'GET /menu': {
        statusCode: "200", statusMessage: "succcess", data: [
        {
          menuId: "2",
          menuType: 1,
          menuName: '系统管理',
          iconClass: 'el-icon-location',
          children: [
            {
              menuId: "2-1",
              menuType: 2,
              menuName: '数据集管理',
              path: '/modeller',
            },
            {
              menuId: "2-2",
              menuType: 2,
              menuName: '内容管理',
              path: '/modeller',
            }
          ]
        },
        {
          menuId: "3-1",
          menuType: 2,
          menuName: '数据集管理',
          path: '/modeller',
        }
      ]
    }
}

export default menu;