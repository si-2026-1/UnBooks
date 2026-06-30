# Épicos

---

# EP01 — Autenticação e Perfil

Envolve login, cadastro de preferências e manutenção do perfil.

## EP01.1 – Autenticação

**Histórias de usuário**

* Como estudante, quero fazer login com minha matrícula institucional para acessar o sistema;
* Como usuário, quero recuperar minha senha para voltar a acessar minha conta;
* Como usuário, quero encerrar minha sessão para proteger meus dados.

**Critérios de Aceitação**

* O sistema deve permitir login e logout de usuários cadastrados;
* O sistema deve impedir o acesso com credenciais inválidas;
* O sistema deve informar erros de autenticação ao usuário.

---

## EP01.2 – Onboarding de Preferências

**Histórias de usuário**

* Como novo usuário, quero responder um questionário de interesses para receber recomendações personalizadas;
* Como usuário, quero selecionar meus gêneros favoritos para melhorar as sugestões de livros;
* Como usuário, quero informar meus autores favoritos para receber recomendações mais relevantes;
* Como usuário, quero informar meu curso para indicações de leituras futuras.

**Critérios de Aceitação**

* O usuário deve conseguir informar suas preferências de leitura;
* As preferências devem ser armazenadas no perfil;
* O usuário deve poder alterar as preferências posteriormente.
  
---

## EP01.3 – Gerenciamento de Perfil

**Histórias de usuário**

* Como usuário, quero editar minhas informações pessoais para manter meu perfil atualizado;
* Como usuário, quero adicionar uma foto de perfil para personalizar minha conta;
* Como usuário, quero visualizar minhas preferências cadastradas;
* Como usuário, quero editar meu questionário de interesses para atualizar as recomendações personalizadas.

**Critérios de Aceitação**

* O usuário deve conseguir visualizar e editar suas informações;
* As alterações realizadas devem ser salvas pelo sistema;
* O perfil atualizado deve ser exibido imediatamente ao usuário.

---

# EP02 — Leituras e Avaliações

Envolve registros de leituras, avaliações e privacidade.

## EP02.1 – Registro de Leitura

**Histórias de usuário**

* Como usuário, quero registrar um livro lido para manter meu histórico;
* Como usuário, quero informar a data em que terminei uma leitura;
* Como usuário, quero marcar um livro como "estou lendo".

**Critérios de Aceitação**

* O usuário deve conseguir adicionar livros ao seu histórico;
* O sistema deve permitir alterar o status da leitura;
* O histórico deve permanecer salvo entre sessões.

---

## EP02.2 – Avaliações

**Histórias de usuário**

* Como usuário, quero dar notas aos materiais lidos;
* Como usuário, quero escrever uma resenha sobre um livro;
* Como usuário, quero editar minhas avaliações.

**Critérios de Aceitação**

* O usuário deve conseguir avaliar livros e editar suas avaliações;
* As avaliações devem ficar associadas ao livro e ao usuário;
* O sistema deve exibir as avaliações publicadas.

---

## EP02.3 – Privacidade

**Histórias de usuário**

* Como usuário, quero definir se minhas leituras serão públicas ou privadas;
* Como usuário, quero escolher quem pode ver minhas avaliações;
* Como usuário, quero ocultar determinadas leituras do meu perfil.

**Critérios de Aceitação** 

* O usuário deve conseguir definir a visibilidade de suas leituras;
* O sistema deve respeitar as configurações de privacidade escolhidas;
* Usuários não autorizados não devem acessar conteúdos privados.

---

## EP02.4 – Listas de Livros

**Histórias de usuário**

* Como usuário, quero criar uma lista de desejos;
* Como usuário, quero adicionar livros aos favoritos;
* Como usuário, quero organizar livros em coleções;
* Como usuário, quero criar uma lista de leituras do semestre.

**Critérios de Aceitação**

* O usuário deve conseguir criar e gerenciar listas de livros;
* O sistema deve permitir adicionar e remover livros das listas;
* O sistema não deve permitir duplicidade de livros na mesma lista.

---

# EP03 — Sistema de Recomendação

Envolve recomendações baseadas na movimentação do usuário e comunidade.

## EP03.1 – Recomendações Personalizadas

**Histórias de usuário**

* Como usuário, quero receber recomendações com base nas minhas preferências;
* Como usuário, quero receber recomendações baseadas nas minhas matérias do semestre;
* Como usuário, quero receber recomendações baseadas nos meus livros lidos;
* Como usuário, quero receber recomendações atualizadas conforme meu histórico cresce.

**Critérios de Aceitação**

* As recomendações devem considerar as preferências e o histórico do usuário;
* O sistema deve atualizar as recomendações periodicamente;
* O usuário deve conseguir visualizar as recomendações recebidas.

---

## EP03.2 – Recomendações por Similaridade

**Histórias de usuário**

* Como usuário, quero receber livros semelhantes aos que gostei;
* Como usuário, quero descobrir autores parecidos com meus favoritos;
* Como usuário, quero receber livros de assuntos semelhantes aos meus livros lidos.

**Critérios de Aceitação**

* O sistema deve identificar livros ou usuários semelhantes;
* O sistema deve utilizar essas informações para gerar sugestões;
* As recomendações devem ser exibidas ao usuário.
  
---

## EP03.3 – Feedback das Recomendações

**Histórias de usuário**

* Como usuário, quero informar se gostei de uma recomendação;
* Como usuário, quero ocultar recomendações que não me interessam;
* Como usuário, quero entender por que determinado livro foi recomendado.

**Critérios de Aceitação**

* O usuário deve conseguir informar se gostou ou não de uma recomendação;
* O sistema deve armazenar o feedback recebido;
* O feedback deve influenciar recomendações futuras.

