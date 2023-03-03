SELECT [Id],
        [Rareter],
        [Nom],
        [Cout],
        [Vie],
        [Attack]
FROM [dbo].[Cartes]
WHERE [Id] = @carteId