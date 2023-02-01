import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js"; 

const novoUser = new User ("Maurício", "m@m", "2021-04-04");
console.log(novoUser.exibirInfos());
