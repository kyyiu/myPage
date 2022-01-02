/*
前置知识
阳历是地球绕太阳一圈的时间---365.2422
所以每四年会出现一个闰月来清除掉积累的误差
但是还有一点误差
所以还需要能被400整除是闰年,不满足前面的时候每100年的时候不算闰年
阴历是月亮绕地球一周的时间---29.53
在地球上不能看到月亮的时候称为朔---初一
能看到满月的时候叫望--十五
一个朔望月有29.53
所以农历只有29， 30的月份
农历的年界是春节, 而春节就是正月初一

二十四节气分为节气和中气
按照节气中气节气中气的顺序排列
每个农历月份都有一个中气
如果没有对应的中气时，会补一个闰月，比如四月没有中气，会补一个闰四月

此算法核心
依据阳历1900-1-0也是农历正月初一
通过积累日，算出偏移量，进行匹配出结果
*/


function Almanac() {
  // 43854是2020年正月初一的积累日，鼠年
  this.zhengyueDay = 43854
  this.yearAnimal = ''
}

Almanac.prototype.jieqi = [
  '小寒', '大寒', 
  '立春', '雨水', '惊蛰', '春分', 
  '清明', '谷雨', '立夏', '小满', 
  '芒种', '夏至', '小暑', '大暑', 
  '立秋', '处暑', '白露', '秋分',
  '寒露', '霜降', '立冬', '小雪',
  '大雪', '冬至'
]

