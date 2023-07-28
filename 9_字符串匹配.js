// 将字符串转换成驼峰形式

const format1 = (str) => {
  const regExp = /\w+/g;
  return str.replace(regExp, (word, index) => {
    return word.slice(0, 1).toUpperCase() + word.slice(1);
  });
};

console.log(format1("abc9+bbb"));
console.log("==========");

//指定字符前添加下划连接线
const info = {
  id: 1,
  id1: 2,
  userName1: "刘玄德",
  userName2: "刘玄德",
  userName3: "大哥",
  userAge: 45,
  userAge1: 46,
  userAge2: 47,
};

const format2 = (str) => {
  const regExp = /[A-Z]|\d/g;
  return str.replace(regExp, (word) => {
    return "_" + word.toLowerCase();
  });
};

console.log(format2("userName2"));
console.log("===================");

//将横杠转化为驼峰形式

const format3 = (str) => {
  const regExp = /-\w+/g;
  return str.replace(regExp, (word) => {
    return word.slice(1, 2).toUpperCase() + word.slice(2);
  });
};

console.log(format3("bgc-bgd-efg"));
console.log("===================");

// 指定字符前添加横杠
const format4 = (str) => {
  const regExp = /[A-Z][a-z]+|\d[a-z]+/g;
  return str.replace(regExp, (word) => {
    return "_" + word;
  });
};

console.log(format4("Asss7bbbb"));
console.log("===================");

//URL中query参数的获取
function getQuery(url) {
  const regExp = /[?#&][^?#&]+=[^?#&]/g;
  const strArr = url.match(regExp);
  const res = [];
  strArr.forEach((item) => {
    const content = item.slice(1).split("=");
    res[content[0]] = content[1];
  });
  return res;
}
const url = "https://www.baidu.com/?a=1&b=2&c=3#d=5";
console.log(getQuery(url));
