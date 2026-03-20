/**
 * Tipo que representa um paciente do sistema
 * @property id - Identificador único do paciente
 * @property nome - Nome completo do paciente
 * @property cpf - CPF do paciente (formato livre)
 * @property email - Email do paciente
 * @property telefone - Telefone opcional para contato
 */
export type Paciente = {
  id: number;
  nome: string;
  cpf: string;
  email: string;
  telefone?: string;
};
