import {Content} from './Layout'



const App = () => <><Content/></>




export default App;

// const  onLogin = () =>
// fetch('http://localhost:3000/main',{method: 'GET'
//         }).then(res =>res.json()).then((data) => {
//     console.log(data)
// })

// fetch("http://shop-roles.asmer.fs.a-level.com.ua/graphql", {
//     method: 'POST', headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//         ...(localStorage.authToken ? { Authorization: `Bearer ${localStorage.authToken}` } : {})
//     }, body: JSON.stringify({
//         'query': `query log($login: String, $password: String){
// login(login: $login, password: $password )
// }`, 'variables': {
//             "login": "nww",
//             "password": "1234567",
//         }
//     })
// })