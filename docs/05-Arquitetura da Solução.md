# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Abaixo o modelo representa a forma que o aplicativo irá realizar a comunicação com a aplicação utilizando o protocolo HTTP e tendo como retorno json. E sua aplicação estará hospedada em um servidor que estará rodando o docker.

![Arquitetura da Solução](https://github.com/ICEI-PUC-Minas-PMV-ADS/Statmed-Vita/assets/114541642/dce755aa-5350-44d0-a0c2-c5062f632292)


## Diagrama de Classes

O diagrama de classes ilustra graficamente como será a estrutura do software, e como cada uma das classes da sua estrutura estarão interligadas. Essas classes servem de modelo para materializar os objetos que executarão na memória.

![Capturar](https://github.com/ICEI-PUC-Minas-PMV-ADS/Statmed-Vita/assets/70419372/231d4191-21fa-476a-bd22-3b4870f98042)



## Modelo ER

O Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa.

![modelo er](https://github.com/ICEI-PUC-Minas-PMV-ADS/Statmed-Vita/assets/70419372/013a46b4-9e60-4f87-84bb-bdcfa86f1394)



## Esquema Relacional

O Esquema Relacional corresponde à representação dos dados em tabelas juntamente com as restrições de integridade e chave primária.
 
As referências abaixo irão auxiliá-lo na geração do artefato “Esquema Relacional”.

> - [Criando um modelo relacional - Documentação da IBM](https://www.ibm.com/docs/pt-br/cognos-analytics/10.2.2?topic=designer-creating-relational-model)

## Modelo Físico

Entregar um arquivo banco.sql contendo os scripts de criação das tabelas do banco de dados. Este arquivo deverá ser incluído dentro da pasta src\bd.

Script do Banco de Dados:
CREATE SCHEMA IF NOT EXISTS `statmed` DEFAULT CHARACTER SET utf8 ;
USE `statmed` ;

-- -----------------------------------------------------
-- Table `statmed`.`Usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `statmed`.`Usuario` (
  `cpf` VARCHAR(14) NOT NULL,
  `nome` VARCHAR(50) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `telefone` VARCHAR(45) NOT NULL,
  `Endereco` VARCHAR(45) NOT NULL,
  `dataNasc` DATE NOT NULL,
  `Senha` VARCHAR(45) NOT NULL,
  UNIQUE INDEX `cpf_UNIQUE` (`cpf` ASC) ,
  PRIMARY KEY (`cpf`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `statmed`.`Consulta`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `statmed`.`Consulta` (
  `IdConsulta` VARCHAR(14) NOT NULL,
  `Usuario_cpf` VARCHAR(14) NOT NULL,
  `Usuario_nome` VARCHAR(50) NOT NULL,
  `Medico` VARCHAR(45) NOT NULL,
  `Especialidade` VARCHAR(45) NOT NULL,
  `Data` DATETIME NOT NULL,
  `Convenio` VARCHAR(45) NOT NULL,
  UNIQUE INDEX `cpf_UNIQUE` (`IdConsulta` ASC),
  PRIMARY KEY (`IdConsulta`, `Usuario_cpf`),
  INDEX `fk_Consulta_Usuario_idx` (`Usuario_cpf` ASC) ,
  CONSTRAINT `fk_Consulta_Usuario`
    FOREIGN KEY (`Usuario_cpf`)
    REFERENCES `statmed`.`Usuario` (`cpf`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


## Tecnologias Utilizadas

Descreva aqui qual(is) tecnologias você vai usar para resolver o seu problema, ou seja, implementar a sua solução. Liste todas as tecnologias envolvidas, linguagens a serem utilizadas, serviços web, frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.

Apresente também uma figura explicando como as tecnologias estão relacionadas ou como uma interação do usuário com o sistema vai ser conduzida, por onde ela passa até retornar uma resposta ao usuário.

## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)

## Qualidade de Software

Conceituar qualidade de fato é uma tarefa complexa, mas ela pode ser vista como um método gerencial que através de procedimentos disseminados por toda a organização, busca garantir um produto final que satisfaça às expectativas dos stakeholders.

No contexto de desenvolvimento de software, qualidade pode ser entendida como um conjunto de características a serem satisfeitas, de modo que o produto de software atenda às necessidades de seus usuários. Entretanto, tal nível de satisfação nem sempre é alcançado de forma espontânea, devendo ser continuamente construído. Assim, a qualidade do produto depende fortemente do seu respectivo processo de desenvolvimento.

A norma internacional ISO/IEC 25010, que é uma atualização da ISO/IEC 9126, define oito características e 30 subcaracterísticas de qualidade para produtos de software.
Com base nessas características e nas respectivas sub-características, identifique as sub-características que sua equipe utilizará como base para nortear o desenvolvimento do projeto de software considerando-se alguns aspectos simples de qualidade. Justifique as subcaracterísticas escolhidas pelo time e elenque as métricas que permitirão a equipe avaliar os objetos de interesse.

> **Links Úteis**:
>
> - [ISO/IEC 25010:2011 - Systems and software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE) — System and software quality models](https://www.iso.org/standard/35733.html/)
> - [Análise sobre a ISO 9126 – NBR 13596](https://www.tiespecialistas.com.br/analise-sobre-iso-9126-nbr-13596/)
> - [Qualidade de Software - Engenharia de Software 29](https://www.devmedia.com.br/qualidade-de-software-engenharia-de-software-29/18209/)
