---
sidebar_position: 3
title: Generar PR
---

# Generar un Pull Request en Azure DevOps

Una vez que subiste tu rama (ver **[Comandos para subir tu proyecto a Azure DevOps](/estructura-proyectos/comandos-devops)**),
el siguiente paso es abrir un Pull Request (PR) para que tu cambio se revise
antes de integrarse a `main`.

## Opción 1: Desde el portal de Azure DevOps

1. Entra a tu proyecto en Azure DevOps → **Repos** → **Pull Requests**.
2. Clic en **New Pull Request**.
3. Selecciona la rama origen (tu `feature/...`) y la rama destino (normalmente `main`).
4. Escribe un título claro y una descripción: qué cambia y por qué.
5. Agrega como **reviewers** a quien deba aprobar el cambio.
6. Clic en **Create**.

:::tip
Después de hacer `git push`, Azure DevOps suele mostrar un aviso con un botón
directo de "Create a pull request" — no siempre necesitas ir manualmente al menú.
:::

## Opción 2: Desde la terminal (Azure CLI)

Si tienes instalada la extensión `azure-devops` de Azure CLI:

```bash
# Una sola vez: iniciar sesión y configurar tu organización/proyecto por defecto
az login
az extension add --name azure-devops
az devops configure --defaults organization=https://dev.azure.com/<organizacion> project=<proyecto>

# Crear el PR desde tu rama actual
az repos pr create \
  --repository <repositorio> \
  --source-branch feature/nombre-de-tu-cambio \
  --target-branch main \
  --title "Título del PR" \
  --description "Qué cambia y por qué"
```

## Buenas prácticas para un buen PR

- **Pequeño y enfocado** — un PR debe resolver una sola cosa, más fácil de revisar.
- **Descripción con contexto** — qué problema resuelve, no solo qué archivos cambiaron.
- **Liga el work item/ticket** relacionado si el área lo usa.
- **Espera al menos una aprobación** antes de completar (`Complete`) el PR.
