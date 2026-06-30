---
sidebar_position: 1
title: Estructura de Proyectos
---

# Guía: Estructura de Proyectos

Así organizamos los proyectos en el área de **Data & AI** (agentes, pipelines de
datos, notebooks de experimentación). Si acabas de llegar, esta es la página
que te ayuda a entrar a cualquier repo del equipo y ubicarte sin pedir ayuda.

## En esta guía

- **[Comandos para subir tu proyecto a Azure DevOps](/estructura-proyectos/comandos-devops)**
- **[Generar un Pull Request](/estructura-proyectos/generar-pr)**

## Estructura estándar de un proyecto

```text
nombre-del-proyecto/
├── agents/            # Definición de agentes (lógica, herramientas, grafos)
├── prompts/           # System prompts y plantillas, versionados como código
├── data/
│   ├── raw/            # Datos originales, nunca se modifican a mano
│   └── processed/      # Datos limpios/transformados, generados por código
├── notebooks/         # Exploración y prototipado (no lógica de producción)
├── src/                # Código fuente reutilizable (funciones, clientes, utils)
├── tests/              # Pruebas automatizadas
├── configs/            # Configuración por ambiente (dev/staging/prod)
├── .env.example         # Variables de entorno necesarias, sin valores reales
├── pyproject.toml      # Dependencias y metadata del proyecto
└── README.md            # Qué hace el proyecto y cómo correrlo
```

## Convenciones de nombres

| Elemento | Convención | Ejemplo |
|---|---|---|
| Repositorios | `kebab-case`, prefijo del tipo de proyecto | `agente-soporte-tecnico` |
| Notebooks | fecha + propósito | `2026-06-30-exploracion-tickets.ipynb` |
| Ramas de Git | `tipo/descripcion-corta` | `feature/agente-clasificador` |
| Variables de entorno | `MAYUSCULAS_CON_GUION_BAJO` | `OPENAI_API_KEY` |

## Dónde va cada cosa

- **Lógica de agentes y herramientas (tools)** → `agents/`, nunca en notebooks.
- **Prompts** → `prompts/`, versionados igual que el código (no en comentarios sueltos).
- **Datos crudos** → `data/raw/`, de solo lectura una vez descargados.
- **Resultados de experimentos** → `notebooks/`, con salida limpia antes de hacer commit.
- **Secretos (API keys, credenciales)** → nunca al repo. Van en `.env`, que está en `.gitignore`.

## Entornos y dependencias

- Un entorno virtual por proyecto (`venv`, `poetry` o `uv`, según el proyecto).
- Las dependencias se fijan en `pyproject.toml` o `requirements.txt`, no se
  instalan "a mano" sin registrarlas.

:::tip
Esta es la estructura base del área. Si tu proyecto necesita algo distinto
(por ejemplo una carpeta `eval/` para evaluación de agentes), agrégalo y
documenta por qué en el README del proyecto.
:::
