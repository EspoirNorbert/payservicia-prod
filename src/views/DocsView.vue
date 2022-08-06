<template>
  <div class="docs-page">
    <div class="docs-wrapper">
      <div id="docs-sidebar" class="docs-sidebar">
        <div class="top-search-box d-lg-none p-3">
          <form class="search-form">
            <input
              type="text"
              placeholder="Search the docs..."
              name="search"
              class="form-control search-input"
            />
            <button type="submit" class="btn search-btn" value="Search">
              <i class="fas fa-search"></i>
            </button>
          </form>
        </div>
        <nav id="docs-nav" class="docs-nav navbar">
          <ul class="section-items list-unstyled nav flex-column pb-3">
            <li class="nav-item section-title">
              <a class="nav-link scrollto active" href="#intro">
                <span class="theme-icon-holder me-2"></span>
                Introduction</a
              >
            </li>

            <li class="nav-item section-title">
              <a class="nav-link scrollto" href="#endpoint">
                <span class="theme-icon-holder me-2"></span>Endpoints
              </a>
            </li>
            <li class="nav-item section-title">
              <a class="nav-link scrollto" href="#authentification">
                <span class="theme-icon-holder me-2"></span>Authentification</a
              >
            </li>
            <li class="nav-item section-title">
              <a class="nav-link scrollto" href="#inscription">
                <span class="theme-icon-holder me-2"></span>Creation de
                compte</a
              >
            </li>
            <li class="nav-item section-title">
              <a class="nav-link scrollto" href="#account">
                <span class="theme-icon-holder me-2"></span>Compte
                Utilisateur</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link scrollto" href="#global">Information Global</a>
            </li>
            <li class="nav-item">
              <a class="nav-link scrollto" href="#info-profile"
                >Obtenir l'info profile</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link scrollto" href="#update-profile"
                >Mettre à jour le profile</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link scrollto" href="#info-account"
                >Obtenir l'info compte</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link scrollto" href="#update-account"
                >Mettre à jour compte</a
              >
            </li>

            <li class="nav-item section-title">
              <a class="nav-link scrollto" href="#clients">
                <span class="theme-icon-holder me-2"></span>clients</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link scrollto" href="#info-list-client"
                >Obtenir la liste des clients</a
              >
            </li>
              <li class="nav-item">
              <a class="nav-link scrollto" href="#info-client"
                >Obtenir un client</a
              >
            </li>
             <li class="nav-item">
              <a class="nav-link scrollto" href="#create-customer"
                >Creer un client</a
              >
            </li>
             <li class="nav-item">
              <a class="nav-link scrollto" href="#delete-customer"
                >Supprimer un client</a
              >
            </li>
              <li class="nav-item">
              <a class="nav-link scrollto" href="#update-customer-account"
                >Mettre a jour le compte client</a
              >
            </li>
            <li class="nav-item section-title">
              <a class="nav-link scrollto" href="#payements">
                <span class="theme-icon-holder me-2"></span>Payements</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link scrollto" href="#paid-articles"
                >Payer les articles</a
              >
            </li>
             <li class="nav-item">
              <a class="nav-link scrollto" href="#info-all-transactions"
                >Obtenir toutes les transactions</a
              >
            </li>
             <li class="nav-item">
              <a class="nav-link scrollto" href="#info-transaction"
                >Informations sur la transaction</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link scrollto" href="#article-transaction"
                >Obtenir les articles d'une transaction</a
              >
            </li>
          </ul>
        </nav>
        <!--//docs-nav-->
      </div>
      <!--//docs-sidebar-->
      <div class="docs-content">
        <div class="container">
          <article class="docs-article" id="intro">
            <header class="docs-header">
              <h1 class="docs-heading">La documentation officielle Payservicia REST API</h1>
              <p>L'API REST pour le gateway de paiement Payservicia</p>
            </header>
            <section class="docs-intro">
              <p>
                API REST Payservicia est une API qui a été mise en place pour
                pouvoir faciliter et simuler les systemes de payements
                d'articles en ligne. Elle est facile à utiliser et integrer dans
                votre systeme .
              </p>
            </section>

            <section class="docs-section" id="">
              <h2 class="section-heading"></h2>
              <p>Payservicia API est divisé en 4 API</p>
              <ol>
                <li>API d'authentification</li>
                <li>API de gestion des comptes utilisateurs</li>
                <li>API de gestion des clients et des transactions</li>
              </ol>
              <p>
                Pour pouvoir demarrer dans l'utilisation de l'api il faut se
                creer un compte puis s'authentifie
              </p>
              <p>Tous les requettes sont envoyés au format <b>JSON</b></p>
            </section>
          </article>

          <!-- endpoint -->
          <article class="docs-article" id="endpoint">
            <header class="docs-header">
              <h1 class="docs-heading">Endpoints Disponibles</h1>
              <div id="endpoint">
                <p>
                  Endpoint de base de tous les routes de l'API est :
                  <router-link :to="endpointUrl">
                    {{ endpointUrl }}
                  </router-link>
                </p>
              </div>
            </header>

            <section class="docs-intro">
              <div id="rest">
                <div class="table-responsive">
                  <table
                    class="table text-white border border-primary table-striped"
                  >
                    <tbody>
                      <tr>
                        <th>Methods</th>
                        <th>Endpoint</th>
                        <th>Description</th>
                      </tr>
                      <tr class="text-dark">
                        <td>GET</td>
                        <td>/auth</td>
                        <td>
                          Elle concernant toutes les requettes
                          d'authentification y compris l'inscription
                        </td>
                      </tr>
                      <tr class="text-dark">
                        <td>GET</td>
                        <td>/user</td>
                        <td>
                          Elle concernant toutes les requettes de la gestion de
                          l'utilisateurs
                        </td>
                      </tr>
                      <tr class="text-dark">
                        <td>GET</td>
                        <td>/customers</td>
                        <td>
                          Elle concernant toutes les requettes de la gestion des
                          clients et des payements
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </article>

          <!-- authentification -->
          <article class="docs-article" id="authentification">
            <header class="docs-header">
              <h1 class="docs-heading">Authentification</h1>
              <p>
                Payservicia utilise une authentification basé sur le jwt qui
                genere un token aleatoire disponible pendant 24h .
              </p>
            </header>
            <section class="docs-intro">
              <h4>Endpoint d'authentification : <code>auth/login</code></h4>
              <h4>Method HTTP: <code>POST</code></h4>
              <h4>
                Requette:
                <code>POST https://api-truggle-payement.herokuapp.com/v1.0/auth/login </code>
              </h4>
              <div class="d-flex">
                <h4 class="me-3">Parametres</h4>
                <p>Email et password</p>
              </div>
              <div class="">
                <h4>Object</h4>
                <div class="bg-dark text-white mb-3" style="font-size: 16px">
                  <pre class="p-0">
                    {
                      "email" : email,
                      "password" : password
                    }
                   </pre
                  >
                </div>
              </div>
              <div class="">
                <h4>Reponse</h4>
                <div class="bg-dark text-white mb-3" style="font-size: 16px">
                  <pre>
                 {
                  "code": 200,
                  "status": "success",
                  "message": "User successfully connected ",
                  "datas": {
                    "token": ACCESS_TOKEN
                  }
                }
               </pre
                  >
                </div>
                <div class="table-responsive">
                  <table
                    class="table text-white border border-primary table-striped"
                  >
                    <tbody>
                      <tr class="text-dark">
                        <th>Code de la reponse</th>
                        <td>
                          Code de la reponse envoyé par le serveur il peut etre 200
                          | 400 | 404
                        </td>
                      </tr>
                      <tr class="text-dark">
                        <th>Message</th>
                        <td>Message envoyé par le serveur pour la requette</td>
                      </tr>
                      <tr class="text-dark">
                        <th>Status</th>
                        <td>Status de la requette</td>
                      </tr>
                      <tr class="text-dark">
                        <th>Données</th>
                        <td>Object contenue le token</td>
                      </tr>
                      <tr class="text-dark">
                        <th>Token</th>
                        <td>Clé d'authentification</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </article>

          <!-- Inscription -->
          <article class="docs-article" id="inscription">
            <header class="docs-header">
              <h1 class="docs-heading">Creation de compte</h1>
              <p>Vous pouvez creer un compte en tant que marchand</p>
            </header>
            <section class="docs-intro">
              <h4>Endpoint de creation de compte : <code>auth/signup</code></h4>
              <h4>Method HTTP: <code>POST</code></h4>
              <h4>
                Requette:
                <code>POST  https://api-truggle-payement.herokuapp.com/v1.0/auth/signup </code>
              </h4>
              <div class="d-flex">
                <h4 class="me-3">Parametres</h4>
                <p>Email , password et mot de passe de confirmation</p>
              </div>
              <div class="">
                <h4>Object</h4>
                <div class="bg-dark text-white mb-3" style="font-size: 16px">
                  <pre class="p-0">
                    {
                      "email" : email,
                      "password" : password,
                      "password_confirmation" : "password_confirmation"
                    }
                   </pre
                  >
                </div>
              </div>
              <div class="">
                <h4>Reponse</h4>
                <div class="bg-dark text-white mb-3" style="font-size: 16px">
                  <pre>
                  {
                    "code": 201,
                    "status": "success",
                    "message": "User account successfully created"
                  }
               </pre
                  >
                </div>
                <div class="table-responsive">
                  <table
                    class="table text-white border border-primary table-striped"
                  >
                    <tbody>
                      <tr class="text-dark">
                        <th>Code de la reponse</th>
                        <td>Code la reponse envoyé par le serveur est 201</td>
                      </tr>
                      <tr class="text-dark">
                        <th>Message</th>
                        <td>Message envoyé par le serveur pour la requette</td>
                      </tr>
                      <tr class="text-dark">
                        <th>Status</th>
                        <td>Status de la requette</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </article>

          <!-- Compte utilisateur -->
          <article class="docs-article" id="account">
            <header class="docs-header">
              <h1 class="docs-heading">Compte utilisateur</h1>
              <p>
                Gerer le compte de l'utilisateur en mettant a jour son profile
                et son compte de paiement
              </p>
              <p>
                Endpoint de base : <code> {{ endpointUrl }}/user</code>
              </p>
            </header>
            <section class="docs-intro">
              <h4>Endpoint de gestion des comptes</h4>
              <div class="table-responsive">
                <table
                  class="table text-white border border-primary table-striped"
                >
                  <tbody>
                    <tr>
                      <th>Methods</th>
                      <th>Endpoint</th>
                      <th>Description</th>
                    </tr>
                    <tr class="text-dark">
                      <td>GET</td>
                      <td>/</td>
                      <td>Afficher les informations de l'utilisateur</td>
                    </tr>
                    <tr class="text-dark">
                      <td>GET</td>
                      <td>/profil</td>
                      <td>Recuperer les informations sur le profil</td>
                    </tr>
                    <tr class="text-dark">
                      <td>GET</td>
                      <td>/account</td>
                      <td>Recuperer les informations du compte de payement</td>
                    </tr>
                    <tr class="text-dark">
                      <td>PUT</td>
                      <td>/profil</td>
                      <td>Mets à jour le profil</td>
                    </tr>
                    <tr class="text-dark">
                      <td>PUT</td>
                      <td>/acccount</td>
                      <td>Mets a jour le compte de l'utilisateur</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <!-- global accout info -->
            <section class="docs-section active" id="global">
              <h2 class="section-heading">Information Global</h2>
              <h4>Endpoint: <code>/</code></h4>
              <h4>
                Requette: <code>GET https://api-truggle-payement.herokuapp.com/v1.0/user</code>
              </h4>
              <div class="">
                <h4>Reponse</h4>
                <div class="bg-dark text-white mb-3" style="font-size: 16px">
                  <pre>
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
                </pre
                  >
                </div>
              </div>
             
            </section>

            <!-- get profile -->
            <section class="docs-section active" id="info-profile">
              <h2 class="section-heading">Obtenir le profil</h2>
              <h4>Endpoint: <code>/profil</code></h4>
              <h4>
                Requette:
                <code>GET https://api-truggle-payement.herokuapp.com/v1.0/user/profile</code>
              </h4>
              <div class="respons">
                <h4>Reponse</h4>
                <div class="bg-dark text-white mb-3" style="font-size: 16px">
                  <pre>
                  {
                    "_id": "62e9b3b6ffd1f656aef4a3c0",
                    "isEnabled": false,
                    "lastName" : lastName,
                    "firstNam" : firstName,
                    "age" : age ,
                    "country" : country,
                    "createdAt": "2022-08-02T23:31:02.406Z",
                    "updatedAt": "2022-08-02T23:31:02.406Z",
                  }
                  </pre>
                </div>
              </div>
            </section>

            <!-- update profile -->
            <section class="docs-section active" id="update-profile">
              <h2 class="section-heading">Mettre a jour le profil</h2>
              <h4>Endpoint: <code>/profil</code></h4>
              <h4>
                Requette:
                <code>PUT  https://api-truggle-payement.herokuapp.com/v1.0/user/profile</code>
              </h4>
              <div class="d-flex">
                <h4 class="me-3">Parametres</h4>
                <p>firstName, lastName , age , country</p>
              </div>
              <div class="">
                <h4>Object</h4>
                <div class="bg-dark text-white mb-3" style="font-size: 16px">
                  <pre class="p-0">
                    {
                        "firstName": "firstName",
                        "lastName": "lastName",
                        "age": 0,
                        "country": "country"
                    }
                   </pre
                  >
                </div>
              </div>
              <div class="respons">
                <h4>Reponse</h4>
                <div class="bg-dark text-white mb-3" style="font-size: 16px">
                  <pre>
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
                  </pre>
                </div>
              </div>
            </section>

            <!-- Obtenir le compte de paiement -->
            <section class="docs-section active" id="info-account">
              <h2 class="section-heading">Obtenir le compte de paiement</h2>
              <h4>Endpoint: <code>/account</code></h4>
              <h4>
                Requette:
                <code>GET https://api-truggle-payement.herokuapp.com/v1.0/account</code>
              </h4>
              <div class="respons">
                <h4>Reponse</h4>
                <div class="bg-dark text-white mb-3" style="font-size: 16px">
                  <pre>
                  {
                    "_id": "62e9b3b6ffd1f656aef4a3c0",
                    "balance" : 0,
                    "currency" : "XOF",
                    "createdAt": "2022-08-02T23:31:02.406Z",
                    "updatedAt": "2022-08-02T23:31:02.406Z",
                  }
                  </pre>
                </div>
              </div>
            </section>

            <!-- Mettre a jour le compte de paiement -->
            <section class="docs-section active" id="update-account">
              <h2 class="section-heading">Mettre a jour le compte</h2>
              <h4>Endpoint: <code>/profil</code></h4>
              <h4>
                Requette:
                <code>PUT https://api-truggle-payement.herokuapp.com/v1.0/user/profile</code>
              </h4>
              <div class="d-flex">
                <h4 class="me-3">Parametres</h4>
                <p>balance</p>
              </div>
              <div class="">
                <h4>Object</h4>
                <div class="bg-dark text-white mb-3" style="font-size: 16px">
                  <pre class="p-0">
                    {
                        "balance": "balance",
                    }
                   </pre
                  >
                </div>
              </div>
              <div class="respons">
                <h4>Reponse</h4>
                <div class="bg-dark text-white mb-3" style="font-size: 16px">
                  <pre>
                  {
                    "code" : 200
                    "status": "success",
                    "message": "User account updated successfully",
                    "datas" : {
                      "balance": ""
                    }
                  }
                  </pre>
                </div>
              </div>
            </section>


          </article>

          <!-- clients -->
          <article class="docs-article" id="clients">
            <header class="docs-header">
              <h1 class="docs-heading">Clients</h1>
              <p>
                Creer des comptes clients et les managers .
              </p>
              <p>
                Endpoint de base : <code> {{ endpointUrl }}/customers</code>
              </p>
            </header>
            <section class="docs-intro">
              <h4>Endpoint de gestion des clients</h4>
              <div class="table-responsive">
                <table
                  class="table text-white border border-primary table-striped"
                >
                  <tbody>
                    <tr>
                      <th>Methods</th>
                      <th>Endpoint</th>
                      <th>Description</th>
                      <th>Params</th>
                    </tr>
                    <tr class="text-dark">
                      <td>GET</td>
                      <td>/</td>
                      <td>Recuperer tous les clients crées</td>
                      <td>Aucun</td>
                    </tr>
                    <tr class="text-dark">
                      <td>GET</td>
                      <td>/:customerId</td>
                      <td>Recuperer les informations d'un client</td>
                      <td>customerId - Identifiant du client</td>
                    </tr>
                    <tr class="text-dark">
                      <td>POST</td>
                      <td>/</td>
                      <td>Creer un client</td>
                      <td>Aucun</td>
                    </tr>
                    <tr class="text-dark">
                      <td>DELETE</td>
                      <td>/:customerId</td>
                      <td>Supprimer le compte du client</td>
                      <td>Aucun</td>
                    </tr>
                    <tr class="text-dark">
                      <td>PUT</td>
                      <td>/:customerId/account</td>
                      <td>Mets a jour le compte du client</td>
                       <td>customerId - Identifiant du client</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <!-- global accout info -->
            <section class="docs-section active" id="info-list-client">
              <h2 class="section-heading">Obtenir la liste des clients</h2>
              <h4>Endpoint: <code>/</code></h4>
              <h4>
                Requette: <code>GET https://api-truggle-payement.herokuapp.com/v1.0/user/customers</code>
              </h4>
              <div class="">
                <h4>Reponse</h4>
                <div class="bg-dark text-white mb-3" style="font-size: 16px">
                <pre>
                  [
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
                  ]
                </pre
                  >
                </div>
              </div>
             
            </section>

            <!-- get info client -->
            <section class="docs-section active" id="info-client">
              <h2 class="section-heading">Obtenir un client</h2>
              <h4>Endpoint: <code>/:customerId</code></h4>
              <h4>
                Requette:
                <code>GET https://api-truggle-payement.herokuapp.com/v1.0/user/customers/:customerId</code>
              </h4>
              <div class="respons">
                <h4>Reponse</h4>
                <div class="bg-dark text-white mb-3" style="font-size: 16px">
                <pre>
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
                  </pre>
                </div>
              </div>
            </section>

            <!-- create un client  -->
            <section class="docs-section active" id="create-customer">
              <h2 class="section-heading">Creer un client</h2>
              <h4>Endpoint: <code>/customers</code></h4>
              <h4>
                Requette:
                <code>POST https://api-truggle-payement.herokuapp.com/v1.0/user/customers</code>
              </h4>
              <div class="d-flex">
                <h4 class="me-3">Parametres</h4>
                <p>email, password</p>
              </div>
              <div class="">
                <h4>Object</h4>
                <div class="bg-dark text-white mb-3" style="font-size: 16px">
                  <pre class="p-0">
                    {
                      "email": "firstName",
                      "password": "lastName";
                    }
                   </pre
                  >
                </div>
              </div>
              <div class="respons">
                <h4>Reponse</h4>
                <div class="bg-dark text-white mb-3" style="font-size: 16px">
                  <pre>
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
                  </pre>
                </div>
              </div>
            </section>

            <!-- Obtenir le compte de paiement -->
            <section class="docs-section active" id="delete-customer">
              <h2 class="section-heading">Supprimer un client</h2>
              <h4>Endpoint: <code>/:customerId</code></h4>
              <h4>
                Requette:
                <code>DELETE https://api-truggle-payement.herokuapp.com/v1.0/user/customers/:customerId</code>
              </h4>
              <div class="respons">
                <h4>Reponse</h4>
                <div class="bg-dark text-white mb-3" style="font-size: 16px">
                  <pre>
                  {
                    "code": 200,
                    "status": "success",
                    "message": "Customer successfully deleted ",
                    "datas": {
                      "_id": "62edbabcafec60240ac955c8",
                      "email": "test6@gmail.com",
                      "password": "$2b$10$OY8ZRNo4yBNDjGWfcW1Yxem/zDn8aIzsglrqmcpECcTh67Wj.un86",
                      "category": "client",
                      "transactions": [],
                      "createdAt": "2022-08-06T00:50:04.407Z",
                      "updatedAt": "2022-08-06T00:50:04.407Z",
                      "__v": 0
                    }
                  }
                  </pre>
                </div>
              </div>
            </section>

            <!-- Mettre a jour le compte de paiement -->
            <section class="docs-section active" id="update-customer-account">
              <h2 class="section-heading">Mettre a jour le compte du client</h2>
              <h4>Endpoint: <code>/:customerId/account</code></h4>
              <h4>
                Requette:
                <code>PUT https://api-truggle-payement.herokuapp.com/v1.0/user/customers/:customerId/account</code>
              </h4>
              <div class="d-flex">
                <h4 class="me-3">Parametres</h4>
                <p>balance</p>
              </div>
              <div class="">
                <h4>Object</h4>
                <div class="bg-dark text-white mb-3" style="font-size: 16px">
                  <pre class="p-0">
                    {
                        "balance": "balance",
                    }
                   </pre
                  >
                </div>
              </div>
              <div class="respons">
                <h4>Reponse</h4>
                <div class="bg-dark text-white mb-3" style="font-size: 16px">
                  <pre>
                  {
                    "code" : 200
                    "status": "success",
                    "message": "User account updated successfully",
                    "datas" : {
                      "balance": ""
                    }
                  }
                  </pre>
                </div>
              </div>
            </section>


          </article>

          <!-- payements -->
           <article class="docs-article" id="payements">
            <header class="docs-header">
              <h1 class="docs-heading">Payements</h1>
              <p>
                Effectuer des payements et suivrer vos transactions .
              </p>
              <p>
                Endpoint de base : <code> {{ endpointUrl }}/customers/:id/transactions</code>
              </p>
            </header>
            <section class="docs-intro">
              <h4>Endpoint de payements</h4>
              <div class="table-responsive">
                <table
                  class="table text-white border border-primary table-striped"
                >
                  <tbody>
                    <tr>
                      <th>Methods</th>
                      <th>Endpoint</th>
                      <th>Description</th>
                      <th>Params</th>
                    </tr>
                    <tr class="text-dark">
                      <td>GET</td>
                      <td>/</td>
                      <td>Recuperer tous les transactions</td>
                      <td>Aucun</td>
                    </tr>
                    <tr class="text-dark">
                      <td>GET</td>
                      <td>/:transactionId</td>
                      <td>Recuperer les informations d'une transaction</td>
                      <td><span class="badge bg-success">transactionId</span></td>
                    </tr>
                    <tr class="text-dark">
                      <td>POST</td>
                      <td>/</td>
                      <td>Creer une transactions et effectuer le payement des articles</td>
                      <td><span class="badge bg-success">[ ]</span></td>
                    </tr>
                    <tr class="text-dark">
                      <td>GET</td>
                      <td>/:transactionId/articles</td>
                      <td>Recuperer les articles d'une transactions</td>
                      <td><span class="badge bg-success">transactionId</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <!-- global accout info -->
            <section class="docs-section active" id="paid-articles">
              <h2 class="section-heading">Payer les articles</h2>
              <h4>Endpoint: <code>/</code></h4>
              <h4>
                Requette: <code>POST https://api-truggle-payement.herokuapp.com/v1.0/user/customers/:customerId/transactions</code>
              </h4>
               <div class="d-flex">
                <h4 class="me-3">Parametres</h4>
                <p>totalArticles, Array[] Articles</p>
              </div>
              <div class="">
                <h4>Object</h4>
                <div class="bg-dark text-white mb-3" style="font-size: 16px">
                  <pre class="p-0">
                  {
                    "totalPrice" : prixToTalArticle ,
                    "articles" : [
                        {"name" : "nameArticle" ,"unitPrice": prixUnitaire,"quantity": quantite , "totalPrice" : prixTotalArticle},
                        {"name" : "Stylo bille" ,"unitPrice": 500 , "quantity": "2" , "totalPrice" : 1000}
                    ]
                  }
                  </pre
                  >
                </div>
              </div>

              <div class="">
                <h4>Reponse</h4>
                <div class="bg-dark text-white mb-3" style="font-size: 16px">
                <pre>
                  {
                    "code": 200,
                    "status": "success",
                    "message": "Transaction was initied and paid",
                    "datas": {
                      "transaction": {
                        "_id": "62edc25fcf13f19aeb4e289d",
                        "status": "SUCCESS",
                        "type": "Debit",
                        "currency": "XOF",
                        "finalAmount": 18999,
                        "amount": "76958",
                        "user": "62ed6304229b51c21fc31f29",
                        "createdAt": "2022-08-06T01:22:39.164Z",
                        "updatedAt": "2022-08-06T01:22:40.774Z",
                        "__v": 0
                      },
                      "merchand": {
                        "merchand_id": "62e9b3b6ffd1f656aef4a3be",
                        "balance": 2500
                      },
                      "customerID": {
                        "customer_id": "62ed6304229b51c21fc31f29",
                        "balance": 74458,
                        "oldBalance": 76958
                      }
                    }
                  }
                </pre>
                </div>
              </div>
            
            </section>

            <!-- get info transactions -->
            <section class="docs-section active" id="info-all-transactions">
              <h2 class="section-heading">Obtenir toutes les transactions</h2>
              <h4>Endpoint: <code>/</code></h4>
              <h4>
                Requette:
                <code>GET https://api-truggle-payement.herokuapp.com/v1.0/user/customers/:customerId/transactions</code>
              </h4>
              <div class="respons">
                <h4>Reponse</h4>
                <div class="bg-dark text-white mb-3" style="font-size: 16px">
                <pre>
                [
                  {
                    "_id": "62ed6a8ce4be382d60ae2f44",
                    "status": "SUCCESS",
                    "type": "Debit",
                    "currency": "XOF",
                    "finalAmount": 8779,
                    "amount": "80648",
                    "createdAt": "2022-08-05T19:07:56.554Z",
                    "updatedAt": "2022-08-05T19:07:56.636Z",
                    "__v": 0
                  },
                  {
                    "_id": "62ed7775e4be382d60ae311f",
                    "status": "SUCCESS",
                    "type": "Debit",
                    "currency": "XOF",
                    "finalAmount": 1568,
                    "amount": "78508",
                    "createdAt": "2022-08-05T20:03:01.176Z",
                    "updatedAt": "2022-08-05T20:03:01.219Z",
                    "__v": 0
                  }
                ] 
                </pre>
                </div>
              </div>
            </section>

               <!-- get transaction -->
            <section class="docs-section active" id="info-transaction">
              <h2 class="section-heading">Obtenir les informations sur une transactions</h2>
              <h4>Endpoint: <code>:/transactionID</code></h4>
              <h4>
                Requette:
                <code>GET https://api-truggle-payement.herokuapp.com/v1.0/user/customers/transactions/:transactionId</code>
              </h4>
              <div class="respons">
                <h4>Reponse</h4>
                <div class="bg-dark text-white mb-3" style="font-size: 16px">
                  <pre>
                  {
                    "_id": "62ed6a8ce4be382d60ae2f44",
                    "status": "SUCCESS",
                    "type": "Debit",
                    "currency": "XOF",
                    "finalAmount": 8779,
                    "amount": "80648",
                    "createdAt": "2022-08-05T19:07:56.554Z",
                    "updatedAt": "2022-08-05T19:07:56.636Z"
                  }
                  </pre>
                </div>
              </div>
            </section>

             <!-- get info transactions -->
            <section class="docs-section active" id="article-transaction">
              <h2 class="section-heading">Obtenir toutes les articles d'une transactions</h2>
              <h4>Endpoint: <code>/:transactionId/articles</code></h4>
              <h4>
                Requette:
                <code>GET https://api-truggle-payement.herokuapp.com/v1.0/user/customers/:customerId/transactions/:transactionId/articles</code>
              </h4>
              <div class="respons">
                <h4>Reponse</h4>
                <div class="bg-dark text-white mb-3" style="font-size: 16px">
                <pre>
                  {
                    "articles": [
                      {
                        "_id": "62edc25fcf13f19aeb4e28a0",
                        "name": "Stylo bille",
                        "unitPrice": 500,
                        "quantity": 2,
                        "totalPrice": 1000
                      {
                        "_id": "62edc25fcf13f19aeb4e289f",
                        "name": "Iphone7",
                        "unitPrice": 1500,
                        "quantity": 1,
                        "totalPrice": 1500,
                        "createdAt": "2022-08-06T01:22:39.361Z",
                        "updatedAt": "2022-08-06T01:22:39.361Z",
                        "__v": 0
                      }
                    ],
                    "totalArticleAmount": 2500
                  }
                </pre>
                </div>
              </div>
            </section>
          </article> 
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DocsView",
  components: {
    //HelloWorld,
  },
  data() {
    return {
      endpointUrl: "https://api-truggle-payement.herokuapp.com/v1.0",
      Http: {
        method: ["GET", "POST", "DELET"],
      },
    };
  },
};
</script>
<style scoped>
#docs-sidebar {
  background: white;

  display: block !important;
}
.method-http-details {
  font-size: 16px;
  margin-bottom: 15px;
}
</style>