Almanac.prototype.monthName = ['', '正月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '冬月', '腊月']

Almanac.prototype.jieqi2ChineseMonth = {
  '雨水': '正月',
  '春分': '二月',
  '谷雨': '三月',
  '小满': '四月',
  '夏至': '五月',
  '大暑': '六月',
  '处暑': '七月',
  '秋分': '八月',
  '霜降': '九月',
  '小雪': '十月',
  '冬至': '冬月', 
  '大寒': '腊月'
}

Almanac.prototype.ChineseDay = ['', '初一', '初二', '初三', '初四', '初五', '初六', '初七', '初八', '初九', '初十',
'十一', '十二', '十三', '十四', '十五', '十六', '十七', '十八', '十九',
'二十', '廿一', '廿二', '廿三', '廿四', '廿五', '廿六', '廿七', '廿八', '廿九',
'三十']

Almanac.prototype.shengxiao = ['', '子鼠', '丑牛', '寅虎', '卯兔', '辰龙', '巳蛇', '午马', '未羊', '申猴', '酉鸡', '戌狗', '亥猪']

/**
 * 
 * @param {*} y 第几年
 * @param {*} n 第几年里面的第几个节气,奇数时为中气
 * @returns y年第n节气距离1900-1-0多少天
 */
Almanac.prototype.getChineseWeather = function (y, n) {
  return (365.242 * (y-1900)) + 6.2 + (15.22 * n) - (1.9 * Math.sin(0.262 * n))
}

// 得到第n个朔日，即计算第n个初一
Almanac.prototype.nthNewMoonFrom1900 = function(n) {
  return (1.6 + (29.5306 * n) + (0.4 * Math.sin(1 - (0.45058 * n))))>>0
}

/**
 * 获取某年的每个月天数
 * @param {number} 年份
 * @returns 这年的月份天数
 */
 Almanac.prototype.getPerMonthDates = function(y) {
  return [31,28+this.isLeapYear(y),31,30,31,30,31,31,30,31,30,31];
}

// 从1900-1-0到这个日期的积累日
Almanac.prototype.date2Day = function (year, month , day) {
  let days = 0
  for(let y = 1900; y < year; y++) {
    if (this.isLeapYear(y)) {
      days+=366
    } else {
      days += 365
    }
  }

  const thisYearMonthDays = this.getPerMonthDates(year)
  for (let m = 0; m < month-1; m++) {
    days += thisYearMonthDays[m]
  }

  days += day
  return days
}

// 获取最近的初一在哪天
Almanac.prototype.getClosestNewMoon = function(days) {
  // 记录当前是第几个朔日
  let L = 0
  // 积累日大于等于，第L个朔日的积累日，则继续查
  // 积累日总是落于大于等于某个朔望月的初一的区间
  // 所以用使用大于等于来判断好理解，所以得到的结果要减去一个朔望月
  while (days >= this.nthNewMoonFrom1900(L)) {
    L+=1
  }
  return [L-1, this.nthNewMoonFrom1900(L-1)]
}


Almanac.prototype.customDate = function () {
  return new Date()
}
/**
 * 
 * @returns 阳历当前的年月日时 的数组
 */
Almanac.prototype.getCurTime= function () {
  const date = this.customDate()
  const y = date.getFullYear()
  const m = date.getMonth() + 1
  const d = date.getDate()
  const h = date.getHours()
  return  [y, m, d, h]
}
/**
 * 
 * @param {*} 年份year 
 * @returns 这年是否是闰年
 */
Almanac.prototype.isLeapYear = function(year) {
  var flag;
  // 不能被4整除不是闰年
  // 能被4整除，但是不能被100整除是闰年
  // 100整除也能被400整除是闰年
  // 100整除不能被400整除不是闰年

  year % 4 === 0 
  ? 
  (year % 100 !== 0 ? flag=1 : (year % 400 === 0 ? flag=1 : flag = 0)) 
  : 
  flag = 0;//闰年处理
  return flag;
}

// 把积日转换成阳历日期
Almanac.prototype.transfromYang = function(n) {
  // 1900-1-0是界点
  let y = 1900
  let m = 0
  // 积累日大于y年的m月的天数
  while(n > this.getPerMonthDates(y)[m]) {
    // 积累日减去这个月的天数
    n -= this.getPerMonthDates(y)[m]
    // 增加一个月，记录当前在那个月份
    m = (m+1) % 12
    // m为0时表示经过了一年
    if (m===0) {
      y++
    }
  }
  let year = y, month = m+1, day = n
  return [year, month, day]
}

/**
 * 计算前一年冬至的积日F(0),并用F(0)计算冬至所在的朔月m及其朔日M(0)
 * 就可以推算冬至的农历日期，冬至所在的农历月份总是十一月
 * 计算下一个中气F(1)和下一个朔日M(1),如果F1《M1，那么该月就是上一个月的闰月
 * 并把这个中气作为F2，以后的中气，朔日。。农历月份也这样确定
 */
Almanac.prototype.getChineseMonth = function(y) {

}

// 生成中气列表
Almanac.prototype.create_jie_qi_list = function(year) {
  let dongzhi = this.getChineseWeather(year-1, this.jieqi.indexOf('冬至'))
  const result = [{
    day: dongzhi>>0,
    month: this.jieqi2ChineseMonth['冬至'],
    jieqi: '冬至'
  }]

  for(let i = 1; i < this.jieqi.length; i+=2) {
    const name = this.jieqi[i]
    const days = this.getChineseWeather(year, i)
    result.push({
      day: days>>0,
      month: this.jieqi2ChineseMonth[name],
      jieqi: name
    })
  }

  return result
}

/**
 * 生成该年份的农历区间
 * @param {*} y 年份
 * @returns 该年份的农历区间,此结果要和create_jie_qi_list生成的结果共同使用。
 */
Almanac.prototype.create_month_list = function(y) {
  const days = this.getChineseWeather(y-1, this.jieqi.indexOf('冬至'))
  const m = this.getClosestNewMoon(days)[0]
  const result = []
  for(let i = m; i < m+13; i++) {
    result.push({
      month: null,
      first_day: this.nthNewMoonFrom1900(i),
      // 朔望月最后一天，下一个初一的积累日-1
      last_day: this.nthNewMoonFrom1900(i+1) - 1
    })
  }
  return result
}

Almanac.prototype.getThisYinYear = function(y) {
  const jieqiList = a.create_jie_qi_list(y)
  const monthList = a.create_month_list(y)
  let zhengyueDay;
  for (const m of monthList) {
    for (const j of jieqiList) {
      if (j.day >= m.first_day && j.day <= m.last_day) {
        m.month = j.month 
        if(m.month === '正月') {
          zhengyueDay = m.first_day
        }
      }
    }
  }
  return {
    monthList,
    zhengyueDay
  }
}

// 以2020年属相为鼠的积累日标志开始计算
Almanac.prototype.getThisYearAnimal = function (y) {
  // 当前时间
  const curTime = this.getCurTime()
  const days = this.date2Day(curTime[0], curTime[1], curTime[2])
  let count = 1
  for (let i = 2021; i <= y; i++) {
    const zhengyue = this.getThisYinYear(i).zhengyueDay
    console.log(zhengyue)
    // 2020年的春节积累日小于i年的春节积累日,并且当前时间的积累日要大于i年的春节积累日，生肖前进一位
    if (this.zhengyueDay < zhengyue && days >= zhengyue) {
      count++
    }
  }
  return this.shengxiao[count % 12]
}

// 获取时辰
Almanac.prototype.getChineseTime = function (hour) {
  // 每个时辰是两个小时
  // 23 ~ 00.59.59是子时
  // 1 ~ 2.59.59 是丑时, 依次类推

  if ( hour % 23 === 0) {
    return 1
  }
  for (let i = 3, n = 2 ;i <= 23; i=i+2, n++) {
    if (hour % i && hour < i) {
      return n
    }
  }
}

Almanac.prototype.changeGossip = function(year, month, day, hour) {
  hour = typeof hour === 'number' ? hour : 0
  const idx = (year+month+day+hour) % 6
  return !(idx) ? 6 : idx
}

let a = new Almanac()
// 获取1900-1-0起的第1个初一 和第二个初一的积累日
// console.log(a.nthNewMoonFrom1900(0))
// console.log(a.nthNewMoonFrom1900(1))
// console.log(a.nthNewMoonFrom1900(2))


// console.log(a.date2Day(2019, 4, 10))
// console.log(a.getClosestNewMoon(a.date2Day(2019, 4, 10)))
// console.log(a.transfromYang(a.getClosestNewMoon(a.date2Day(2019, 4, 10))[1]>>0)) // 2019, 4, 10 最近的初一是2019,4,5
// a.date2Day(2019, 4, 10) - a.getClosestNewMoon(a.date2Day(2019, 4, 10))[1]>>0 + 1 //即为当前的农历名称比如2为初二
// console.log(a.date2Day(2019, 4, 10) - (a.getClosestNewMoon(a.date2Day(2019, 4, 10))[1]>>0) + 1)

// console.log(a.create_jie_qi_list(2019))
// console.log(a.getClosestNewMoon(20))


// const jq = a.create_jie_qi_list(2000)
// console.log(jq)
// const mothjq = a.create_month_list(2000)

// for (const ele of mothjq) {
//   for (const j of jq) {
//     if (j.day>= ele.first_day && j.day <= ele.last_day) {
//       ele.month = j.month
//     }
//   }
// }
// console.log(a.zhengyueDay)
// console.log(a.getThisYinYear(2020).monthList)
// console.log(a.zhengyueDay)

// console.log(a.getThisYearAnimal(2023))

export default Almanac