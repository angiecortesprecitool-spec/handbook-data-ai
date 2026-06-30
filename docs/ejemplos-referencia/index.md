---
sidebar_position: 1
title: Ejemplos de referencia
---

# Guía: Ejemplos de referencia

Proyectos y recursos que te recomendamos revisar primero para entender cómo
construimos agentes y trabajamos con datos en el área.

## En esta guía

- **[Ejemplo: crear un agente en MS Foundry](/ejemplos-referencia/agente-ms-foundry)**
- **[Ejemplo: crear un agente con LangChain](/ejemplos-referencia/agente-langchain)**

## Proyectos internos de referencia

| Proyecto | Qué resuelve | Qué mirar |
|---|---|---|
| _(agrega aquí el repo)_ | _(ej. agente que responde tickets de soporte)_ | estructura de `agents/`, cómo está documentado el README |
| _(agrega aquí el repo)_ | _(ej. pipeline de limpieza de datos de ventas)_ | cómo separa `data/raw` de `data/processed` |

## Ejemplo: esqueleto mínimo de un agente

```text
agente-ejemplo/
├── agents/
│   └── agente_principal.py   # define el agente y sus herramientas
├── prompts/
│   └── system_prompt.md      # prompt versionado, no hardcodeado en el código
├── tests/
│   └── test_agente.py
├── .env.example
└── README.md
```

```python
# agents/agente_principal.py — forma típica de un agente en el área
from pathlib import Path

SYSTEM_PROMPT = Path("prompts/system_prompt.md").read_text()

def construir_agente():
    """Arma el agente con sus herramientas y el modelo configurado."""
    # 1. cargar herramientas (tools)
    # 2. instanciar el cliente del modelo
    # 3. devolver el agente listo para usarse
    ...
```

## Recursos externos recomendados

- [Documentación de la API de Claude](https://docs.anthropic.com/) — modelos, tool use, agentes.
- [Documentación de LangChain](https://python.langchain.com/) — si el proyecto usa este framework.
- [Documentación de LangGraph](https://langchain-ai.github.io/langgraph/) — para agentes con flujos más complejos.

## Buenas y malas prácticas observadas

| Bien | Evitar |
|---|---|
| Prompt versionado en `prompts/` | Prompt escrito directo dentro del código, sin historial |
| README con pasos para correr el proyecto | "Pregúntale a fulano cómo correrlo" |
| Datos crudos intactos en `data/raw/` | Editar a mano los datos originales |
| Secretos en `.env`, fuera del repo | API keys pegadas directo en el código |

:::tip
Esta lista es un punto de partida. Pide a tu mentor o lead que te comparta 2-3
repos reales del área para agregarlos aquí como referencia para el siguiente
becario.
:::
