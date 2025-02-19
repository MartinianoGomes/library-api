# Padrão de Commits

Para manter um histórico de commits organizado e consistente, siga o padrão de commits abaixo. Este padrão é baseado no [Conventional Commits](https://www.conventionalcommits.org/).

## Estrutura do Commit

Cada commit deve seguir a estrutura abaixo:


### Tipos de Commits

- `feat`: Adição de uma nova funcionalidade.
- `fix`: Correção de um bug.
- `docs`: Alterações na documentação.
- `style`: Alterações de formatação, que não afetam o código (espaços em branco, formatação, ponto e vírgula, etc).
- `refactor`: Alteração de código que não corrige um bug nem adiciona uma funcionalidade.
- `perf`: Alterações de código que melhoram o desempenho.
- `test`: Adição ou correção de testes.
- `build`: Alterações que afetam o sistema de build ou dependências externas (escopos de exemplo: gulp, broccoli, npm).
- `ci`: Alterações em arquivos e scripts de configuração de CI (exemplo: Travis, Circle, BrowserStack, SauceLabs).
- `chore`: Outras mudanças que não modificam arquivos de origem ou de teste.
- `revert`: Reversão de um commit anterior.

### Exemplos de Commits

- feat: adicionar endpoint para criação de livros
- fix: corrigir erro de conexão com o banco de dados
- docs: atualizar README com instruções de instalação
- style: corrigir formatação do código
- refactor: melhorar lógica de validação de dados
- perf: otimizar consulta ao banco de dados
- test: adicionar testes para o controlador de livros
- build: atualizar dependências do npm
- ci: configurar integração contínua com Travis
- chore: remover arquivos desnecessários
- revert: reverter commit abc123