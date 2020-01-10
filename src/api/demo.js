import axios from 'axios';

// 数据集合字段管理 API

export function getModeller() {
    return axios.get('/modeller')
}


export function getModellerColumn(params) {
    return axios.get('/modeller/detail/page', {
        params: params
    })
}

export function addModelColumn(params) {
    return axios.post('/modeller/detail', {
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
    return axios.put('/modeller/detail', {
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
    return axios.post('/modeller', {
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
    return axios.put('/modeller', {
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
    return axios.delete(`/modeller/${modelId}`)
}

export function deleteModelColumn(id) {
    return axios.delete(`/modeller/detail/${id}`)
}
