# Payservica : Payement Gateway System

Payservicia est passerelle de payement qui vous permet de faire tout type
de paiement comme par exemple des factures , des articles achetes en ligne.
Il est facile a integrer dans votre application pour le payement.

**Lien vers payservicia** [link](https://payservicia.herokuapp.com/){:target="_blank"} 
**Lien vers la documentation en ligne** [link](https://payservicia.herokuapp.com/docs){:target="_blank"} 

# Documentation de l'API REST de payservicia
API REST Payservicia est une API qui a été mise en place pour pouvoir faciliter et simuler les systemes de payements d'articles en ligne. Elle est facile à utiliser et integrer dans votre systeme .

Payservicia API est divisé en 4 API

1.  API d'authentification
2.  API de gestion des comptes utilisateurs
3.  API de gestion des clients et des transactions

Pour pouvoir demarrer dans l'utilisation de l'api il faut se creer un compte puis s'authentifie

Tous les requettes sont envoyés au format **JSON**

# Endpoints Disponibles

Endpoint de base de tous les routes de l'API est : 
[link](https://api-truggle-payement.herokuapp.com/v1.0){:target="_blank"} 

| Methods | Endpoint   | Description                                                                         | 
|---------|------------|-------------------------------------------------------------------------------------| 
| GET     |  /auth     | Elle concernant toutes les requettes d'authentification y compris l'inscription     | 
| GET     | /user      | Elle concernant toutes les requettes de la gestion de l'utilisateurs                | 
| GET     | /customers | Elle concernant toutes les requettes de la gestion des clients et des payements     | 

# Authentification

Payservicia utilise une authentification basé sur le jwt qui genere un token aleatoire disponible pendant 24h .

#### Endpoint d'authentification : `auth/login`

#### Method HTTP: `POST`

#### Requette: `POST https://api-truggle-payement.herokuapp.com/v1.0/auth/login`

#### Parametres

Email et password

#### Object

                    {
                      "email" : email,
                      "password" : password
                    }


#### Reponse

                 {
                  "code": 200,
                  "status": "success",
                  "message": "User successfully connected ",
                  "datas": {
                    "token": ACCESS\_TOKEN
                  }
                }



| Code    | Code de la reponse envoyé par le serveur il peut etre 200 -  404 - 400                    | 
|---------|-------------------------------------------------------------------------------------------| 
| Message | Message envoyé par le serveur pour la requette                                            | 
| Status  | Status de la requette                                                                     | 
| Données | Object contenue le token                                                                  | 
| Token   | Clé d'authentification                                                                    | 


# Creation de compte

Vous pouvez creer un compte en tant que marchand

#### Endpoint de creation de compte : `auth/signup`

#### Method HTTP: `POST`

#### Requette: `POST https://api-truggle-payement.herokuapp.com/v1.0/auth/signup`

#### Parametres

Email , password et mot de passe de confirmation

#### Object

                    {
                      "email" : email,
                      "password" : password,
                      "password\_confirmation" : "password\_confirmation"
                    }


#### Reponse

                  {
                    "code": 201,
                    "status": "success",
                    "message": "User account successfully created"
                  }

| Code    | Code la reponse envoyé par le serveur est 201  | 
|---------|------------------------------------------------| 
| Message | Message envoyé par le serveur pour la requette | 
| Status  | Status de la requette                          | 


# Compte utilisateur

Gerer le compte de l'utilisateur en mettant a jour son profile et son compte de paiement

Endpoint de base : `[https://api-truggle-payement.herokuapp.com/v1.0](https://api-truggle-payement.herokuapp.com/v1.0)`

#### Endpoint de gestion des comptes
| Methods | Endpoint      | Description                                          | 
|---------|---------------|------------------------------------------------------| 
| GET     |     /         | Afficher les informations de l'utilisateur           | 
| GET     |     /profil   |     Recuperer les informations sur le profil         | 
| GET     |     /account  |     Recuperer les informations du compte de payement | 
| PUT     |     /profil   |     Mets à jour le profil                            | 
| PUT     |     /acccount |     Mets a jour le compte de l'utilisateur           | 

## Information Global

#### Endpoint: `/`

#### Requette: `GET https://api-truggle-payement.herokuapp.com/v1.0/user`

#### Reponse

                  {
                    "id": userID,
                    "email": email,
                    "password":password,
                    "profil": {
                      "isEnable": true,
                      "firstName": "",
                      "lastName": "",
                      "age": "",
                      "country": ""
                    },
                    "account": {
                      "balance": balance,
                      "currency": "XOF"
                    }
                  }


## Obtenir le profil

#### Endpoint: `/profil`

#### Requette: `GET https://api-truggle-payement.herokuapp.com/v1.0/user/profile`

#### Reponse

                  {
                    "\_id": "62e9b3b6ffd1f656aef4a3c0",
                    "isEnabled": false,
                    "lastName" : lastName,
                    "firstNam" : firstName,
                    "age" : age ,
                    "country" : country,
                    "createdAt": "2022-08-02T23:31:02.406Z",
                    "updatedAt": "2022-08-02T23:31:02.406Z",
                  }


## Mettre a jour le profil

#### Endpoint: `/profil`

#### Requette: `PUT https://api-truggle-payement.herokuapp.com/v1.0/user/profile`

#### Parametres

firstName, lastName , age , country

#### Object

                    {
                        "firstName": "firstName",
                        "lastName": "lastName",
                        "age": 0,
                        "country": "country"
                    }


#### Reponse

                  {
                    "code" : 200
                    "status": "success",
                    "message": "User profile updated successfully",
                    "datas" : {
                      "firstName": "",
                      "lastName": "",
                      "age": "",
                      "country": ""
                    }
                  }


## Obtenir le compte de paiement

#### Endpoint: `/account`

#### Requette: `GET https://api-truggle-payement.herokuapp.com/v1.0/account`

#### Reponse

                  {
                    "\_id": "62e9b3b6ffd1f656aef4a3c0",
                    "balance" : 0,
                    "currency" : "XOF",
                    "createdAt": "2022-08-02T23:31:02.406Z",
                    "updatedAt": "2022-08-02T23:31:02.406Z",
                  }


## Mettre a jour le compte

#### Endpoint: `/profil`

#### Requette: `PUT https://api-truggle-payement.herokuapp.com/v1.0/user/profile`

#### Parametres

balance

#### Object

                    {
                        "balance": "balance",
                    }


#### Reponse

                  {
                    "code" : 200
                    "status": "success",
                    "message": "User account updated successfully",
                    "datas" : {
                      "balance": ""
                    }
                  }


# Clients

Creer des comptes clients et les managers .

Endpoint de base : `{{ endpointUrl }}/customers`

#### Endpoint de gestion des clients
| Methodsn |     Endpoint             |     Description  Params                                                    | 
|----------|--------------------------|------------------------------------------------------------------------------| 
| GET      |     /                    | Recuperer tous les clients crées    Aucun                                    | 
| GET      |     /:customerId         | Recuperer les informations d'un client    customerId - Identifiant du client | 
| POST     |     /                    | Creer un client    Aucun                                                     | 
| DELETE   |     /:customerId         | Supprimer le compte du client    Aucun                                       | 
| PUT      |     /:customerId/account |     Mets a jour le compte du client    customerId - Identifiant du client    | 


## Obtenir la liste des clients

#### Endpoint: `/`

#### Requette: `GET https://api-truggle-payement.herokuapp.com/v1.0/user/customers`

#### Reponse

                  \[
                    {
                      "id": customerID,
                      "email": customerEmail,
                      "password": "$2b$10$HOVLxzB1LqFDvYWDUkfqhePmITttPlyUjaFbgs7tcuDE11qyaFA3W",
                      "profil": {
                        "isEnable": true,
                        "firstName": "",
                        "lastName": "",
                        "age": "",
                        "country": ""
                      },
                      "account": {
                        "balance": 76958,
                        "currency": "XOF"
                      }
                    },
                    {
                      "id": "62ed7602e4be382d60ae30b8",
                      "email": "test2@test.com",
                      "password": "$2b$10$s54wUFn0CtjosicvpOW6Ne4IYyvL1bii8ZTxD53AhIiCujIpVAHfS",
                      "profil": {
                        "isEnable": true,
                        "firstName": "",
                        "lastName": "",
                        "age": "",
                        "country": ""
                      },
                      "account": {
                        "balance": 55485,
                        "currency": "XOF"
                      }
                    }
                  \]


## Obtenir un client

#### Endpoint: `/:customerId`

#### Requette: `GET https://api-truggle-payement.herokuapp.com/v1.0/user/customers/:customerId`

#### Reponse

                 {
                  "id": "62ed6304229b51c21fc31f29",
                  "email": "test@test.com",
                  "password": "$2b$10$HOVLxzB1LqFDvYWDUkfqhePmITttPlyUjaFbgs7tcuDE11qyaFA3W",
                  "profil": {
                    "isEnable": true,
                    "firstName": "",
                    "lastName": "",
                    "age": "",
                    "country": ""
                  },
                  "account": {
                    "balance": 76958,
                    "currency": "XOF"
                  }
                }


## Creer un client

#### Endpoint: `/customers`

#### Requette: `POST https://api-truggle-payement.herokuapp.com/v1.0/user/customers`

#### Parametres

email, password

#### Object

                    {
                      "email": "firstName",
                      "password": "lastName";
                    }


#### Reponse

                  {
                    "code": 201,
                    "status": "success",
                    "message": "User account successfully created",
                    "datas": {
                      "id": "62edb96d072195fd14e9308c",
                      "email": "test4@gmail.com",
                      "password": "$2b$10$.T5cQoozeG8DSeFkbltqseA4rOCoaw/RvDqtB7wpX7SxOuhRr8ua2",
                      "profil": {
                        "isEnable": true,
                        "firstName": "",
                        "lastName": "",
                        "age": "",
                        "country": ""
                      },
                      "account": {
                        "balance": 33073,
                        "currency": "XOF"
                      }
                    }
                  }


## Supprimer un client

#### Endpoint: `/:customerId`

#### Requette: `DELETE https://api-truggle-payement.herokuapp.com/v1.0/user/customers/:customerId`

#### Reponse

                  {
                    "code": 200,
                    "status": "success",
                    "message": "Customer successfully deleted ",
                    "datas": {
                      "\_id": "62edbabcafec60240ac955c8",
                      "email": "test6@gmail.com",
                      "password": "$2b$10$OY8ZRNo4yBNDjGWfcW1Yxem/zDn8aIzsglrqmcpECcTh67Wj.un86",
                      "category": "client",
                      "transactions": \[\],
                      "createdAt": "2022-08-06T00:50:04.407Z",
                      "updatedAt": "2022-08-06T00:50:04.407Z",
                      "\_\_v": 0
                    }
                  }


## Mettre a jour le compte du client

#### Endpoint: `/:customerId/account`

#### Requette: `PUT https://api-truggle-payement.herokuapp.com/v1.0/user/customers/:customerId/account`

#### Parametres

balance

#### Object

                    {
                        "balance": "balance",
                    }


#### Reponse

                  {
                    "code" : 200
                    "status": "success",
                    "message": "User account updated successfully",
                    "datas" : {
                      "balance": ""
                    }
                  }


# Payements

Effectuer des payements et suivrer vos transactions .

Endpoint de base : `{{ endpointUrl }}/customers/:id/transactions`

#### Endpoint de payements
| Methods | Endpoint                 | Description                                                      | Params        | 
|---------|--------------------------|------------------------------------------------------------------|---------------| 
| GET     | /                        | Recuperer tous les transactions                                  | Aucun         | 
| GET     | /:transactionId          | Recuperer les informations d'une transaction                     | transactionId | 
| POST    |     /                    | Creer une transactions et effectuer le payement des articles     | [ ]           | 
| GET     | /:transactionId/articles | Recuperer les articles d'une transactions                        | transactionId | 


## Payer les articles

#### Endpoint: `/`

#### Requette: `POST https://api-truggle-payement.herokuapp.com/v1.0/user/customers/:customerId/transactions`

#### Parametres

totalArticles, Array\[\] Articles

#### Object

                  {
                    "totalPrice" : prixToTalArticle ,
                    "articles" : \[
                        {"name" : "nameArticle" ,"unitPrice": prixUnitaire,"quantity": quantite , "totalPrice" : prixTotalArticle},
                        {"name" : "Stylo bille" ,"unitPrice": 500 , "quantity": "2" , "totalPrice" : 1000}
                    \]
                  }


#### Reponse

                  {
                    "code": 200,
                    "status": "success",
                    "message": "Transaction was initied and paid",
                    "datas": {
                      "transaction": {
                        "\_id": "62edc25fcf13f19aeb4e289d",
                        "status": "SUCCESS",
                        "type": "Debit",
                        "currency": "XOF",
                        "finalAmount": 18999,
                        "amount": "76958",
                        "user": "62ed6304229b51c21fc31f29",
                        "createdAt": "2022-08-06T01:22:39.164Z",
                        "updatedAt": "2022-08-06T01:22:40.774Z",
                        "\_\_v": 0
                      },
                      "merchand": {
                        "merchand\_id": "62e9b3b6ffd1f656aef4a3be",
                        "balance": 2500
                      },
                      "customerID": {
                        "customer\_id": "62ed6304229b51c21fc31f29",
                        "balance": 74458,
                        "oldBalance": 76958
                      }
                    }
                  }


## Obtenir toutes les transactions

#### Endpoint: `/`

#### Requette: `GET https://api-truggle-payement.herokuapp.com/v1.0/user/customers/:customerId/transactions`

#### Reponse

                \[
                  {
                    "\_id": "62ed6a8ce4be382d60ae2f44",
                    "status": "SUCCESS",
                    "type": "Debit",
                    "currency": "XOF",
                    "finalAmount": 8779,
                    "amount": "80648",
                    "createdAt": "2022-08-05T19:07:56.554Z",
                    "updatedAt": "2022-08-05T19:07:56.636Z",
                    "\_\_v": 0
                  },
                  {
                    "\_id": "62ed7775e4be382d60ae311f",
                    "status": "SUCCESS",
                    "type": "Debit",
                    "currency": "XOF",
                    "finalAmount": 1568,
                    "amount": "78508",
                    "createdAt": "2022-08-05T20:03:01.176Z",
                    "updatedAt": "2022-08-05T20:03:01.219Z",
                    "\_\_v": 0
                  }
                \]


## Obtenir les informations sur une transactions

#### Endpoint: `:/transactionID`

#### Requette: `GET https://api-truggle-payement.herokuapp.com/v1.0/user/customers/transactions/:transactionId`

#### Reponse

                  {
                    "\_id": "62ed6a8ce4be382d60ae2f44",
                    "status": "SUCCESS",
                    "type": "Debit",
                    "currency": "XOF",
                    "finalAmount": 8779,
                    "amount": "80648",
                    "createdAt": "2022-08-05T19:07:56.554Z",
                    "updatedAt": "2022-08-05T19:07:56.636Z"
                  }


## Obtenir toutes les articles d'une transactions

#### Endpoint: `/:transactionId/articles`

#### Requette: `GET https://api-truggle-payement.herokuapp.com/v1.0/user/customers/:customerId/transactions/:transactionId/articles`

#### Reponse

                  {
                    "articles": \[
                      {
                        "\_id": "62edc25fcf13f19aeb4e28a0",
                        "name": "Stylo bille",
                        "unitPrice": 500,
                        "quantity": 2,
                        "totalPrice": 1000
                      {
                        "\_id": "62edc25fcf13f19aeb4e289f",
                        "name": "Iphone7",
                        "unitPrice": 1500,
                        "quantity": 1,
                        "totalPrice": 1500,
                        "createdAt": "2022-08-06T01:22:39.361Z",
                        "updatedAt": "2022-08-06T01:22:39.361Z",
                        "\_\_v": 0
                      }
                    \],
                    "totalArticleAmount": 2500
                  }
