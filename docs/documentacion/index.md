---
sidebar_position: 1
title: Documentación
---

# Guía: Documentación

Construimos agentes y pipelines de datos en equipo, y el equipo cambia con el
tiempo. Documentar es lo que evita que el conocimiento viva solo en la cabeza
de quien construyó algo.

## En esta guía

- **[Documentación Básica](/documentacion/documentacion-basica)**
- **[Documentación Avanzada](/documentacion/documentacion-avanzada)**

## El README de cada proyecto

Todo proyecto debe tener un `README.md` que responda, en este orden:

1. **¿Qué hace?** Un párrafo, sin jerga interna.
2. **¿Cómo lo corro?** Pasos exactos: instalación, variables de entorno, comando.
3. **¿Cómo está armado?** Arquitectura del agente o pipeline (un diagrama simple basta).
4. **¿Quién lo mantiene?** Dueño o equipo de contacto.

## Documentar agentes y prompts

Los prompts cambian seguido y las decisiones detrás de un cambio se pierden
fácil si no quedan escritas:

- Cada cambio de prompt importante va con un mensaje de commit que explica
  el **por qué**, no solo el qué.
- Decisiones de diseño del agente (qué modelo, qué herramientas tiene
  acceso, por qué) se documentan en el README del proyecto o en un `docs/decisiones.md`.
- Si el agente usa RAG, documenta de dónde vienen los datos y cada cuánto se actualizan.

## Documentar pipelines de datos

| Pregunta | Dónde se responde |
|---|---|
| ¿De dónde vienen los datos? | README del proyecto |
| ¿Qué transformaciones se aplican? | Comentarios en el código + README |
| ¿Con qué frecuencia se actualizan? | README o configuración del scheduler |
| ¿Quién es el dueño de la fuente? | README |

## Dónde vive cada tipo de documentación

| Tipo de información | Dónde |
|---|---|
| Cómo correr un proyecto específico | `README.md` del repo |
| Decisiones y forma de trabajo del área | Este handbook |
| Qué hace una función o clase | Docstrings en el código |
| Estado de un experimento o agente | Notebook o ticket asociado |

## Buenas prácticas

- **Documenta mientras construyes**, no al final. Si lo dejas para después, no pasa.
- **Explica el "por qué", no solo el "qué"** — el código ya dice qué hace; lo que se pierde es la razón detrás de una decisión.
- **Markdown sobre Word/PDF** — todo lo que se pueda versionar en Git, se versiona en Git.

:::tip
Esta página es un punto de partida. Si el área ya usa una plantilla de README
o un formato de ADR (Architecture Decision Record), enlázalo aquí.
:::
