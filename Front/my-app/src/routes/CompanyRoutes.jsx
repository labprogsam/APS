import Home from "../pages/home"
import AuthRedirect from './AuthRedirect'
import VerAtividades from "../pages/Atividades/ver-atividades";
import CriarAtividade from '../pages/Atividades/criar-atividade';
import EditarAtividade from '../pages/Atividades/editar-atividade';
import Login from '../pages/login'

export const PublicRoutes = [
  {
    name: "Login",
    component: Login,
    path: "/login",
  },
]

export const PrivateRoutes = [
  {
    name: "Home",
    component: Home,
    path: "/",
  },
  {
    name: "VerAtividade",
    component: VerAtividades,
    path: "/atividades"
  },
  {
    name: "CriarAtividade",
    component: CriarAtividade,
    path: "/atividades/criar"
  },
  {
    name: "EditarAtividade",
    component: EditarAtividade,
    path: "/atividades/editar/:id"
  },
]