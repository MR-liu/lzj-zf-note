const fs = require('fs');
const request = require('request');
const cheerio = require('cheerio');

const imageType = ['jpg', 'jpeg', 'png', 'gif'];
const END_TYPE = '.jpeg';

const optionsConfig = (url) => {
  var options = {
    'method': 'GET',
    'url': url,
    'headers': {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36",
    }
  };

  return options;
}

const getType = (url) => {
  if (!url) return '__NO'
  const list = url.split('.');

  const type = list.pop();

  return type ? type : '__NO'
}

const getName = (url) => {
  if (!url) return ''
  const is = isImage(url);

  if (is) {
    return url.split('/').pop();
  }

  return url.split('/').pop() + END_TYPE;
}

const isImage = (url) => {
  if (!url) return false;
  const type = getType(url);

  const is = imageType.includes(type);

  return is;
}

const streamImg = (imgURL, fn) => {
  try {
    request(imgURL, () => {
      console.log('error request img download ====> ', imgURL);
      // fn && fn()
    })
      .pipe(
        fs.createWriteStream('./' + getName(imgURL))).on('finish', function() {
          console.error('写入已完成');

          fn && fn();
        });
  } catch (error) {
    console.log('error catch image download =======>', imgURL);
  }
}

const getDom = (html) => {
  var $ = cheerio.load(html);
  const mainContent = $('.content');
  const listImage = []

  mainContent.find('img').each(function (index, el) {
    var imgUrl = $(this).attr("src");

    $(this).attr('src', './img/' + getName(imgUrl));

    listImage.push(imgUrl);
  });

  const content = mainContent.html();

  return {
    listImage,
    content
  }
}

const emit = (content, url) => {
  fs.writeFileSync(url, content, (err) => {
    if (err) {
      console.error(err)
      return
    }
  })
}

const getKeys = (obj) => {
  return Object.keys(obj);
}

const objForEach = (obj, fn, done) => {
  const keysList = getKeys(obj);

  let index = 0;
  const next = () => {
    index += 1;
    if (index >= keysList.length) {
      done && done();
      return console.log('done');
    }

    run();
  };

  const run = () => {
    console.log(parseInt(index / keysList.length * 10000) / 100 + "%");
    fn(keysList[index], obj[keysList[index]], next);
  };

  return run;
}

exports.default = {
  optionsConfig,
  getType,
  getName,
  isImage,
  streamImg,
  getDom,
  emit,
  getKeys,
  objForEach,
}
