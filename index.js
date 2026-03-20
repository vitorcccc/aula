/**
 * SISTEMA DE MARCAÇÃO DE CONSULTAS MÉDICAS
 * Projeto desenvolvido em TypeScript puro
 *
 * Módulo principal que implementa todas as funcionalidades do sistema
 *
 * @author Sistema de Consultas
 * @version 1.0
 * @date 2026
 */
// ============================================================================
// SEÇÃO 1: DADOS BASE
// ============================================================================
/**
 * Criação das especialidades médicas disponíveis no sistema
 */
const cardiologia = {
    id: 1,
    nome: "Cardiologia",
    descricao: "Tratamento de doenças do coração"
};
const ortopedia = {
    id: 2,
    nome: "Ortopedia",
    descricao: "Tratamento de ossos e articulações",
};
const pediatria = {
    id: 3,
    nome: "Pediatria",
    descricao: "Saúde da criança e do adolescente"
};
const dermatologia = {
    id: 4,
    nome: "Dermatologia",
    descricao: "Tratamento da pele",
};
const ginecologia = {
    id: 5,
    nome: "Ginecologia",
    descricao: "Saúde da mulher",
};
/**
 * Cadastro dos médicos
 * Cada médico é associado a uma especialidade
 */
const medico1 = {
    id: 1,
    nome: "Dr. Roberto Silva",
    crm: "CRM12345",
    especialidade: cardiologia,
    ativo: true,
};
const medico2 = {
    id: 2,
    nome: "Dra. Ana Paula Costa",
    crm: "CRM54321",
    especialidade: ortopedia,
    ativo: true,
};
const medico3 = {
    id: 3,
    nome: "Dr. João Mendes",
    crm: "CRM98765",
    especialidade: pediatria,
    ativo: true,
};
const medico4 = {
    id: 4,
    nome: "Dra. Carla Souza",
    crm: "CRM45678",
    especialidade: dermatologia,
    ativo: true,
};
const medico5 = {
    id: 5,
    nome: "Dr. Marcos Oliveira",
    crm: "CRM78901",
    especialidade: ginecologia,
    ativo: false, // Médico inativo
};
/**
 * Cadastro dos pacientes
 */
const paciente1 = {
    id: 1,
    nome: "Carlos Andrade",
    cpf: "123.456.789-00",
    email: "carlos@email.com",
};
const paciente2 = {
    id: 2,
    nome: "Maria Silva",
    cpf: "987.654.321-00",
    email: "maria@email.com",
    telefone: "(11) 98765-4321",
};
const paciente3 = {
    id: 3,
    nome: "Pedro Santos",
    cpf: "456.789.123-00",
    email: "pedro@email.com",
};
const paciente4 = {
    id: 4,
    nome: "Ana Beatriz Costa",
    cpf: "789.123.456-00",
    email: "ana@email.com",
    telefone: "(11) 91234-5678",
};
const paciente5 = {
    id: 5,
    nome: "Lucas Ferreira",
    cpf: "321.654.987-00",
    email: "lucas@email.com",
};
// ============================================================================
// SEÇÃO 2: FUNÇÕES DE CRUD DE CONSULTAS
// ============================================================================
/**
 * Cria uma nova consulta com status "agendada"
 *
 * @param id - Identificador único da consulta
 * @param medico - Médico responsável
 * @param paciente - Paciente da consulta
 * @param data - Data e hora da consulta
 * @param valor - Valor da consulta
 * @param observacoes - Observações opcionais
 * @returns Objeto Consulta com status "agendada"
 */
function criarConsulta(id, medico, paciente, data, valor, observacoes) {
    return {
        id,
        medico,
        paciente,
        data,
        valor,
        status: "agendada",
        observacoes,
    };
}
/**
 * Confirma uma consulta, alterando seu status para "confirmada"
 *
 * @param consulta - Consulta a ser confirmada
 * @returns Nova consulta com status atualizado
 */
