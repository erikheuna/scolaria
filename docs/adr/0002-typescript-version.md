# ADR-002 : Rester sur TypeScript 6

- Statut : Accepté
- Date : 2026-11-09

## Contexte
TypeScript 7 (réécrit en Go) compile ~10x plus vite. Mais plusieurs outils de notre stack ne le supportent pas encore : typescript-eslint, ts-jest, ts-node (utilisés par NestJS), et l'intégration native de VS Code (absence de lib/tsserver.js).

## Options envisagées
1. **TypeScript 7** + extension VS Code « Native Preview »
   - Avantage : compilation et vérification des types bien plus rapides.
   - Inconvénient : incompatible avec ESLint, Jest et ts-node.
2. **TypeScript 6**
   - Avantage : compatible avec tout l'écosystème NestJS / Next.js / Expo.
   - Inconvénient : plus lent ; une migration sera nécessaire plus tard.

## Décision
TypeScript 6 dans tout le monorepo (racine + packages).

## Conséquences
- Compilation et vérification des types plus lentes (aucun impact sur
  la vitesse de l'application en production).
- Une migration vers TypeScript 7 sera à prévoir.
- À réévaluer quand typescript-eslint, ts-jest et VS Code supporteront
  officiellement TypeScript 7.