# Especificações do Projeto

A definição exata do problema e os pontos mais relevantes a serem tratados neste projeto foi consolidada com a participação dos usuários em um trabalho de imersão feita pelos membros da equipe a partir da observação dos usuários em seu local natural e por meio de entrevistas. Os detalhes levantados nesse processo foram consolidados na forma de personas e histórias de usuários.
## Personas

As personas levantadas durante o processo de entendimento do problema são apresentadas a seguir:

<img style="margin-top: 40px;" align="left" width="240px" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t5-statmed/assets/70419372/444d6feb-6163-43b4-9438-68621b5b363c">

## Aldair Barbosa Silva

##### Profissão: Bombeiro Hidráulico
##### Idade: 46 anos
Aldair Barbosa tem uma rotina super agitada e corrida graças ao sucesso do seu trabalho em sua cidade. Ninguém avalia um cano melhor que ele, porém, com o passar do tempo os problemas de saúde vão aparecendo e ele precisou redobrar o cuidado, como a sua rotina é super corrida um aplicativo no seu celular para ver as consultas agendadas e agendar as mesmas facilitariam muito sua rotina de acompanhamentos médicos.
#

<img style="margin-top: 40px;" align="left" width="240px" src="https://user-images.githubusercontent.com/98277143/226173982-ea43126c-4f02-42e7-bb60-07e432637880.png">

## André Fernandes  

##### Profissão: Recepcionista
##### Idade: 25 anos
Recepcionista no hospital público e universitário. Possui sua rotina focada no seu trabalho e principalmente na sua faculdade no período noturno, vem sofrendo frequentemente com a dificuldade no atendimento dos pacientes do hospital devido ao método utilizado pelo hospital, gerando assim correrias e muitas vezes tumultos no hospital. 
#

<img style="margin-top: 40px;" align="left" width="240px" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t5-statmed/assets/70419372/fcd1eacd-b96e-475c-86c4-2352e225deba">

## Regina Almeida

##### Profissão: Proprietária de foodtruck
##### Idade: 39 anos
É dona de um food truck de sucesso. Devido à sua agenda agitada, ela mal tem tempo para cuidar da saúde. Um dia, ela sentiu fortes dores abdominais e decide usar o Statmed Vida. Com o aplicativo, ela agenda consultas online, recebe lembretes de consultas próximas e acessa suas consultas agendadas, permitindo que mantenha seu negócio enquanto cuida de sua saúde de forma conveniente e eficiente.
#

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Aldair (Paciente)| Agendar consultas e ver horários disponíveis | Me programar melhor|
|Aldair (Paciente)| Desmarcar consultas sem necessidade de ligar| Em caso de imprevisto, conseguir desmarcar com facilidade as consultas agendadas |
|Regina (Paciente)| Ver minhas consultas agendadas | Manter minha rotina atualizada |
|Regina (Paciente)| Informar possíveis atrasos | Não perder meu horário marcado devido a encaixe para outras pacientes |
|Recepcionista (André)| Uma confirmação de presença mais ágil  |  Diminuir o tempo que leva para confirmar as consultas |
|Recepcionista (André)| Saber se houve desistência da consulta |Poder disponibilizar o horário para novas consultas ou encaixes. |

## Modelagem do Processo de Negócio 

### Análise da Situação Atual

Possíveis problemas existentes na gestão hospitalar incluem falta de integração de dados, dificuldade na monitorização de recursos, falhas na coordenação de equipes e demora no atendimento. O Statmed busca resolver esses desafios ao centralizar informações, otimizar alocação de recursos, facilitar a comunicação entre equipes e agilizar processos de atendimento. No módulo mobile do Statmed ele funcionará como um facilitador do agendamento de consultas do paciente onde ele comunicará com o sistema do hospital (módulo desktop) para agendar ou desmarcar as mesmas.

### Descrição Geral da Proposta

Statmed é uma solução desenvolvida para atender às necessidades do Serviço de Arquivo Médico e Estatística (SAME) oferecendo recursos para registro de pacientes e atendimentos desde a recepção até o médico, prontuário e prescrição médica, além de ferramentas de estatística e arquivamento.

### Processo 1 – Marcar Consulta

