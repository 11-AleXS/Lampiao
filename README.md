# 🌵 Jua

Para quem entra no mundo do desenvolvimento, ou até mesmo já tem alguma experiência; muitas vezes você se encontra trabalhando com várias linguagens, frameworks, sistemas de bancos de dados... E acaba por atropelar conceitos e/ou conteúdos mais antigos, tendo que revê-los quando vai utilizá-los novamente. 
<br/><br/>
A ideia por trás do Jua será de fornecer uma série de guias _na palma da sua mão_, facilitando essa revisão, para que você não perca tempo procurando em outros lugares. Eles englobarão:
- Como instalar e configurar sistemas operacionais (Windows, Unix)
- Como executar máquinas virtuais na Oracle VM Virtual Box
- Como instalar e configurar editores de código (Visual Studio Code)
- Como instalar pacotes (yarn, npm, pip)
- Como instalar progamas e serviços (git, flutter SDK, xampp...)
- Como organizar projetos e repositórios de conteúdos variados
- Boas práticas no ato de progamar
- Progamação Orientada a Objeto
- Desenvolvimento de jogos (Godot Engine)
- e muito mais

## ⚙️ Como ter acesso?
O Jua será uma aplicação desktop, com base em Electron e React. Um arquivo executável (.exe) ainda não está disponível, pois ainda estou desenvolvendo, para depois criar os guias. Espere por futuras atualizações...

## ⬇️ Instale e Execute
Caso você queria ajudar no desenvolvimento ou copiar meu código para uso pessoal em outro projeto seu, siga as dicas:
<br/><br/>
Com o pacote [npm](https://www.npmjs.com/get-npm) instalado _e o [git](https://git-scm.com/downloads) é claro_, clone o repositório, abra a pasta e instale as dependências, executando num terminal:

```
git clone https://github.com/alessfm/jua.git 
```
> Se você clonar de outro jeito,ignore o comando acima <br/>

```
cd jua 
npm i 
```
> `npm i` pode demorar um pouco dependendo do seu computador <br/><br/>

Fez o que eu pedi? Ótimo, agora você pode executar os seguintes comandos:

```
npm start  
```
> Roda uma demo local, ela se atualiza com base nas mudanças no código _a não ser se você mudar os arquivos de lugar_
```
npm test
```
> _Eu nunca usei, mas ele faz testes no progama_
```
npm run watch
```
> Faz uma nova pasta build <br/><br/>

**Nota:** Se o Jua não se modificar de acordo com as mudanças após você ter executado `npm start`, então execute `npm run watch` e então `npm start` e veja se deu certo, caso não, repita o processo até funcionar. É um bug frequente, que eu ainda não descobri como arrumar.

## 🤝Encontrou um bug? Está faltando algo?

Sinta-se à vontade para **criar uma issue** com título e descrição [aqui](https://github.com/alessfm/jua/issues) . Se você já tiver uma solução para o problema, **eu adoraria ver sua [pull request](https://github.com/alessfm/jua/pulls)**!

## 📘 Licença

Licença MIT 2021 - [Alessandro Figueiredo Malheiro](https://github.com/alessfm/). Por favor olhe [LICENSE](LICENSE) para mais detalhes.
