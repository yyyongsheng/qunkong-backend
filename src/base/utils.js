const regInt = /^[0-9]*$/
const regLen = /^.{3,20}$/
const regEmail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
const regUrl = /^((ht|f)tps?):\/\/[\w\-]+(\.[\w\-]+)+([\w\-\.,@?^=%&:\/~\+#]*[\w\-\@?^=%&\/~\+#])?$/
const regMobile = /^[1][3,4,5,7,8][0-9]{9}$/
const regPhone = /^(\d{2,4}[-_－—]?)?\d{3,8}([-_－—]?\d{3,8})?([-_－—]?\d{1,7})?$/
const regFloat2 = /^[0-9]\d*$|^[0-9]\d*\.\d$|^[0-9]\d*\.\d{2}$|^[0]\.\d{1,2}$/
const regCard = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
const regPass0 = /^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)(?![a-zA-z\d]+$)(?![a-zA-z!@#$%^&*]+$)(?![\d!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$/
const regPass1 = /^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$/
const regPass2 = /^[a-zA-Z\d!@#$%^&*_]+$/
const regLine = /^[a-zA-Z\d!_]+$/
const regLetter = /^[a-zA-Z\d]+$/
const regPoint = /^[\d\.]+$/
const regText = /^([a-zA-Z]{1,24}|[\u4e00-\u9fa5]{1,12})$/
const regChine = /^[\u4E00-\u9FA5]*$/
const regEng = /^[a-zA-Z!_]*$/

const utils = {

}

// 数字验证
utils.vaildeInt = (rule, value, callback) => {
    if (regInt.test(value)) {
        callback()
    } else {
        callback(new Error('填写数字格式错误，请重新填写'))
    }
}

// 长度3~20个字符
utils.vaildeLen = (rule, value, callback) => {
    if (regLen.test(value)) {
        callback()
    } else {
        callback(new Error('填写格式错误，请重新填写'))
    }
}

// 邮箱验证
utils.vaildeEmail = (rule, value, callback) => {
    if (regEmail.test(value)) {
        callback()
    } else {
        callback(new Error('填写邮箱格式错误，请重新填写'))
    }
}

// 验证URL  地址必须以http/https/ftp/ftps开头
utils.vaildeURL = (rule, value, callback) => {
    if (regUrl.test(value)) {
        callback()
    } else {
        callback(new Error('填写URL格式错误，请重新填写'))
    }
}

// 验证手机号
utils.vaildeMobile = (rule, value, callback) => {
    if (regMobile.test(value)) {
        callback()
    } else {
        callback(new Error('填写手机号格式错误，请重新填写'))
    }
}

// 验证固定号码
utils.vaildePhone = (rule, value, callback) => {
    if (regPhone.test(value)) {
        callback()
    } else {
        callback(new Error('填写固定号码格式错误，请重新填写'))
    }
}

// 验证浮点型后2位
utils.vaildeFloat2 = (rule, value, callback) => {
    if (regFloat2.test(value)) {
        callback()
    } else {
        callback(new Error('填写小数2位格式错误，请重新填写'))
    }
}

// 验证身份证
utils.vaildeCard = (rule, value, callback) => {
    if (regCard.test(value)) {
        callback()
    } else {
        callback(new Error('填写身份证格式错误，请重新填写'))
    }
}

// 验证密码高级(字母+数字+特殊字符)
utils.vaildePass0 = (rule, value, callback) => {
    if (regPass0.test(value)) {
        callback()
    } else {
        callback(new Error('格式错误。必需字母+数字+特殊字符'))
    }
}

// 验证密码中级(字母+数字，字母+特殊字符，数字+特殊字符)
utils.vaildePass1 = (rule, value, callback) => {
    if (regPass1.test(value)) {
        callback()
    } else {
        callback(new Error('格式错误。必需字母+数字，字母+特殊字符，数字+特殊字符'))
    }
}

// 验证密码低级
utils.vaildePass2 = (rule, value, callback) => {
    if (regPass2.test(value)) {
        callback()
    } else {
        callback(new Error('格式错误。只能包含字母、字母、特殊字符'))
    }
}

// 验证字母、数字、下划线
utils.vaildeLine = (rule, value, callback) => {
    if (regLine.test(value)) {
        callback()
    } else {
        callback(new Error('格式错误。只能包含字母、字母、下划线'))
    }
}

// 验证字母、数字
utils.vaildeLetter = (rule, value, callback) => {
    if (regLetter.test(value)) {
        callback()
    } else {
        callback(new Error('格式错误。只能包含数字、字母'))
    }
}

// 数字与小数点
utils.vaildPoint = (rule, value, callback) => {
    if (regPoint.test(value)) {
        callback()
    } else {
        callback(new Error('格式错误。只能包含数字、小数点'))
    }
}

// 限制最多为 24个字母或12个汉字
utils.vaildText = (rule, value, callback) => {
    if (regText.test(value)) {
        callback()
    } else {
        callback(new Error('格式错误。最多为 24个字母或12个汉字'))
    }
}

// 限制汉字
utils.vaildChine = (rule, value, callback) => {
    if (regChine.test(value)) {
        callback()
    } else {
        callback(new Error('格式错误。请输入汉字'))
    }
}

// 限制英文
utils.vaildEng = (rule, value, callback) => {
    if (regEng.test(value)) {
        callback()
    } else {
        callback(new Error('格式错误。请输入英文'))
    }
}

// 小于100
utils.less100 = (rule, value, callback) => {
    if (value <= 100) {
        callback()
    } else {
        callback(new Error('请填写小于或等于100的数字'))
    }
}

export default utils