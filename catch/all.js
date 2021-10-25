const fs = require('fs');
const all = require('./1.json');

let res = ''

const keys = Object.keys(all);

for (let index = 0; index < keys.length; index++) {
  const name = keys[index];
  const code = all[name];

  res += `<h1>${name}</h1>`
  res += code;
}

fs.writeFile(`./all.html`, res, (err) => {
  if (err) {
    console.error(err)
    return
  }
})
