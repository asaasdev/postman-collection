# postman-collection
Para atualizar a collection em nosso repositório oficial do postman siga os passos abaixo:<br>
OBS.: O deploy já ocorre automaticamente via github actions, o processo aqui descrito só é necessário caso ocorra falha no processo automático.

1. Crie um arquivo .env na raiz deste projeto contendo [sua chave de API](https://postman.co/settings/me/api-keys):
```
API_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

```

2. Rode o comando `npm install`ou `yarn install` para instalar as dependências.

3. Quando for liberar para produção rode o comando `node deployPostmanCollection.js`.

4. Acesse [nosso repositório oficial no postman](https://www.postman.com/asaasdev/workspace/asaas/collection/18837025-34183c23-2b1e-4cf1-a3c5-db62dae4dd69) e confira se o deploy ocorreu com sucesso, pode demorar alguns minutos até que as mudanças sejam visíveis.
