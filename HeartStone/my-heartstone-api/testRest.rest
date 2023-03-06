###GET tout les cartes de la base de donnée réponse 200
GET http://localhost:4000/api/GetCartes
Content-type: application/json

###GET tout les cartes de la base de donnée avec mauvais URL réponse 404
GET http://localhost:4000/api/GetCartess
Content-type: application/json

###GET Une carte avec id réponse 200
GET http://localhost:4000/api/GetCarte/1
Content-type: application/json

###GET Une carte avec id réponse 200
GET http://localhost:4000/api/GetCarte/5
Content-type: application/json

###GET Une carte avec id réponse 404 element non existant
GET http://localhost:4000/api/GetCarte/99
Content-type: application/json

###GET Une carte avec id avec response 404 element non existant
GET http://localhost:4000/api/GetCarte/0
Content-type: application/json

###POST Ajouter une nouvel Carte à la Base de Donnée réponse 200
POST http://localhost:4000/api/AjouterCarte
Content-type: application/json
{
        "Rareter": "LEGENDAIRE",
        "Nom": "Patrick",
        "Cout": 9,
        "Vie": 9,
        "Attack": 9
}

###POST Ajouter une nouvel Carte à la Base de Donnée réponse 404, mais URL
POST http://localhost:4000/api/AjouterCartes
Content-type: application/json
{
        "Rareter": "LEGENDAIRE",
        "Nom": "Patrick",
        "Cout": 9,
        "Vie": 9,
        "Attack": 9
}

###POST Ajouter une nouvel Carte à la Base de Donnée réponse 404, il manque le Header "Attack": 9
POST http://localhost:4000/api/AjouterCarte
Content-type: application/json
{
        "Rareter": "LEGENDAIRE",
        "Nom": "Patrick",
        "Cout": 9,
        "Vie": 9,
}

###DELETE réponse 200 si l'élément à bien été enlever de la base de donnée
DELETE http://localhost:4000/api/DeleteCarte/1

###DELETE réponse 404 si l'élément n'à été enlevé de la base de donner car le id ne correspond pas a un id existant
DELETE http://localhost:4000/api/DeleteCarte/15

###PUT Modifier un element existant dans la base de donnée avec success réponse 202 
PUT http://localhost:4000/api/AjouterCarte
Content-type: application/json
{
        "Id": 55,
        "Rareter": "LEGENDAIRE",
        "Nom": "Patrick",
        "Cout": 9,
        "Vie": 9,
}

###PUT Modifier un element non existant dans la base de donnée réponse 404
PUT http://localhost:4000/api/UpdateCarte/0
Content-type: application/json
{
        "Id": 0,
        "Rareter": "LEGENDAIRE",
        "Nom": "Patrick",
        "Cout": 9,
        "Vie": 9,
}