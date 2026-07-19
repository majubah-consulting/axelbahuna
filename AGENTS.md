# Instructions Codex — Axel Bahuna

## Mission

Maintenir et améliorer le site vitrine artistique d’Axel Bahuna sans transformer le projet en boutique en ligne.

## Principes éditoriaux

- Axel Bahuna est un artiste peintre passionné, sans activité commerciale déclarée sur le site.
- Ne jamais afficher de prix, bouton « Acheter », panier ou paiement.
- Les appels à l’action doivent rester : « Découvrir les œuvres », « En savoir plus », « Contacter l’artiste », « Proposer une exposition ».
- Ne pas inventer de date, de titre d’œuvre, de dimension, de lieu d’exposition ou de reconnaissance.
- Lorsqu’une information est incertaine, conserver une formulation prudente ou la signaler comme « à confirmer ».
- Respecter la voix d’Axel : simplicité, patience, lumière, nature, fidélité au travail.

## Direction artistique

- Univers muséal, élégant et immersif.
- Palette dominante : bleu profond, ivoire, noir et touches dorées.
- Les œuvres doivent toujours rester le centre de l’attention.
- Éviter les animations agressives, les effets « startup » et les interfaces commerciales.
- Préserver l’accessibilité, la lisibilité mobile et la navigation clavier.

## Images

- Les images présentes dans `assets/images/artworks` sont des versions nettoyées et optimisées pour le web.
- Ne pas modifier le contenu pictural ou les signatures sans validation.
- Conserver les proportions et utiliser `object-fit: contain` dans les vues détaillées.
- Les archives sont dans `assets/images/archive`.
- Ajouter une mention de restauration numérique lorsqu’une image a été fortement retouchée.

## Technique

Le projet initial est statique, sans dépendance. Toute migration vers Next.js, Astro ou un CMS doit préserver :

- les URL principales ;
- le SEO et les données structurées ;
- le bilingue français/anglais ;
- le fonctionnement sans JavaScript pour le contenu essentiel, si possible ;
- l’absence de traçage publicitaire et de cookies inutiles.

## Contact

L’adresse confirmée pour le formulaire est `baudry@majubahconsulting.com`.