Abaixo descreve o processo de marcação de consulta que o cliente irá efetuar através do APP e como o sistema irá receber essa ação. 


![Diagrama sem nome-Marcar consulta drawio (3)](https://github.com/ICEI-PUC-Minas-PMV-ADS/Statmed-Vita/assets/114541642/6fdf3ccf-5c39-412a-9843-10c1e67340fd)


### Processo 2 – Desmarcar Consulta

Abaixo descreve o processo de desmarcar consulta que o cliente irá efetuar através do APP e como o sistema irá receber essa ação.

![Diagrama sem nome-Desmarcar consulta drawio](https://github.com/ICEI-PUC-Minas-PMV-ADS/Statmed-Vita/assets/114541642/18730033-0fa7-4206-b2f6-fd989ab79f9d)


### Processo 3 – Consulta Marcada

Abaixo descreve o processo de consulta marcada que o cliente irá efetuar através do APP e como o sistema irá receber essa ação.

![Diagrama sem nome-Visualizar Consulta Marcada drawio](https://github.com/ICEI-PUC-Minas-PMV-ADS/Statmed-Vita/assets/114541642/187ee0ad-3aa7-4c36-b294-3fb5c116467a)



### Processo 4 – Confirmar Consulta

Abaixo descreve o processo de confirmar consulta que o cliente irá efetuar através do APP e como o sistema irá receber essa ação.

![Diagrama sem nome-Confirmar Consulta drawio](https://github.com/ICEI-PUC-Minas-PMV-ADS/Statmed-Vita/assets/114541642/ffab9fb9-ffee-4e29-9519-aef8a6e1d776)



### Processo 5 – Aviso de Atraso

Abaixo descreve o processo de aviso de atraso que o cliente irá efetuar através do APP e como o sistema irá receber essa ação.

![Diagrama sem nome-Aviso de Atraso drawio](https://github.com/ICEI-PUC-Minas-PMV-ADS/Statmed-Vita/assets/114541642/19e7dc56-4ade-4dad-a338-c00bf4845ada)



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
|RF-004| Permitir que o usuário avise o atraso | ALTA |
|RF-005| Permitir que o recepcionista confirme as consultas | ALTA |
|RF-006| Permitir que o recepcionista disponibilize data para as consultas | ALTA |
|RF-007| Permitir que o recepcionista confirme o cancelamento das consultas | ALTA |
|RF-008| Permitir cadastro e acesso de usuários | ALTA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | ALTA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s | BAIXA | 
|RNF-003| O aplicativo deve apresentar uma Splash Screen para indicar carregamento | BAIXA |

### Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |

### Diagrama de Casos de Uso

![Capturar](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t5-statmed/assets/70419372/8c9f916d-a5f2-433d-b90d-cb4a0fd08e1b)


# Matriz de Rastreabilidade

A matriz de rastreabilidade é uma ferramenta usada para facilitar a visualização dos relacionamento entre requisitos e outros artefatos ou objetos, permitindo a rastreabilidade entre os requisitos e os objetivos de negócio. 

A matriz deve contemplar todos os elementos relevantes que fazem parte do sistema, conforme a figura meramente ilustrativa apresentada a seguir.

![Matriz de Rastreabilidade](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t5-statmed/assets/70419372/5a880d40-e29d-4e46-9f67-3302c0123f96)


# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

O gráfico de Gantt ou diagrama de Gantt também é uma ferramenta visual utilizada para controlar e gerenciar o cronograma de atividades de um projeto. Com ele, é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.

![GANTT](https://github.com/ICEI-PUC-Minas-PMV-ADS/Statmed-Vita/assets/70419372/9b9feb28-9d4e-4df1-b7c6-3565a33980b7)


## Gerenciamento de Equipe

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t5-statmed/assets/98277143/a7bf1fcd-1729-4f99-b0aa-9fa647192779)

## Gestão de Orçamento

O processo de determinar o orçamento do projeto é uma tarefa que depende, além dos produtos (saídas) dos processos anteriores do gerenciamento de custos, também de produtos oferecidos por outros processos de gerenciamento, como o escopo e o tempo.

![Tabela Orçamento](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t5-statmed/assets/70419372/a2205c4e-c364-4d60-b408-988611670c60)
