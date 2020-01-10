import axios from 'axios';

// 数据集合字段管理 API

export function getModeller(params) {
    return axios.get('/ai/modeller/page', {
        params: params,
    })
}

export function getAllModeller(params) {
    return axios.get('/ai/modeller/all', {
        params: params,
    })
}

export function getModellerColumn(params) {
    return axios.get('/ai/modeller/detail/page', {
        params: params
    })
}

export function addModelColumn(params) {
    return axios.post('/ai/modeller/detail', {
        modelId: params.modelId,
        identifierCd: params.identifierCd,
        identifierLabel: params.identifierLabel,
        dataType: params.dataType,
        remark: params.remark
    }, {
        headers: {
            "Content-Type": "application/json"
        },
    })
}

export function updateModelColumn(params) {
    return axios.put('/ai/modeller/detail', {
        modelId: params.modelId,
        identifierCd: params.identifierCd,
        identifierLabel: params.identifierLabel,
        dataType: params.dataType,
        remark: params.remark,
        id: params.id
    }, {
        headers: {
            "Content-Type": "application/json"
        },
    })
}

export function addModel(param) {
    return axios.post('/ai/modeller', {
        "modelCd": param.modelCd,
        "modelName": param.modelName,
        "projectId": param.projectId,
        "remark": param.remark
    }, {
        headers: {
            "Content-Type": "application/json"
        }
    })
}

export function updateModel(param) {
    return axios.put('/ai/modeller', {
        modelCd: param.modelCd,
        modelName: param.modelName,
        projectId: param.projectId,
        remark: param.remark,
        modelId: param.modelId
    }, {
        headers: {
            "Content-Type": "application/json"
        }
    })

}

export function deleteModel(modelId) {
    return axios.delete(`/ai/modeller/${modelId}`)
}

export function deleteModelColumn(id) {
    return axios.delete(`/ai/modeller/detail/${id}`)
}

//根据多个modelId查询字段交集
export function getIntersectionModellerList(params) {
    return axios.get('/ai/modeller/detail/intersection/list', {
        params: params,
    })
}


export function getModelOptions() {
    return new Promise((resolve) => {
        axios.get('/ai/modeller/page', {
            params: {
                pageNumber: 1,
                pageSize: 1000
            }
        }).then(response => {
            if (response && response.content && response.content.length > 0) {
                const options = [];
                response.content.forEach(element => {
                    const item = {
                        modelId: element.modelId,
                        modelCd: element.modelCd,
                        modelName: element.modelName
                    }
                    options.push(item);
                });
                resolve(options);
            }
        })
    })
}

export function getModelColumnOptions(id) {
    return new Promise((resolve) => {
        axios.get('/ai/modeller/detail/page', {
            params: {
                modelId: id,
                pageNumber: 1,
                pageSize: 1000,
            }
        }).then(response => {
            if (response && response.content && response.content.length > 0) {
                const options = [];
                response.content.forEach(element => {
                    const item = {
                        identifierCd: element.identifierCd,
                        identifierLabel: element.identifierLabel,
                        id: element.id,
                        dataType: element.dataType,
                        modelId: element.modelId
                    }
                    options.push(item)
                })
                resolve(options);
            }
        })
    })
}

//根据modelId查询字段list
export function getModellerListByMid(params) {
    return axios.get('/ai/modeller/detail/list', {
        params: params,
    })
}
