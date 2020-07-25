# Nollob

![](https://blog-assets.freshworks.com/freshdesk/wp-content/uploads/2019/02/06180403/Voice_bot.gif)

### Bot para salvar datas de aniversario com mensagens personalizadas

dados de niver dos membros do discord:

- U-REQ => `$ping`
- B-RES => 'pong ' + ping.status

- U-REQ => `$nv-data` '1 de maio' -> {userName: str, nvDate: Date}
- B-RES => {msg: 'Que top!, sua data está salva'}

- U-REQ => `$ls-nv-mes`
- B-RES => [{userName: str, nvDate: Date}]

- U-REQ => `$ls-nv-mes` 1 -> {month: int}
- B-RES => [{userName: str, nvDate: Date}]

- U-REQ => `$help`
- B-RES => 'Olé Esses são os meus comandos: '

- U-REQ => `$hello`
- B-RES => 'Olá, seja bem vindo ao nosso server!''

- B-RES => regra -> 'chegando na data o bote lançará este comando automaticamente às 00:00:00' -> {userName: str, msg: 'Parabens meu caro sobrevivente, saúde e paz em tua vida'}

Notes:

- new Date(data).toISOString algo assim mano a syntax, só vc dar um ctrl + space e ele segure
