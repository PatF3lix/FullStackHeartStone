UPDATE [dbo].[Cartes]
SET [Rareter]=@carteRareter,
    [Nom]=@carteNom,
    [Cout]=@carteCout,
    [Vie]=@carteVie,
    [Attack]=@carteAttack
WHERE [Id]=@carteId

SELECT [Id],
        [Rareter],
        [Nom],
        [Cout],
        [Vie],
        [Attack]
FROM [dbo].[Cartes]
WHERE [Id]=@carteId