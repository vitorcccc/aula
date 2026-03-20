/**
 * Interface que representa um usuário administrador do sistema
 * @property id - Identificador único do administrador
 * @property nome - Nome completo do administrador
 * @property email - Email do administrador
 * @property nivelAcesso - Nível de permissão do administrador
 *   - total: Acesso completo ao sistema
 *   - operacional: Acesso apenas a operações do dia a dia
 *   - financeiro: Acesso apenas a relatórios financeiros
 */
export interface UsuarioAdmin {
  id: number;
  nome: string;
  email: string;
  nivelAcesso: "total" | "operacional" | "financeiro";
}
