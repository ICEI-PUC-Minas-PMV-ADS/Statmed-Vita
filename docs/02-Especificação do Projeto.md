# Especificações do Projeto

A definição exata do problema e os pontos mais relevantes a serem tratados neste projeto foi consolidada com a participação dos usuários em um trabalho de imersão feita pelos membros da equipe a partir da observação dos usuários em seu local natural e por meio de entrevistas. Os detalhes levantados nesse processo foram consolidados na forma de personas e histórias de usuários.
## Personas

## Aldair Barbosa Silva

<img style="margin-top: 40px;" align="left" width="240px" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t5-statmed/assets/70419372/444d6feb-6163-43b4-9438-68621b5b363c">

## Profissão: Bombeiro Hidráulico
### Idade: 46 anos
Aldair Barbosa tem uma rotina super agitada e corrida graças ao sucesso do seu trabalho em sua cidade. Ninguém avalia um cano melhor que ele, porém, com o passar do tempo os problemas de saúde vão aparecendo e ele precisou redobrar o cuidado, como a sua rotina é super corrida um aplicativo no seu celular para ver as consultas agendadas e agendar as mesmas facilitariam muito sua rotina de acompanhamentos médicos.


## André Fernandes

<img style="margin-top: 40px;" align="left" width="240px" src="https://user-images.githubusercontent.com/98277143/226173982-ea43126c-4f02-42e7-bb60-07e432637880.png">
  

##### Profissão: Recepcionista
##### Idade: 25 anos
Recepcionista no hospital público e universitário. Possui sua rotina focada no seu trabalho e principalmente na sua faculdade no período noturno, vem sofrendo frequentemente com a dificuldade no atendimento dos pacientes do hospital devido ao método utilizado pelo hospital, gerando assim correrias e muitas vezes tumultos no hospital.


#

#
#

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Aldair(Paciente)    | Agendar consultas de uma forma mais agíl                | Cuidar da minha saúde                  |
|Aldair(Paciente)    | Desmarcar consultas de uma forma mais agíl              | Caso ocorra algum imprevisto, conseguir desmarcar com facilidade as consultas agendadas |
|Aldair(Paciente)    | Ver as consultas agendadas         | Manter minha rotina atualizada e não perder as consultas |
|  Recepcionista (André) | Que a confirmação de consulta seja mais agíl  |  Diminuir o tempo que leva para confirmar as consultas |

## Modelagem do Processo de Negócio 

### Análise da Situação Atual

Possíveis problemas existentes na gestão hospitalar incluem falta de integração de dados, dificuldade na monitorização de recursos, falhas na coordenação de equipes e demora no atendimento. O Statmed busca resolver esses desafios ao centralizar informações, otimizar alocação de recursos, facilitar a comunicação entre equipes e agilizar processos de atendimento. No módulo mobile do Statmed ele funcionará como um facilitador do agendamento de consultas do paciente onde ele comunicará com o sistema do hospital (módulo desktop) para agendar ou desmarcar as mesmas.

### Descrição Geral da Proposta

Statmed é uma solução desenvolvida para atender às necessidades do Serviço de Arquivo Médico e Estatística (SAME) oferecendo recursos para registro de pacientes e atendimentos desde a recepção até o médico, prontuário e prescrição médica, além de ferramentas de estatística e arquivamento.

### Processo 1 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 1. Em seguida, apresente o modelo do processo 1, descrito no padrão BPMN. 

![Processo 1](img/02-bpmn-proc1.png)

### Processo 2 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 2. Em seguida, apresente o modelo do processo 2, descrito no padrão BPMN.

![Processo 2](img/02-bpmn-proc2.png)

## Indicadores de Desempenho

Apresente aqui os principais indicadores de desempenho e algumas metas para o processo. Atenção: as informações necessárias para gerar os indicadores devem estar contempladas no diagrama de classe. Colocar no mínimo 5 indicadores. 

Usar o seguinte modelo: 

![Indicadores de Desempenho](img/02-indic-desemp.png)
Obs.: todas as informações para gerar os indicadores devem estar no diagrama de classe a ser apresentado a posteriori. 

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário marque consultas | ALTA | 
|RF-002| Permitir que o usuário desmarque consultas | ALTA |
|RF-003| Permitir que o usuário veja as consultas marcadas | ALTA |
|RF-004| Permitir que o recepcionista confirme as consultas | ALTA |
|RF-005| Permitir que o recepcionista disponibilize data para as consultas | ALTA |
|RF-006| Permitir que o recepcionista confirme o cancelamento das consultas | ALTA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | ALTA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s | BAIXA | 

### Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |

### Diagrama de Casos de Uso

![Statmed mobile](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t5-statmed/assets/70419372/9be02237-a1af-4de1-84da-7b3862e94a59)


# Matriz de Rastreabilidade

A matriz de rastreabilidade é uma ferramenta usada para facilitar a visualização dos relacionamento entre requisitos e outros artefatos ou objetos, permitindo a rastreabilidade entre os requisitos e os objetivos de negócio. 

A matriz deve contemplar todos os elementos relevantes que fazem parte do sistema, conforme a figura meramente ilustrativa apresentada a seguir.

![Exemplo de matriz de rastreabilidade](img/02-matriz-rastreabilidade.png)

> **Links Úteis**:
> - [Artigo Engenharia de Software 13 - Rastreabilidade](https://www.devmedia.com.br/artigo-engenharia-de-software-13-rastreabilidade/12822/)
> - [Verificação da rastreabilidade de requisitos usando a integração do IBM Rational RequisitePro e do IBM ClearQuest Test Manager](https://developer.ibm.com/br/tutorials/requirementstraceabilityverificationusingrrpandcctm/)
> - [IBM Engineering Lifecycle Optimization – Publishing](https://www.ibm.com/br-pt/products/engineering-lifecycle-optimization/publishing/)


# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

Com diagramas bem organizados que permitem gerenciar o tempo nos projetos, o gerente de projetos agenda e coordena tarefas dentro de um projeto para estimar o tempo necessário de conclusão.

![Diagrama de rede simplificado notação francesa (método francês)](img/02-diagrama-rede-simplificado.png)

O gráfico de Gantt ou diagrama de Gantt também é uma ferramenta visual utilizada para controlar e gerenciar o cronograma de atividades de um projeto. Com ele, é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.

![Gráfico de Gantt](img/02-grafico-gantt.png)

## Gerenciamento de Equipe

O gerenciamento adequado de tarefas contribuirá para que o projeto alcance altos níveis de produtividade. Por isso, é fundamental que ocorra a gestão de tarefas e de pessoas, de modo que os times envolvidos no projeto possam ser facilmente gerenciados. 

![Simple Project Timeline](img/02-project-timeline.png)

## Gestão de Orçamento

O processo de determinar o orçamento do projeto é uma tarefa que depende, além dos produtos (saídas) dos processos anteriores do gerenciamento de custos, também de produtos oferecidos por outros processos de gerenciamento, como o escopo e o tempo.

![Orçamento](img/02-orcamento.png)
