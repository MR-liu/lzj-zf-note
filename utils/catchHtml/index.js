const request = require('request');
const HTML_CONFIG = require('./html.config').default;
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

let allImages = [];
const allHtml = {};

const run = objForEach(HTML_CONFIG, (key, value, next) => {
  const options = optionsConfig(value);

  request(options, function (error, response, body) {
    if (error) {
      console.log('request ====>>> ?????', value, error);
    } else {
      const { listImage, content} = getDom(body);

      // console.log('images ===>', listImage, 'content ====>', content);
      // console.log('catch page ===>>>>  >>>< o >end< o ><<<', value);
      allImages = [...allImages, ...listImage];
      allHtml[key] = content;

      setTimeout(() => {
        next()
      }, 100 * 2)
    }
  });
}, () => {
  emit(JSON.stringify(allImages), './images.json');
  emit(JSON.stringify(allHtml), './html.json');

  console.log('allImages', allImages);
})

run()

