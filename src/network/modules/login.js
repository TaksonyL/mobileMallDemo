export function checkLoginForm(loginForm) {
  return new Promise ((res,err) => {
    // console.log(loginForm)
    if(loginForm.username == 'admin' && loginForm.password == 123456){
      const token = 'admin'
      return res(token)
    }else{
      alert('密码或用户名错误')
    }
  })
}