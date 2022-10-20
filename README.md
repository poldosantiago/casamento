#rodar na pasta do projeto
browser-sync start --server --files . --host --port 3000 --startPath index.html

#indo para a pasta do projeto ...
cd ..\..\Projetos\casamento\public

------------------

#subir o servidor json para os dados
json-server --port 5000 convidados.json

#indo para a pasta do json ...
cd ..\..\Projetos\casamento\json


----------------------

#Escopo

Qual o nome que está no seu convite?
Quantos adultos irão comparecer?<br> (incluindo você)
E quantas crianças irão junto com você?
Como Thaisa e Rafael podem entrar em contato?


Eba! Sua presença foi confirmada!
Agora é hora de presentear Thaisa e Rafael nesse momento tão especial!


#fontes
- regex valida nome: https://regexlib.com/REDetails.aspx?regexp_id=143
- json-server: https://github.com/typicode/json-server
- regx placa carro - https://ricardo.coelho.eti.br/regex-mercosul/
- regex formatar nome - https://pt.stackoverflow.com/questions/278442/regex-para-deixar-primeira-letra-de-nome-completo-mai%C3%BAsculo-mesmo-com-caractere
- botao 5: https://getcssscan.com/css-buttons-examples

- regx nome completo: https://www.regextester.com/111328