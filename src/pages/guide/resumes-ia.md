---
layout: ../../layouts/Doc.astro
title: Résumés IA
description: Comment fonctionnent les résumés automatiques dans Engra.
---

# Résumés IA

## Fonctionnement

Engra exécute des modèles de langage (LLM) directement sur votre machine pour générer les résumés. Tout tourne en local, aucune donnée n'est envoyée à l'extérieur.

## Ce qui est généré

Pour chaque réunion, l'IA produit :

1. **Synthèse** : résumé structuré de la réunion
2. **Décisions** : décisions prises pendant la réunion
3. **Points clés** : informations importantes à retenir
4. **Actions items** : tâches à réaliser, avec assigné et date

## Niveaux de modèles

| Niveau | RAM recommandée | Qualité |
|--------|-----------------|---------|
| Lite | 4 Go | Correcte |
| Standard | 8 Go | Bonne |
| Pro | 16 Go | Très bonne |
| Expert | 12 Go | Excellente |
| Ultra | 16 Go | Maximale |

Changez de modèle dans **Paramètres > Modèle IA**.

## Templates

Les templates adaptent la génération au type de réunion. Par exemple, le template **Standup** se concentre sur les blocages et avancements, tandis que **Sales call** cible les besoins client et objections.

## Régénérer un résumé

Vous pouvez régénérer un résumé à tout moment en cliquant sur le bouton de régénération. Vous pouvez aussi changer de template avant de régénérer.
