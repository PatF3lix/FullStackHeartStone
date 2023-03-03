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

SELECT SCOPE_IDENTITY() AS Id