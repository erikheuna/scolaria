# ADR-001 : Stratégie multi-tenant

- Statut : Accepté
- Date : 2026-11-09

## Contexte
Notre SaaS sert plusieurs écoles (tenants) avec une seule application.
Les données de chaque école doivent être strictement isolées.

## Options envisagées
1. **Une base par école** : isolation maximale, mais coûteux et lourd
   à opérer (connexions, sauvegardes, migrations multipliées).
2. **Un schéma par école** : séparation physique des données, donc pas
   de fuite en cas d'oubli de filtre ; mais chaque migration doit être
   appliquée N fois et les statistiques globales sont complexes.
3. **Base partagée + colonne `schoolId`** : simple, une seule migration,
   passe bien à l'échelle ; mais l'isolation repose sur le filtrage.

## Décision
Option 3. Chaque table liée à une école possède une colonne `schoolId`.

## Conséquences
- Risque : fuite inter-tenant (accidentelle ou malveillante) si un
  filtre est oublié.
- Protections :
  - le `schoolId` provient uniquement du JWT, jamais du client ;
  - filtrage automatique et centralisé (extension Prisma) ;
  - tests d'isolation automatisés dans la CI ;
  - le RBAC (rôles) complète l'isolation, il ne la remplace pas.