function confirmarConsulta(consulta) {
    return Object.assign(Object.assign({}, consulta), { status: "confirmada" });
}
/**
 * Cancela uma consulta, alterando seu status para "cancelada"
 * Regra de negócio: Consultas realizadas não podem ser canceladas
 *
 * @param consulta - Consulta a ser cancelada
 * @returns Nova consulta com status "cancelada" ou null se não for possível cancelar
 */
function cancelarConsulta(consulta) {
    // Verifica se a consulta já foi realizada
    if (consulta.status === "realizada") {
        console.log(`ERRO: Não é possível cancelar a consulta #${consulta.id} pois já foi realizada.`);
        return null;
    }
    return Object.assign(Object.assign({}, consulta), { status: "cancelada" });
}
/**
 * Marca uma consulta como realizada, alterando seu status para "realizada"
 * Regra de negócio: Consultas canceladas não podem ser realizadas
 *
 * @param consulta - Consulta a ser marcada como realizada
 * @returns Nova consulta com status "realizada" ou null se não for possível
 */
function realizarConsulta(consulta) {
    // Verifica se a consulta foi cancelada
    if (consulta.status === "cancelada") {
        console.log(`ERRO: Não é possível realizar a consulta #${consulta.id} pois foi cancelada.`);
        return null;
    }
    return Object.assign(Object.assign({}, consulta), { status: "realizada" });
}
/**
 * Formata uma consulta para exibição no console
 * Inclui todos os dados formatados no padrão brasileiro
 *
 * @param consulta - Consulta a ser exibida
 * @returns String formatada com todos os dados da consulta
 */
function exibirConsulta(consulta) {
    // Formata o valor monetário (R$)
    const valorFormatado = consulta.valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });
    // Formata a data e hora
    const dataFormatada = consulta.data.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });
    // Constrói a string de exibição
    let resultado = "\n";
    resultado += "=".repeat(50) + "\n";
    resultado += `CONSULTA #${consulta.id}\n`;
    resultado += "=".repeat(50) + "\n";
    resultado += `Médico: ${consulta.medico.nome}\n`;
    resultado += `CRM: ${consulta.medico.crm}\n`;
    resultado += `Especialidade: ${consulta.medico.especialidade.nome}\n`;
    resultado += `Paciente: ${consulta.paciente.nome}\n`;
    resultado += `CPF: ${consulta.paciente.cpf}\n`;
    resultado += `Data: ${dataFormatada}\n`;
    resultado += `Valor: ${valorFormatado}\n`;
    resultado += `Status: ${consulta.status.toUpperCase()}\n`;
    if (consulta.observacoes) {
        resultado += `Observações: ${consulta.observacoes}\n`;
    }
    resultado += "=".repeat(50) + "\n";
    return resultado;
}
// ============================================================================
// SEÇÃO 3: FUNÇÕES DE RELATÓRIO E FILTRAGEM
// ============================================================================
/**
 * Filtra consultas por status
 *
 * @param consultas - Array de consultas a ser filtrado
 * @param status - Status desejado
 * @returns Array com apenas as consultas que possuem o status especificado
 */
function listarConsultasPorStatus(consultas, status) {
    return consultas.filter((consulta) => consulta.status === status);
}
/**
 * Filtra apenas as consultas futuras (data >= hoje)
 *
 * @param consultas - Array de consultas a ser filtrado
 * @returns Array com consultas marcadas para hoje ou datas futuras
 */
function listarConsultasFuturas(consultas) {
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0); // Zera o horário para comparar apenas datas
    return consultas.filter((consulta) => consulta.data >= hoje);
}
/**
 * Filtra consultas por período
 *
 * @param consultas - Array de consultas a ser filtrado
 * @param dataInicio - Data inicial do período
 * @param dataFim - Data final do período
 * @returns Consultas com data entre dataInicio e dataFim
 */
