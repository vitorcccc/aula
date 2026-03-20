/**
 * Tipo que representa uma especialidade médica
 * @property id - Identificador único da especialidade
 * @property nome - Nome da especialidade (ex: "Cardiologia")
 * @property descricao - Descrição opcional da especialidade
 */
export type Especialidade = {
  id: number;
  nome: string;
  descricao?: string;
};