---

## EP03.4 – Recomendações por Tendências 

**Histórias de usuário**

* Como usuário, quero receber recomendações de livros populares na universidade;
* Como usuário, quero ver os livros mais bem avaliados;
* Como usuário, quero receber recomendações dos livros populares das matérias do meu curso.

**Critérios de Aceitação**

* O sistema deve identificar livros populares na comunidade;
* O usuário deve conseguir visualizar as tendências de leitura;
* As informações devem ser atualizadas periodicamente.

---

# EP04 — Busca e Filtragem

Envolve busca e pesquisa no catálogo disponível.

## EP04.1 – Busca Simples

**Histórias de usuário**

* Como usuário, quero buscar livros pelo título;
* Como usuário, quero buscar livros pelo nome do autor;
* Como usuário, quero buscar livros pelo ISBN.

**Critérios de Aceitação**

* O sistema deve permitir pesquisas por diferentes termos;
* Os resultados encontrados devem ser exibidos ao usuário;
* O sistema deve informar quando não houver resultados.

---

## EP04.2 – Filtros Avançados

**Histórias de usuário**

* Como usuário, quero filtrar livros por assunto;
* Como usuário, quero filtrar livros por idioma;
* Como usuário, quero filtrar livros por nível de profundidade;
* Como usuário, quero combinar vários filtros.

**Critérios de Aceitação**

* O usuário deve conseguir aplicar um ou mais filtros;
* O sistema deve atualizar os resultados conforme os filtros aplicados;
* Os filtros selecionados devem permanecer visíveis.

---

## EP04.3 – Visualização do Livro

**Histórias de usuário**

* Como usuário, quero visualizar a sinopse de um livro;
* Como usuário, quero ver informações bibliográficas;
* Como usuário, quero visualizar livros relacionados.

**Critérios de Aceitação**

* O sistema deve exibir informações detalhadas do livro;
* O usuário deve conseguir visualizar dados relevantes da obra;
* As informações apresentadas devem estar atualizadas.

---

## EP04.4 – Disponibilidade na Biblioteca

**Histórias de usuário**

* Como usuário, quero verificar se um livro está disponível na BCE;
* Como usuário, quero verificar se um livro está disponível na BCE digital;

**Critérios de Aceitação**

* O sistema deve informar a disponibilidade do livro;
* As informações de disponibilidade devem estar atualizadas.

---

# EP05 — Funcionalidades Sociais

Envolve as funcionalidades para interação na comunidade.

## EP05.1 – Rede de Amigos

**Histórias de usuário**

* Como usuário, quero me conectar com amigos;
* Como usuário, quero seguir outros leitores;
* Como usuário, quero deixar de seguir um usuário;
* Como usuário, quero visualizar minha lista de seguidores.

**Critérios de Aceitação**

* O usuário deve conseguir seguir e deixar de seguir outros usuários;
* O sistema deve exibir seguidores e usuários seguidos;
* As alterações devem ser refletidas imediatamente.
  
---

## EP05.2 – Compartilhamento

**Histórias de usuário**

* Como usuário, quero visualizar as leituras públicas de amigos;
* Como usuário, quero compartilhar minhas avaliações;
* Como usuário, quero recomendar um livro a outro usuário.

**Critérios de Aceitação**

* O usuário deve conseguir compartilhar informações de leitura;
* O sistema deve exibir os conteúdos compartilhados;
* As configurações de privacidade devem ser respeitadas.
  
---

## EP05.3 – Interações

**Histórias de usuário**

* Como usuário, quero curtir avaliações de outros leitores;
* Como usuário, quero comentar em avaliações;
* Como usuário, quero responder comentários.

**Critérios de Aceitação**

* O usuário deve conseguir curtir e comentar conteúdos;
* O sistema deve registrar as interações realizadas;
* O usuário deve visualizar as interações existentes.

---

## EP05.4 – Comunidade

**Histórias de usuário**

* Como usuário, quero visualizar os livros mais populares da minha lista de amigos;
* Como usuário, quero ver rankings de leitores;
* Como usuário, quero visualizar tendências de leitura da comunidade.

**Critérios de Aceitação**

* O sistema deve apresentar conteúdos populares e tendências;
* O usuário deve conseguir visualizar rankings e recomendações da comunidade;
* Os dados exibidos devem ser atualizados periodicamente.

---

## EP06 – Notificações

**Histórias de usuário**

* Como usuário, quero receber notificações de novos seguidores;
* Como usuário, quero receber notificações de recomendações;
* Como usuário, quero receber lembretes de leitura.

**Critérios de Aceitação**

* O sistema deve gerar notificações para eventos relevantes;
* O usuário deve conseguir visualizar e gerenciar as notificações;
* O sistema deve identificar quais notificações foram lidas.

---

## EP07 – Estatísticas de Leitura

**Histórias de usuário**

* Como usuário, quero acompanhar quantidade de livros lidos;
* Como usuário, quero visualizar os gêneros mais lidos;
* Como usuário, quero acompanhar metas de leitura.

**Critérios de Aceitação**

* O sistema deve gerar estatísticas automaticamente;
* O usuário deve conseguir visualizar seus indicadores de leitura;
* Os dados devem ser atualizados após novas atividades.

--- 

## EP08 – Administração

**Histórias de usuário**

* Como administrador, quero gerenciar usuários;
* Como administrador, quero moderar comentários e avaliações;
* Como administrador, quero atualizar catálogo de livros.

**Critérios de Aceitação**

* O sistema deve restringir as funcionalidades administrativas a administradores;
* O sistema deve permitir gerenciar usuários e conteúdos;
* As ações administrativas devem ser registradas.
  
---
