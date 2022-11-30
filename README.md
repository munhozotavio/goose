# goose
Front-end repository for the UniRadar project.

<img src="https://github.com/munhozotavio/goose/blob/main/img/goosehat.png" width="250" heigh="400"/>

<hr />

# Universidade Estadual de Campinas
# Instituto da Computação

## Projeto desenvolvido para a disciplina: MC855-2s2022

#### Professor e Assistente

| Nome                     | Email                   |
| ------------------------ | ------------------------|
| Professora Juliana Borin | jufborin@unicamp.br     |
| Assistente Paulo Kussler | paulo.kussler@gmail.com |


#### Equipe

<table>
 <tr>
  <th>Nome</th>
  <th>RA</th>
  <th>Email</th>
  <th>Git</th>
 </tr>
 <tr>
  <td>Otávio Silveira Munhoz</td>
  <td>204280</td>
  <td>otaviosilmunhoz@gmail.com/o204280@dac.unicamp.br</td>
  <td>/munhozotavio</td>
 </tr>
 
 <tr>
  <td>Régis Gabetta de Souza</td>
  <td>223965</td>
  <td>regis_gabetta@hotmail.com/r223965@dac.unicamp.br</td>
  <td>/Regis-Gabetta</td>
 </tr>
 
 <tr>
  <td>Augusto S. Rodrigues</td>
  <td>213368</td>
  <td>a213368@dac.unicamp.br</td>
  <td>/AugustoSRodrigues</td>
 </tr>
 
 <tr>
  <td>Dorival Alves Da Silva Júnior</td>
  <td>215076</td>
  <td>d215076@dac.unicamp.br</td>
  <td>/Dorivis</td>
 </tr>
 
  <tr>
  <td>Thiago Dall'Oca/td>
  <td>206341</td>
  <td>tdalloca@gmail.com/t206341@dac.unicamp.br</td>
  <td>/tiagodalloca</td>
 </tr>
 
</table>

</hr>

### Descrição do projeto:
- Repositório do front-end do projeto uniradar. O objetivo do projeto é criar uma forma de exibir a localização dos veículos da Unicamp, desta forma, o sistema deve permitir aos usuários saber a localização atual de um veículo cadastrado.
- O fluxo pensado para o projeto é:
  - Criar um usuário;
  - Ativar o usuário;
  - Acessar o sistema;
  - Cadastrar um carro; 
  - Verificar a localização do carro através do dashboard (Na forma de um caminho);
  - Permitir exibir localizações passadas do veículo; 

#### Tecnologias, ferramentas, dependências, versões. etc. 
- Para o desenvolvimento do front-end foi utilizado o ReactJs
- As dependências necessários são: react-bootstrap, react-router-dom, react-helmet, google-map-react e o iconify
- Como é utilizada a API do google maps é necessário ter uma chave api do google maps

#### Como colocar no ar, como testar, etc
- Para usar é necessário rodar em conjunto com o backend, que se encontra na url <a href="https://github.com/munhozotavio/duck"> /munhozotavio/duck </a>
- Para instalar as dependências use <code>npm i</code>
- Depois de instaladas, usar o comando <code>npm run start</code>
- O sistema será iniciado na url: localhost:3000
- Para acessar o sistema siga os passos do repositório <a href="https://github.com/munhozotavio/duck"> /munhozotavio/duck </a>
- O fluxo de uso deve ser:
  - Logar
  - Criar um carro
  - Checar se o veículo aparece na lista de veículos na rota /cars
  - Popular a tabela mocked_localization (Através do mock ou manualmente)
  - Acessar o dashboard
  - Escolher o carro
  - Checar a localização
