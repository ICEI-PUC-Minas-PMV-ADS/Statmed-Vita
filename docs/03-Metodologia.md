# Metodologia

Nessa seção, serão apresentadas as ferramentas utilizadas para o desenvolvimento do projeto, tanto para o gerenciamento dos códigos e artefatos produzidos no decorrer de seu desenvolvimento, quanto na organização da equipe em cada uma das tarefas propostas em reunião.

O grupo se organizará a partir da metodologia ágil Kanban, que permite a melhor gestão de tarefas e conduz cada atividade por meio de um fluxo de trabalho estabelecido, de maneira visual ideal para nossa equipe com menos colaboradores.

## Relação de Ambientes de Trabalho

| Plataforma  | Finalidade |
| ------------ | ------------ |
| [Github](https://desktop.github.com/ "Github")  | Respositório, Metodologia & Documentação   |
| [Discord](https://discord.com/ "Discord"), [Whatsapp](https://www.whatsapp.com/?lang=pt_BR "Whatsapp")  | Reuniões, planejamento do grupo |
| [Figma](https://www.figma.com/ "Figma") | Desenho de tela (Wireframing), Diagramas & UI/UX |


## Controle de Versão

A ferramenta de controle de versão adotada no projeto foi o
[Git](https://git-scm.com/), sendo que o [Github](https://github.com)
foi utilizado para hospedagem do repositório.

O projeto segue a seguinte convenção para o nome de branches:

- `main`: versão estável com testes extensos do software
- `teste`: versão em testes do software com correções de bugs dinamicamente
- `dev`: versão de desenvolvimento com altas chances de bug

Quanto à gerência de issues, o projeto adota a seguinte convenção para
etiquetas:

- `documentação`: melhorias ou acréscimos à documentação
- `bug`: uma funcionalidade encontra-se com problemas
- `melhoria`: uma funcionalidade precisa ser melhorada
- `novaFuncionalidade`: uma nova funcionalidade precisa ser introduzida
- `invalido`: adição errada ou não documentada

Optamos por 3 branchs para versionamento do projeto sendo a `dev` direcionada ao desenvolvimento em versão alpha, ou seja, commits para desenvolvimento sem o debate em grupo e sem testes. No branch `teste` direcionamos a versão beta, ou seja, no processo de testes e debate e com altas chances de bug. Ápos passar por essas duas etapas direcionados com merges para o branch `main`, quando estável e testado.

## Gerenciamento de Projeto


### Divisão de Papéis

#### A equipe se dividiu seguindo o formato proposto pela metodologia Kanban.

- Equipe de marketing
  - Lizane Rodrigues

- Equipe de testes
   - Jardel Maldonado
   - Felipe Coelho
 
- Equipe de desenvolvimento: 
   - Guilherme Cruz
   - Gabrielly Andrade
   - Vinicius Soares
     
- UI/UX:
   - Diego Gomes
   
### Processo

O planejamento foi feito utilizando o Github Projects, com o sistema automatizado Kanban. Nele temos o direcionamento de tarefas já integrado ao issues do github e quando criados são automaticamente adicionados a coluna `Backlog` e somente ápos a análise inicial de nosso flow master são transferidos a coluna `Não Iniciado` que por sua vez é reservada para tarefas que já estão em nosso conhecimento porém sem um plano de começar iniciado. Ao iniciarmos o desenvolvimento da tarefa ela é direcionada a coluna `Em progresso`, se for caso que necessite teste ápos completa ela é transferida a coluna `Em Teste`, e quando concluidos são automaticamente direcionados a coluna `Completado` que por sua vez são arquivados àpos 2 semanas.
Em cada issue é adicionado os responsáveis pela tarefa, além de comentários sobre o desenvolvimento para o grupo discutir durante as reuniões entre os períodos de desenvolvimento.
![image](https://user-images.githubusercontent.com/98277143/231900780-8bdf73c6-a44f-4463-a12c-287f7494c039.png)

Separamos também cada etapa do nosso projeto pelas milestones, permitindo maior organização, senso de urgência e entrega além da localização de tarefas passadas (issues) que se encontram arquivadas para melhor gerenciamento de possíveis correções futuras.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t5-statmed/assets/98277143/a0760c56-8cf7-4fab-90c7-e0d63a09ad00)

### Ferramentas

As ferramentas empregadas no projeto são:

| Ferramenta  | Finalidade |
| ------------ | ------------ |
| [Visual Studio Code](https://code.visualstudio.com/ "Visual Studio Code") | Editor de código |
| [Github Desktop](https://desktop.github.com/ "Github Desktop")  | Controle de branchs, merges e commit com integração ao Visual Studio Code   |
| [Github Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects "Github Projects")  | Utilizado para a gestão do projeto e tarefas no modelo Kanban |
| [Discord](https://discord.com/ "Discord")  | Reuniões, planejamento do grupo |
| [Figma](https://www.figma.com/ "Figma") | Desenho de tela (Wireframing) e Diagramas |

O **Visual Studio Code** foi escolhido porque ele possui integração com o **Github Desktop** permitindo visualizar e intercalar o desenvolvimento rapidamente entre os branchs e visualizar commits relevantes.
O **Github Projects** foi escolhido como gerenciamento de projeto devido a integração dos issues direto no repositório.
**Discord** foi escolhido como o canal de comunicação devido a sua facilidade para reunião, compartilhamento de tela e arquivamento de conversas e canais com nosso  brainstorming.
**Figma** foi escolhido como ferramenta única para criação de wireframes e diagramas, devido a sua facilidade de trabalho em conjunto e acervo de ferramentas e plugins.
