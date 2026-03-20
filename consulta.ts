import { Medico } from "./medico";
import { Paciente } from "../types/paciente";
import { StatusConsulta } from "../types/statusConsulta";

/**
 * Interface que representa uma consulta médica
 * @property id - Identificador único da consulta
 * @property medico - Médico responsável pela consulta
 * @property paciente - Paciente da consulta
 * @property data - Data e hora da consulta
 * @property valor - Valor da consulta em reais
 * @property status - Status atual da consulta
 * @property observacoes - Observações opcionais sobre a consulta
 */
export interface Consulta {
  id: number;
  medico: Medico;
  paciente: Paciente;
  data: Date;
  valor: number;
  status: StatusConsulta;
  observacoes?: string;
}
