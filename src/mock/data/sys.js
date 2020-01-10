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
          menuId: "1",
          menuType: 1,
          menuName: '业务规则',
          iconClass: 'el-icon-location',
          children: [
            {
              menuId: "1-1",
              menuType: 2,
              menuName: '场景管理',
              path: '/modeller',
            },
            {
              menuId: "1-2",
              menuType: 2,
              menuName: '事件管理',
              path: '/modeller',
            },
            {
              menuId: "1-3",
              menuType: 2,
              menuName: '推荐管理',
              path: '/modeller',
            },
            {
              menuId: "1-4",
              menuType: 2,
              menuName: '触发记录',
              path: '/modeller',
            },
            {
              menuId: "1-5",
              menuType: 1,
              menuName: '业务规则',
              iconClass: 'el-icon-location',
              children: [
                {
                  menuId: "1-5-1",
                  menuType: 2,
                  menuName: '数据集管理',
                  path: '/modeller',
                },
                {
                  menuId: "1-5-2",
                  menuType: 2,
                  menuName: '内容管理',
                  path: '/modeller',
                }
              ]
            }
          ]
        },
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