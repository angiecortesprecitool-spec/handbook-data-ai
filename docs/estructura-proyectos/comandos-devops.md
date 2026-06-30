---
sidebar_position: 2
title: Comandos para subir tu proyecto a DevOps
---

# Comandos para subir tu proyecto a Azure DevOps

Pasos para llevar un proyecto que tienes en local hasta un repositorio en
Azure DevOps.

## 1. Inicializar el repositorio local

Si tu proyecto todavía no es un repo de Git:

```bash
git init
git add .
git commit -m "Primer commit"
```

## 2. Conectarlo con Azure DevOps

Crea el repositorio en Azure DevOps (Repos → New repository) y conecta tu
proyecto local con la URL que te da:

```bash
git remote add origin https://dev.azure.com/<organizacion>/<proyecto>/_git/<repositorio>
git push -u origin main
```

:::tip
Verifica el remoto antes de hacer push con `git remote -v`. Si Git pide
credenciales, usa tu cuenta corporativa o un Personal Access Token (PAT)
generado desde Azure DevOps (User settings → Personal access tokens).
:::

## 3. Trabajo del día a día (ramas)

No se trabaja directo sobre `main`. El flujo normal es:

```bash
# Crear una rama para tu cambio
git checkout -b feature/nombre-de-tu-cambio

# Guardar tu trabajo
git add .
git commit -m "Describe qué hace este cambio"

# Subir la rama a Azure DevOps
git push -u origin feature/nombre-de-tu-cambio
```

Después de este paso, sigue la guía para **[generar el Pull Request](/estructura-proyectos/generar-pr)**.

## Comandos útiles para el día a día

| Comando | Para qué |
|---|---|
| `git status` | Ver qué archivos cambiaron |
| `git pull origin main` | Traer los últimos cambios de `main` antes de empezar a trabajar |
| `git log --oneline -10` | Ver los últimos 10 commits |
| `git diff` | Ver los cambios que aún no haces commit |