function listarConsultasPorPeriodo(consultas, dataInicio, dataFim) {
    return consultas.filter((consulta) => consulta.data >= dataInicio && consulta.data <= dataFim);
}
/**
 * Calcula o faturamento total baseado nas consultas realizadas
 *
 * @param consultas - Array de consultas
 * @returns Soma dos valores das consultas com status "realizada"
 */
function calcularFaturamento(consultas) {
    // Filtra apenas consultas realizadas e soma seus valores
    return consultas
        .filter((consulta) => consulta.status === "realizada")
        .reduce((total, consulta) => total + consulta.valor, 0);
}
/**
 * Gera um relatório completo de faturamento
 *
 * @param consultas - Array de consultas
 * @returns String formatada com estatísticas de faturamento
 */
function gerarRelatorioFaturamento(consultas) {
    const consultasRealizadas = consultas.filter(c => c.status === "realizada");
    const faturamentoTotal = calcularFaturamento(consultas);
    const quantidadeRealizadas = consultasRealizadas.length;
    // Calcula o valor médio (evita divisão por zero)
    const valorMedio = quantidadeRealizadas > 0
        ? faturamentoTotal / quantidadeRealizadas
        : 0;
    let relatorio = "\n";
    relatorio += "=".repeat(50) + "\n";
    relatorio += "RELATORIO DE FATURAMENTO\n";
    relatorio += "=".repeat(50) + "\n";
    relatorio += `Consultas realizadas: ${quantidadeRealizadas}\n`;
    relatorio += `Faturamento total: R$ ${faturamentoTotal.toFixed(2)}\n`;
    relatorio += `Valor medio por consulta: R$ ${valorMedio.toFixed(2)}\n`;
    relatorio += "=".repeat(50) + "\n";
    return relatorio;
}
// ============================================================================
// SEÇÃO 4: EXECUÇÃO PRINCIPAL
// ============================================================================
console.log("\nSISTEMA DE CONSULTAS MEDICAS");
console.log("=".repeat(50));
/**
 * Array tipado para armazenar todas as consultas do sistema
 */
const consultas = [];
/**
 * Configuração de datas para os exemplos
 */
const hoje = new Date();
const amanha = new Date(hoje);
amanha.setDate(hoje.getDate() + 1);
const ontem = new Date(hoje);
ontem.setDate(hoje.getDate() - 1);
const semanaPassada = new Date(hoje);
semanaPassada.setDate(hoje.getDate() - 7);
const proximaSemana = new Date(hoje);
proximaSemana.setDate(hoje.getDate() + 7);
const mesSeguinte = new Date(hoje);
mesSeguinte.setMonth(hoje.getMonth() + 1);
/**
 * CRIAÇÃO DAS CONSULTAS DE EXEMPLO
 * Criamos 7 consultas com diferentes status e datas
 */
console.log("\nCRIANDO CONSULTAS DE EXEMPLO...\n");
// Consulta 1: Confirmada para amanhã
const consulta1 = criarConsulta(1, medico1, paciente1, amanha, 350, "Paciente com historico de hipertensao");
consultas.push(confirmarConsulta(consulta1));
console.log(`[OK] Consulta #1 criada e confirmada`);
// Consulta 2: Realizada ontem
const consulta2 = criarConsulta(2, medico2, paciente2, ontem, 280);
consultas.push(realizarConsulta(consulta2));
console.log(`[OK] Consulta #2 criada e realizada`);
// Consulta 3: Cancelada
const consulta3 = criarConsulta(3, medico3, paciente3, proximaSemana, 200);
const consultaCancelada = cancelarConsulta(consulta3);
if (consultaCancelada)
    consultas.push(consultaCancelada);
