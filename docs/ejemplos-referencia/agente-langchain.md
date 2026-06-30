---
sidebar_position: 3
title: Ejemplo - Agente con LangChain
---

# Ejemplo: crear un agente con LangChain

LangChain permite armar un agente que decide, en cada paso, si responder
directamente o usar una herramienta (`tool`).

## Requisitos

```bash
pip install langchain langchain-anthropic
```

## Ejemplo mínimo

```python
from langchain.agents import AgentExecutor, create_tool_calling_agent
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.tools import tool
from langchain_anthropic import ChatAnthropic

# 1. Definir una herramienta (tool) que el agente puede usar
@tool
def buscar_documentacion(consulta: str) -> str:
    """Busca información dentro de la documentación interna del área."""
    # aquí iría la lógica real, ej. consultar un vector store
    return f"Resultados de búsqueda para: {consulta}"

tools = [buscar_documentacion]

# 2. Definir el modelo
llm = ChatAnthropic(model="claude-sonnet-5")

# 3. Definir el prompt del agente
prompt = ChatPromptTemplate.from_messages([
    ("system", "Eres un asistente del área de Data & AI. Usa las herramientas disponibles cuando lo necesites."),
    ("human", "{input}"),
    ("placeholder", "{agent_scratchpad}"),
])

# 4. Crear el agente y su executor
agent = create_tool_calling_agent(llm, tools, prompt)
agent_executor = AgentExecutor(agent=agent, tools=tools, verbose=True)

# 5. Ejecutarlo
respuesta = agent_executor.invoke({
    "input": "¿Qué documentación tenemos sobre pipelines de datos?",
})
print(respuesta["output"])
```

## Notas

- Para agentes con flujos más complejos (varios pasos, ciclos, varios
  agentes coordinados) el equipo de LangChain recomienda
  [LangGraph](https://langchain-ai.github.io/langgraph/) en lugar del
  `AgentExecutor` clásico.
- La guía oficial de agentes está en la
  [documentación de LangChain](https://python.langchain.com/docs/how_to/agent_executor/).

:::tip
Este es un ejemplo de referencia. Si el área ya tiene un proyecto real con
un agente en LangChain, enlázalo aquí en lugar de (o además de) este ejemplo.
:::
