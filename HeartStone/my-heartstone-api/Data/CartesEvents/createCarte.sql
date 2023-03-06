INSERT INTO [dbo].[Cartes]
    (
        [Rareter],
        [Nom],
        [Cout],
        [Vie],
        [Attack] 
    )
VALUES (
    @carteRareter,
    @carteNom,
    @carteCout,
    @carteVie,
    @carteAttack
)
-- this must be the reason why i only get back the id of the object that was created an not the whole object
SELECT SCOPE_IDENTITY() AS Id