# SISTEMA DE MARCAÇÃO DE CONSULTAS MÉDICAS

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Console Application](https://img.shields.io/badge/Console_Application-FF8800?style=for-the-badge&logo=windows-terminal&logoColor=white)

## INTEGRANTES DO GRUPO

| Nome | RM |
|------|-----|
| **Vitor Couto Victorino** | 554965 |


---

## SOBRE O PROJETO

Este é um **Sistema de Marcação de Consultas Médicas** desenvolvido em TypeScript puro como parte das atividades da disciplina. O sistema permite o gerenciamento completo de consultas, incluindo criação, confirmação, cancelamento e relatórios financeiros.

### Funcionalidades Implementadas

- Cadastro de médicos e pacientes
- Criação de consultas com status "agendada"
- Confirmação de consultas
- Cancelamento de consultas (com validação)
- Marcação de consultas como realizadas
- Listagem por status (agendada/confirmada/cancelada/realizada)
- Filtro por período e consultas futuras
- Cálculo de faturamento total e médio
- Relatório completo de faturamento
- Validação de regras de negócio
- Formatação de dados no padrão brasileiro

---

## LINK DO REPOSITÓRIO

**Repositório principal:** [https://github.com/isadorameneghetti/sistema-consultas](https://github.com/isadorameneghetti/sistema-consultas)

**Branch do projeto:** `main`

---

## CONCEITOS DE TYPESCRIPT UTILIZADOS

Este projeto foi desenvolvido aplicando todos os conceitos abordados em aula:

| Conceito | Descrição |
|----------|-----------|
| **Type Aliases** | Definição de tipos personalizados (Especialidade, Paciente, StatusConsulta) |
| **Interfaces** | Contratos para objetos complexos (Medico, Consulta, UsuarioAdmin) |
| **Union Types** | Status da consulta com valores pré-definidos |
| **Optional Properties** | Campos opcionais (descrição, telefone, observações) |
| **Tipagem explícita** | Todos os parâmetros e retornos tipados |
| **Arrow Functions** | Funções concisas para operações em arrays |
| **Métodos de Array** | filter, map, reduce, forEach |
| **Spread Operator** | Criação de novos objetos sem mutação |
| **Módulos (import/export)** | Organização do código em arquivos separados |
| **Validação de dados** | Regras de negócio implementadas |
| **Templates strings** | Formatação de saída no console |

---

## COMO EXECUTAR O PROJETO

### Pré-requisitos
- [Node.js](https://nodejs.org/) (18.x ou superior)
- [TypeScript](https://www.typescriptlang.org/) (instalado globalmente ou via npx)
- Visual Studio Code / Qualquer editor de código
- Terminal ou Prompt de Comando

### Passos para executar

1. **Clone o repositório**
```bash
git clone https://github.com/isadorameneghetti/sistema-consultas
```

2. **Acesse a pasta do projeto**
```bash
cd sistema-consultas
```

3. **Instale as dependências (caso necessário)**
```bash
npm install -g typescript
# ou
npm install typescript --save-dev
```

4. **Compile o projeto**
```bash
tsc index.ts
# ou
npx tsc index.ts
```

5. **Execute o programa**
```bash
node index.js
```

## EXEMPLO DE EXECUÇÃO

```text
SISTEMA DE CONSULTAS MEDICAS
==================================================

CRIANDO CONSULTAS DE EXEMPLO...

[OK] Consulta #1 criada e confirmada
[OK] Consulta #2 criada e realizada
[OK] Consulta #3 criada e cancelada
[OK] Consulta #4 criada (agendada)
[OK] Consulta #5 criada e realizada
[OK] Consulta #6 criada e confirmada
[OK] Consulta #7 criada (agendada)

Total de consultas criadas: 7
```

### Exemplo de consulta formatada

```text
==================================================
CONSULTA #1
==================================================
Médico: Dr. Roberto Silva
CRM: CRM12345
Especialidade: Cardiologia
Paciente: Carlos Andrade
CPF: 123.456.789-00
Data: 11/03/2026 14:30
Valor: R$ 350,00
Status: CONFIRMADA
Observações: Paciente com historico de hipertensão
==================================================
```

### Exemplo de relatório de faturamento

```text
==================================================
RELATORIO DE FATURAMENTO
==================================================
Consultas realizadas: 2
Faturamento total: R$ 630.00
Valor medio por consulta: R$ 315.00
==================================================
```

### Validação de regras de negócio

```text
TESTE DE VALIDACAO - Cancelar consulta realizada:
ERRO: Não é possível cancelar a consulta #2 pois já foi realizada.
```

## ESTRUTURA DO PROJETO

```text
sistema-consultas/
│
├── index.ts                 # Arquivo principal do sistema
├── types/
│   ├── especialidade.ts     # Type Especialidade
│   ├── paciente.ts          # Type Paciente
│   └── statusConsulta.ts    # Type StatusConsulta (union)
├── interfaces/
│   ├── medico.ts            # Interface Medico
│   ├── consulta.ts          # Interface Consulta
│   └── usuarioAdmin.ts      # Interface UsuarioAdmin
└── README.md                # Documentação
```

## REGRAS DE NEGÓCIO IMPLEMENTADAS

| Regra | Implementação |
|-------|---------------|
| ❌ Consultas realizadas não podem ser canceladas | Função `cancelarConsulta` valida status |
| ❌ Consultas canceladas não podem ser realizadas | Função `realizarConsulta` valida status |
| ✅ Só entram no faturamento consultas realizadas | Filtro no `calcularFaturamento` |
| ✅ Médicos podem estar ativos/inativos | Propriedade `ativo` na interface Medico |

## DISCIPLINA

**Mobile Development e IoT**

Professor: Hete Caetano dos Santos

FACULDADE FIAP - 2026

## LICENÇA

Este projeto foi desenvolvido para fins educacionais. Todos os direitos reservados aos autores.
