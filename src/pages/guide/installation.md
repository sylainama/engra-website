---
layout: ../../layouts/Doc.astro
title: Installation
description: Comment installer Engra et ses dépendances.
---

# Installation

## 1. Télécharger Engra

Rendez-vous sur la [page de téléchargement](/telecharger) et téléchargez la version correspondant à votre système.

### macOS
- Ouvrez le fichier `.dmg`
- Glissez Engra dans le dossier Applications
- Au premier lancement, faites clic droit > Ouvrir (Gatekeeper)

### Linux
- Extrayez l'archive `.tar.gz`
- Lancez `./engra` depuis le dossier extrait
- Assurez-vous que GTK3 est installé

### Windows
- Extrayez le `.zip`
- Lancez `engra.exe`

## 2. Transcription

Le moteur de transcription est téléchargé et compilé **automatiquement** au premier lancement d'Engra. Un modèle de base (~500 Mo) est téléchargé.

Vous pouvez changer de modèle dans **Paramètres > Transcription** :

| Modèle | Taille | Précision | Vitesse |
|--------|--------|-----------|---------|
| Léger  | 75 Mo  | Basse     | Très rapide |
| Standard | 500 Mo | Bonne   | Modérée |
| Avancé | 1,5 Go | Très bonne | Lente |
| Maximum | 3 Go  | Excellente| Très lente |

## 3. Résumés IA — Optionnel

Pour activer les résumés automatiques, téléchargez un modèle IA depuis **Paramètres > Modèle IA** dans l'application. C'est en un clic, aucune ligne de commande requise.

Plusieurs niveaux de modèles sont disponibles :
- **Lite** (~1 Go) — Rapide, qualité correcte
- **Standard** (~2,5 Go) — Bon compromis
- **Avancé** (~8 Go) — Très bonne qualité, nécessite 16+ Go de RAM

## 4. Permissions (macOS)

Au premier lancement, macOS vous demandera :

1. **Micro** — Requis pour l'enregistrement
2. **Enregistrement d'écran** — Requis pour la capture audio système (Zoom, Teams, etc.)

Accordez ces permissions dans **Préférences Système > Confidentialité & Sécurité**.

## Configuration recommandée

- **RAM** : 8 Go minimum, 16 Go recommandé
- **Espace disque** : 5 Go minimum
- **Processeur** : Apple Silicon recommandé pour les meilleures performances IA
