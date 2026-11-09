# ADR-003 : CommonJS + Jest pour l'API

- Statut : Accepté
- Date : 2026-11-09

## Contexte
Lors de la création de l'API, la CLI NestJS demande de choisir un
système de modules : ESM (avec Vitest) ou CommonJS (avec Jest).

## Options envisagées
1. **ESM + Vitest**
   - Avantage : standard d'avenir ; Vitest est plus rapide que Jest.
   - Inconvénient : imports avec extension `.js` obligatoire, source
     d'erreurs fréquentes.
2. **CommonJS + Jest**
   - Avantage : majorité des tutoriels et réponses NestJS ; même
     format que `packages/shared`, donc aucune conversion.
   - Inconvénient : tests plus lents ; ancien standard.

## Décision
CommonJS + Jest.

## Conséquences
- Configuration simple et cohérente avec `shared`.
- Tests plus lents qu'avec Vitest (aucun impact en production).
- Jest repose sur ts-jest, lié à TypeScript 6 (voir ADR-002).
- À réévaluer si : `shared` passe en ESM, une dépendance clé devient
  ESM-only, ou la suite de tests dépasse 5 minutes en CI.