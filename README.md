# Challenge - First Year - Web-Front: Alerta Leitos

## Resumo
O Alerta Leitos é uma aplicação web que visa otimizar o fluxo de pacientes nos leitos, permitindo uma comunicação ágil entre as equipes de limpeza, manutenção e enfermagem, melhorando a eficiência hospitalar e proporcionando uma melhor experiência para os pacientes.

## Tecnologias Utilizadas
- **HTML5**: Estrutura da página.
- **CSS3**: Estilização e layout responsivo.
- **Bootstrap**: Estilização e layout responsivo.
- **JavaScript**: Funcionalidades interativas .

## Membros do Grupo
- Jonathan Henrique RM:561139
- Henrique Celso RM: 559687
- Davis Cardoso RM: 560723
- Lucas Cortizo RM: 559734
- Alan de Castro RM: 560152

# Clone o repositório
git clone https://github.com/Jhow17/Challenge-web-front.git

# Como Rodar 
Siga os passos abaixo para configurar e rodar a aplicação completa no seu ambiente local.
1. Clone o Repositório
Abra seu terminal e clone o projeto:

git clone [https://github.com/Jhow17/Challenge-web-front.git](https://github.com/Jhow17/Challenge-web-front.git)
cd Challenge-web-front

2. Configuração do Backend (Servidor)
Navegue até a pasta do servidor: cd server
Instale as dependências:
npm install
Configure as Variáveis de Ambiente:

3. Crie um arquivo chamado .env na raiz da pasta /server.
Copie e cole o conteúdo abaixo, substituindo os placeholders pelos seus dados reais:
# String de conexão do seu banco de dados MongoDB Atlas
DATABASE_URL="mongodb+srv://seu_usuario:sua_senha@seu_cluster.mongodb.net/nome_do_banco?retryWrites=true&w=majority"
# Credenciais da API do WhatsApp
WHATSAPP_API_URL="[https://graph.facebook.com/v19.0/SEU_ID_NUMERO_TELEFONE/messages](https://graph.facebook.com/v19.0/SEU_ID_NUMERO_TELEFONE/messages)"
WHATSAPP_TOKEN="SEU_TOKEN_DE_ACESSO_AQUI"
WHATSAPP_DESTINATION_NUMBER="NUMERO_DESTINO_COM_CODIGO_PAIS_EX_55119..."
WHATSAPP_TEMPLATE_NAME="notificacao_alerta_leitos"

4. Inicie o servidor:
O comando --watch reinicia o servidor automaticamente quando você altera um arquivo.
node --watch server.js


