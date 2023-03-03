create database HearthStone2
Go

use HearthStone2
Go


CREATE TABLE Cartes (
    Id int NOT NULL IDENTITY PRIMARY KEY,
    Rareter varchar(50),
    Nom varchar(100),
	Cout int,
	Vie int,
    Attack int,
);

INSERT INTO Cartes(Rareter, Nom, Cout, Vie, Attack)
VALUES ('LEGENDAIRE', 'Leeroy Jenkins', 5, 2, 6);

INSERT INTO Cartes(Rareter, Nom, Cout, Vie, Attack)
VALUES ('RARE', 'Dragon Azure', 5, 5, 4);

INSERT INTO Cartes(Rareter, Nom, Cout, Vie, Attack)
VALUES ('COMMUN', 'Morticien nécrotique', 2, 3, 2);

INSERT INTO Cartes(Rareter, Nom, Cout, Vie, Attack)
VALUES ('EPIQUE', 'Hachoir à viande', 3, 4, 3);

INSERT INTO Cartes(Rareter, Nom, Cout, Vie, Attack)
VALUES ('LEGENDAIRE', 'Jace Sombretisserand', 8, 5, 7);

select * from Cartes
Go

select
    'data source=' + @@servername +
    ';initial catalog=' + db_name() +
    case type_desc
        when 'WINDOWS_LOGIN' 
            then ';trusted_connection=true'
        else
            ';user id=' + suser_name() + ';password=<<YourPassword>>'
    end
    as ConnectionString
from sys.server_principals
where name = suser_name()

SCOPE_IDENTITY()