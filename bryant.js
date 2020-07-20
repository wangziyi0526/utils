let _wzyFucntion = {
  // 校验手机号
  checkMobile: function (str) {
    let mobileStr = str.trim();// 前后去空格
    // 1.是否为空
    // 2.正则匹配
    if (mobileStr) {
      if (!(/^1[3456789]\d{9}$/.test(mobileStr))) {
        console.log("手机号码有误，请重填");
        return false;
      } else {
        return true
      }
    } else {
      console.log('手机号不能为空')
    }
  },
  // 校验 邮箱
  isEmailAvailable(emailInput) {
    var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    if (!myreg.test(emailInput)) {
      return false;
    }
    else {
      return true;
    }
  },
  // 时间戳转换日期
  changeTime(strTime) {
    let date =  new Date(strTime)
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var D = date.getDate() + ' ';
    var h = date.getHours() + ':';
    var m = date.getMinutes() + ':';
    var s = date.getSeconds();
    console.log(Y + M + D + h + m + s)
    return Y + M + D + h + m + s;

  },

  //  毫秒值转换时长
  changeTimeLang(time) {
    let day = Math.floor(time / 86400000); //天
    let hours = Math.floor((time % 86400000) / 3600000); //时
    let minutes = Math.floor((time % 3600000) / 60000); //分
    let seconds = Math.floor((time % 60000) / 1000);
    var str = ''
    if (day > 1) {
        str = day + '天' + hours + '小时' + minutes + '分钟' + seconds + '秒'
    } else if (day < 1 && hours > 0) {
        str = hours + '小时' + minutes + '分钟' + seconds + '秒'
    } else if (hours < 1 && minutes > 0) {
        str = minutes + '分钟' + seconds + '秒'
    } else if (hours > 0) {
        str = hours + '小时' + minutes + '分钟' + seconds + '秒'
    } else if (minutes < 1 && seconds > 0) {
        str = seconds + '秒'
    } else if (minutes > 0) {
        str = minutes + '分钟' + seconds + '秒'
    }
    return str
  },
  // 钱, 单位为分  转换成 元
  //  低于10000的，正常展示，高于一万的 展示成  例如 '1.02万', 科学计数
  moneyChange (val) {
    if (!val) return 0;
    if (val < 0) return val;
    let _val = Number(val) - Number(val) % 1; //获取整数部分（这里是windy93的方法）
    let len = _val.toString().length;
    if (len > 4) {
        let temp = (val / 1000000).toFixed(2);
        let intPart = Number(temp) - Number(temp) % 1; //获取整数部分（这里是windy93的方法）
        let intPartFormat = intPart.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,'); //将整数部分逢三一断

        let value2Array = temp.split(".")[1]; //获取小数

        return `${intPartFormat}.${value2Array}万`
    } else {
        let tFlot = val.toString();
        if (tFlot.indexOf('.') !== -1) {
            val = val.toFixed(2)
        }
        return val.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
    }    
  },
  
}
_wzyFucntion.moneyChange(155231211)
