const fs = require('fs')
const bodyParser = require('body-parser')
const jsonServer = require('json-server')
const jwt = require('jsonwebtoken')

const server = jsonServer.create()
const router = jsonServer.router('./database.json')
const userdb = JSON.parse(fs.readFileSync('./users.json', 'UTF-8'))

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(jsonServer.defaults());

const SECRET_KEY = '123456789'

const expiresIn = '1h'

function createToken(payload){
  return jwt.sign(payload, SECRET_KEY, {expiresIn})
}

function verifyToken(token){
  return  jwt.verify(token, SECRET_KEY, (err, decode) => decode !== undefined ?  decode : err)
}

function isAuthenticated({cpf, senha}){
  return userdb.users.find(user => (user.cpf === cpf && user.senha === senha) !== -1)
}

server.post('/auth/registrar', (req, res) => {
  console.log("Requisição de registro:");
  console.log(req.body);
  const {cpf, senha} = req.body;

  if(isAuthenticated({cpf, senha}) === true) {
    const status = 401;
    const message = 'Email e senha já existe';
    res.status(status).json({status, message});
    return
  }

fs.readFile("./users.json", (err, data) => {  
    if (err) {
      const status = 401
      const message = err
      res.status(status).json({status, message})
      return
    };

    var data = JSON.parse(data.toString());

    var last_item_id = data.users[data.users.length-1].id;

    data.users.push({id: last_item_id + 1, cpf: cpf, senha: senha}); //add some data
    var writeData = fs.writeFile("./users.json", JSON.stringify(data), (err, result) => {  // WRITE
        if (err) {
          const status = 401
          const message = err
          res.status(status).json({status, message})
          return
        }
    });
});

  const access_token = createToken({cpf, senha})
  console.log("Access Token:" + access_token);
  res.status(200).json({access_token})
})

server.post('/auth/login', (req, res) => {
  console.log("Requisição de login:");
  console.log(req.body);
  const {cpf, senha} = req.body;

  if (isAuthenticated({cpf, senha}) === false) {
    const status = 401
    const message = 'E-mail ou senha incorreto'
    res.status(status).json({status, message})
    return
  }
  const access_token = createToken({cpf, senha})
  console.log("Access Token:" + access_token);
  res.status(200).json({access_token, user: isAuthenticated({cpf, senha})})
})

server.use(/^(?!\/auth).*$/,  (req, res, next) => {
  if (req.headers.authorization === undefined || req.headers.authorization.split(' ')[0] !== 'Bearer') {
    const status = 401
    const message = 'Não autorizado'
    res.status(status).json({status, message})
    return
  }
  try {
    let verifyTokenResult;
     verifyTokenResult = verifyToken(req.headers.authorization.split(' ')[1]);

     if (verifyTokenResult instanceof Error) {
       const status = 401
       const message = 'Falha no token de acesso'
       res.status(status).json({status, message})
       return
     }
     next()
  } catch (err) {
    const status = 401
    const message = 'Token revogado, relogue'
    res.status(status).json({status, message})
  }
})

server.use(router)

server.listen(3030, () => {
  console.log('API de login e registro')
})