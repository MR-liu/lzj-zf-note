const request = require('request');
const fs = require('fs');

const {
  optionsConfig,
  getType,
  getName,
  isImage,
  streamImg,
  getDom,
  emit,
  getKeys,
  objForEach,
} = require('./utils').default;

const list = require('./images.json');

console.log(list.length);

console.log(Array.from(new Set(list)).length);

// let index = 0;

// const getImages = () => {
//   streamImg(list[index], () => {
//     console.log(parseInt(index / list.length * 10000) / 100 + "%");

//     if (index >= list.length) {
//       return console.log('done images list');
//     }

//     index += 1;
//     setTimeout(() => {
//       getImages();
//     }, 100 * 2)
//   })
// }

// const options = optionsConfig('http://img.zhufengpeixun.cn/asyncfunc1.png');

// try {
//   request(options, (e) => {
//     console.log('error request img download ====> ', e);
//   })
//     .pipe(
//       fs.createWriteStream('./' + getName('http://img.zhufengpeixun.cn/asyncfunc1.png'))).on('finish', function() {
//         console.error('写入已完成');

//       });
// } catch (error) {
//   console.log('error catch image download =======>', error);
// }
