/**
 * Union Type que define todos os status possíveis para uma consulta
 * - agendada: Consulta criada mas ainda não confirmada
 * - confirmada: Consulta confirmada pelo paciente
 * - cancelada: Consulta cancelada (não pode ser realizada)
 * - realizada: Consulta que já ocorreu
 */
export type StatusConsulta =
  | "agendada"
  | "confirmada"
  | "cancelada"
  | "realizada";
