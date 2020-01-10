import Mock from 'mockjs'

const mock_source = ['biz.js', 'sys.js']

function load(mock_source) {
    for (let i = 0; i < mock_source.length; i++) {
        let file = import('./data/' + mock_source[i])
        file.then(content => {
            if (content && content.default) {
                // 找到目标
                initMock(content.default)
            }
        })
    }

}

function initMock(rules) {
    for (let [rule, resp] of Object.entries(rules)) {
        const element = rule.split(" ")
        if (element && element.length == 2) {
            const rtype = element[0].trim()
            const rurl = element[1].trim()
            Mock.mock(rurl, rtype.toLowerCase(), resp)
        } else {
            Mock.mock(rule, resp)
        }
    }
}

if (mock_source && mock_source.length > 0) {
    load(mock_source)
}

