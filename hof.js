// rest api calls
const adminLoginService = (user) => console.log(`admin login service with ${user.credentials.id}/${user.credentials.pass}`) 
const studentLoginService = (user) => console.log(`student login service with ${user.credentials.id}/${user.credentials.pass}`) 

// mock users
const adminUser = {
  name: 'Carlos',
  role: 'ADMIN',
  token: true,
  credentials: {
    id: 123,
    pass: 123
  }
}
const studentUser = {
  name: 'Juan',
  role: 'STUDENT',
  token: true,
  credentials: {
    id: 456,
    pass: 456
  }
}

// regular implementation
function adminLogin(user) {
  if (user.token) {
    console.log(`valid token for ${user.name}`)

    adminLoginService(user)

    console.log(`successfull login for ${user.role} ${user.name}`)
  } else {
    console.log(`error in login for ${user.role} ${user.name}`)
  }
}

function studentLogin(user) {
  if (user.token) {
    console.log(`valid token for ${user.name}`)

    studentLoginService(user)

    console.log(`successfull login for ${user.role} ${user.name}`)
  }else {
    console.log(`error in login for ${user.role} ${user.name}`)
  }
}

adminLogin(adminUser)
studentLogin(studentUser)

// HOF implementation
const validate = (user) => {
  (user.token) && console.log(`valid token for ${user.name}`)
  return user.token
}

const sendMessage = (message) => (user) => console.log(`${message} ${user.role} ${user.name}`)

const sendSuccessMessage = sendMessage('successfull login for') 
const sendUnsuccessMessage = sendMessage('error in login for') 

const login = (loginService) => {
  return (user) => {
    if (validate(user)) {
      loginService(user)
      sendSuccessMessage(user)
    } else {
      sendUnsuccessMessage(user)
    }
  }
}

const adminLoginHOF = login(adminLoginService)
const studentLoginHOF = login(studentLoginService)

adminLoginHOF(adminUser)
studentLoginHOF(studentUser)

// example
const hof1 = ()  => () => 5
hof1()()

const hof2 = (fn) => fn(5)
hof1((x) => x)
