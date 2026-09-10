const http = require('node:http')
const fs = require('node:fs')
const path = require('node:path')

const root = path.join(__dirname, 'out')
const port = Number(process.env.PORT || 3000)
const contentTypes = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.json': 'application/json; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.ico': 'image/x-icon' }

http.createServer((req, res) => {
  const requestPath = decodeURIComponent((req.url || '/').split('?')[0])
  const safePath = path.normalize(requestPath).replace(/^([.][.][/\\])+/, '')
  let filePath = path.join(root, safePath)
  if (filePath.endsWith(path.sep)) filePath += 'index.html'
  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) filePath = path.join(root, 'index.html')
  const ext = path.extname(filePath).toLowerCase()
  res.writeHead(200, { 'Content-Type': contentTypes[ext] || 'application/octet-stream' })
  fs.createReadStream(filePath).pipe(res)
}).listen(port, '0.0.0.0', () => console.log(`Portfolio listening on ${port}`))
