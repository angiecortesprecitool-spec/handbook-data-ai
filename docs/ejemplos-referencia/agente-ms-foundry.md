---
sidebar_position: 2
title: Ejemplo - Agente en MS Foundry
---

# Ejemplo: crear un agente en Microsoft Foundry

Microsoft Foundry (Azure AI Foundry) permite crear agentes administrados
dentro de un **proyecto de Azure AI Foundry**, usando el SDK de Python
`azure-ai-projects`.

## Requisitos

- Un proyecto creado en [Azure AI Foundry](https://ai.azure.com/).
- Un modelo desplegado dentro de ese proyecto (ej. `gpt-4o`).
- Dependencias instaladas:

```bash
pip install azure-ai-projects azure-identity
```

## Ejemplo mínimo

```python
from azure.ai.projects import AIProjectClient
from azure.identity import DefaultAzureCredential

# 1. Conectarse al proyecto de Azure AI Foundry
project_client = AIProjectClient.from_connection_string(
    credential=DefaultAzureCredential(),
    conn_str="<connection-string-del-proyecto>",
)

# 2. Crear el agente
agent = project_client.agents.create_agent(
    model="gpt-4o",
    name="agente-ejemplo",
    instructions=(
        "Eres un asistente del área de Data & AI. "
        "Ayudas a responder preguntas sobre nuestros procesos internos."
    ),
    tools=[],  # aquí se agregan herramientas: code interpreter, file search, function calling...
)

# 3. Crear un hilo de conversación y enviar un mensaje
thread = project_client.agents.create_thread()
project_client.agents.create_message(
    thread_id=thread.id,
    role="user",
    content="¿Cómo subo mi proyecto a Azure DevOps?",
)

# 4. Ejecutar el agente sobre el hilo
run = project_client.agents.create_and_process_run(
    thread_id=thread.id,
    agent_id=agent.id,
)

# 5. Leer la respuesta
messages = project_client.agents.list_messages(thread_id=thread.id)
print(messages.data[0].content)
```

## Notas

- El SDK de Azure AI Foundry cambia con frecuencia — antes de usarlo en un
  proyecto real, revisa la versión vigente en la
  [documentación oficial de Azure AI Foundry](https://learn.microsoft.com/azure/ai-foundry/).
- Las herramientas (`tools`) del agente (búsqueda en archivos, ejecución de
  código, llamado a funciones) se configuran en el momento de crearlo, igual
  que en otros frameworks de agentes.

:::tip
Este es un ejemplo de referencia. Si el área ya tiene un proyecto real con
un agente en MS Foundry, enlázalo aquí en lugar de (o además de) este ejemplo.
:::
