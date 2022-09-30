# Asaas - Postman Collection

Adoramos poupar o tempo de todo mundo. Por isso, temos collections no Postman com todas as nossas APIs.

[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/18837025-34183c23-2b1e-4cf1-a3c5-db62dae4dd69?action=collection%2Ffork&collection-url=entityId%3D18837025-34183c23-2b1e-4cf1-a3c5-db62dae4dd69%26entityType%3Dcollection%26workspaceId%3D1d640920-b245-4f6d-87f8-a0dccda2f7f3)

## Atualizar informações no repositório do Postman

Para atualizar manualmente a collection no repositório oficial do Asaas no Postman siga os passos abaixo:<br>

1. Crie um arquivo .env na raiz deste projeto contendo [sua chave de API](https://postman.co/settings/me/api-keys):
```
API_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

```

2. Rode o comando `npm install` para instalar as dependências.

3. Quando for liberar para produção rode o comando `node deployPostmanCollection.js`.

4. Acesse [nosso repositório oficial no postman](https://www.postman.com/asaasdev/workspace/asaas/collection/18837025-34183c23-2b1e-4cf1-a3c5-db62dae4dd69) e confira se o deploy ocorreu com sucesso, pode demorar alguns minutos até que as mudanças sejam visíveis.