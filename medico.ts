import { Especialidade } from "../types/especialidade";

/**
 * Interface que representa um médico no sistema
 * @property id - Identificador único do médico
 * @property nome - Nome completo do médico
 * @property crm - Número do registro no CRM
 * @property especialidade - Especialidade do médico (tipo Especialidade)
 * @property ativo - Indica se o médico está ativo no sistema
 */
export interface Medico {
  id: number;
  nome: string;
  crm: string;
  especialidade: Especialidade;
  ativo: boolean;
}
