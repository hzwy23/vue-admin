const modeller = {
    'GET /modeller': {
        statusCode: "0", statusMessage: "succcess", data: {
            total: 4,
            pages: 1,
            content: [{
                modelId: 1,
                modelName: "测试数据集",
                remark: "",
                updateDate: "2019-12-25 12:00:00",
                updateBy: "admin"
            },
            {
                modelId: 2,
                modelName: "测试数据集1",
                remark: "",
                updateDate: "2019-12-25 12:00:00",
                updateBy: "admin"
            },
            {
                modelId: 3,
                modelName: "测试数据集2",
                remark: "",
                updateDate: "2019-12-25 12:00:00",
                updateBy: "admin"
            },
            {
                modelId: 4,
                modelName: "测试数据集3",
                remark: "",
                updateDate: "2019-12-25 12:00:00",
                updateBy: "admin"
            }]
        }
    },
    'GET /modeller/column/xxx': {
        statusCode: "0", statusMessage: "succcess", data: {
            total: 4,
            pages: 1,
            content: [{
                modelId: 1,
                modelName: "测试数据集",
                identifierCd: "vin",
                identifierLabel: "车架号",
                dataType: 2,
                remark: "",
                updateDate: "2019-12-25 12:00:00",
                updateBy: "admin"
            },
            {
                modelId: 1,
                modelName: "测试数据集",
                identifierCd: "userId",
                identifierLabel: "用户ID",
                dataType: 2,
                remark: "",
                updateDate: "2019-12-25 12:00:00",
                updateBy: "admin"
            },
            {
                modelId: 1,
                modelName: "测试数据集",
                identifierCd: "speed",
                identifierLabel: "车速",
                dataType: 2,
                remark: "",
                updateDate: "2019-12-25 12:00:00",
                updateBy: "admin"
            },
            {
                modelId: 1,
                modelName: "测试数据集",
                identifierCd: "project_id",
                identifierLabel: "项目编号",
                dataType: 2,
                remark: "",
                updateDate: "2019-12-25 12:00:00",
                updateBy: "admin"
            }]
        }
    },
}

export default modeller;