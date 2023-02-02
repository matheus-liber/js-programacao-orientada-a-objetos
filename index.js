import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js"; 

const novoUser = new User ("Maurício", "m@m", "2021-04-04");
console.log(novoUser.exibirInfos());

const novoAdmin = new Admin("Ronilda", "r@r.com", "20-12-1909");
console.log(novoAdmin.exibirInfos());

console.log(novoAdmin.nome);
novoAdmin.nome = "";
console.log(novoAdmin.nome)