console.log(`[OK] Consulta #3 criada e cancelada`);
// Consulta 4: Agendada
const consulta4 = criarConsulta(4, medico4, paciente4, mesSeguinte, 400, "Primeira consulta");
consultas.push(consulta4);
console.log(`[OK] Consulta #4 criada (agendada)`);
// Consulta 5: Realizada semana passada
const consulta5 = criarConsulta(5, medico1, paciente5, semanaPassada, 350);
consultas.push(realizarConsulta(consulta5));
console.log(`[OK] Consulta #5 criada e realizada`);
// Consulta 6: Confirmada
const consulta6 = criarConsulta(6, medico5, paciente1, proximaSemana, 290);
consultas.push(confirmarConsulta(consulta6));
console.log(`[OK] Consulta #6 criada e confirmada`);
// Consulta 7: Agendada
const consulta7 = criarConsulta(7, medico2, paciente3, mesSeguinte, 310, "Retorno");
consultas.push(consulta7);
console.log(`[OK] Consulta #7 criada (agendada)`);
console.log(`\nTotal de consultas criadas: ${consultas.length}`);
// ============================================================================
// SEÇÃO 5: TESTES DAS FUNCIONALIDADES
// ============================================================================
console.log("\n" + "=".repeat(50));
console.log("TESTANDO FUNCIONALIDADES");
console.log("=".repeat(50));
// Teste 1: Exibir consulta específica
console.log("\nEXIBINDO CONSULTA #1");
console.log(exibirConsulta(consultas[0]));
// Teste 2: Listar consultas por status
console.log("\nCONSULTAS REALIZADAS:");
const realizadas = listarConsultasPorStatus(consultas, "realizada");
realizadas.forEach(c => {
    console.log(`  • Consulta #${c.id} - ${c.paciente.nome} - ${c.data.toLocaleDateString("pt-BR")}`);
});
// Teste 3: Listar consultas futuras
console.log("\nCONSULTAS FUTURAS:");
const futuras = listarConsultasFuturas(consultas);
futuras.forEach(c => {
    console.log(`  • Consulta #${c.id} - ${c.paciente.nome} - Status: ${c.status}`);
});
// Teste 4: Calcular faturamento
console.log("\nFATURAMENTO:");
console.log(`  • Total de consultas realizadas: ${realizadas.length}`);
console.log(`  • Faturamento total: R$ ${calcularFaturamento(consultas).toFixed(2)}`);
// Teste 5: Gerar relatório completo
console.log(gerarRelatorioFaturamento(consultas));
// Teste 6: Tentar cancelar consulta realizada (deve falhar)
console.log("\nTESTE DE VALIDACAO - Cancelar consulta realizada:");
const tentativaCancelamento = cancelarConsulta(consultas[1]); // consulta2 é realizada
// Teste 7: Consultas por período
console.log("\nCONSULTAS DA ULTIMA SEMANA:");
const ultimaSemana = listarConsultasPorPeriodo(consultas, semanaPassada, hoje);
ultimaSemana.forEach(c => {
    console.log(`  • Consulta #${c.id} - ${c.paciente.nome} - ${c.data.toLocaleDateString("pt-BR")}`);
});
// ============================================================================
// SEÇÃO 6: RESUMO FINAL
// ============================================================================
console.log("\n" + "=".repeat(50));
console.log("RESUMO DO SISTEMA");
console.log("=".repeat(50));
console.log(`\nTotal de consultas: ${consultas.length}`);
console.log(`Por status:`);
console.log(`  • Agendadas: ${listarConsultasPorStatus(consultas, "agendada").length}`);
console.log(`  • Confirmadas: ${listarConsultasPorStatus(consultas, "confirmada").length}`);
console.log(`  • Realizadas: ${realizadas.length}`);
console.log(`  • Canceladas: ${listarConsultasPorStatus(consultas, "cancelada").length}`);
console.log("\n" + "=".repeat(50));
console.log("SISTEMA EXECUTADO COM SUCESSO!");
console.log("=".repeat(50) + "\n");
export {};
