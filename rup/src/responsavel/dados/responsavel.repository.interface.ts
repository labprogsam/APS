import { Responsavel } from "../negocio";

export interface IResponsavelRepository {
  verResponsavelPorId(): Promise<Responsavel>,
  verResponsavelPorCPF(): Promise<Responsavel>,
}
