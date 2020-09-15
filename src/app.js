const name = require('./js/moduleA.js')
require('./style/init.styl')

const oH1 = document.createElement('h1')
oH1.innerHTML = 'Hello ' + name
document.body.appendChild(oH1)
