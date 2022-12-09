const express = require('express')
const server = express();

server.all("/", (req, res) => {
  res.send('STATUS ANIMATED BY QUIETARTX')
})

function keepAlive() {
  server.listen(3000, () => {
    console.log("┏━━┳┳┳━━┳━┳━━┓┏━┳━┳━┓┏┳━┳━┳━━┓\n┃┏┓┃┃┣┃┃┫┳┻┓┏┛┃╋┃╋┃┃┃┃┃┳┫┏┻┓┏┛\n┃┗┛┃┃┣┃┃┫┻┓┃┃╋┃┏┫┓┫┃┣┫┃┻┫┗┓┃┃\n┗━┓┣━┻━━┻━┛┗┛╋┗┛┗┻┻━┻━┻━┻━┛┗┛\n╋╋┗┛")
  })
}
module.exports = keepAlive