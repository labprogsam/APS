import Home from "../pages/Home/Home"
import AuthRedirect from './AuthRedirect'
import VerAtividades from "../pages/ver-atividades"

export const PublicRoutes = [
  {
    name: "Home",
    component: Home,
    path: "/home",
  },
  {
    name: "AuthRedirect",
    component: AuthRedirect,
    path: "/"
  },
]

export const PrivateRoutes = [
  {
    name: "AuthRedirect",
    component: AuthRedirect,
    path: "/"
  },
  {
    name: "VerAtividade",
    component: VerAtividades,
    path: "/ver-atividades"
  },
  // {
  //   name: "CriarAtividade",
  //   component: CriarAtividades,
  //   path: "/criar-atividade"
  // },
]