---
title: 'Building Your First AI Agent: A Step-by-Step Guide'
pubDatetime: 2024-12-31
description: 'A comprehensive guide to creating your first AI agent using Python, phidata, and ollama.'
author: 'AI Development Specialist'
image:
    url: 'https://docs.astro.build/assets/ai-development.webp'
    alt: 'A visualization of artificial intelligence concepts.'
tags: ["artificial intelligence", "python", "ollama", "phidata", "development"]
---

# Building Your First AI Agent: A Step-by-Step Guide

Creating your first AI agent marks an exciting step into the world of artificial intelligence development. This guide will walk you through the process of setting up a Hello World AI agent using Python, with the phidata library and ollama as our LLM provider.

## Prerequisites

Before we begin, ensure you have Python installed on your system. Our agent will utilize ollama as the language model provider, which needs to be installed separately. Visit ollama.com/download to obtain the appropriate version for your system.

## Environment Setup

The initial step involves creating and configuring your development environment. We'll establish a dedicated virtual environment to maintain clean dependency management.

### Creating Your Virtual Environment

First, open your terminal or command prompt and create a new virtual environment:

```python
python3 -m venv ./aienv
```

### Activating the Environment

Depending on your operating system, activate the virtual environment using one of these commands:

For Windows:
```bash
.\aienv\Scripts\activate
```

For macOS/Linux:
```bash
source ./aienv/bin/activate
```

### Installing Dependencies

With your virtual environment activated, install the required packages:

```bash
pip3 install -r requirements.txt
```

## Implementing the Agent

Our Hello World agent implementation demonstrates the fundamental concepts of AI agent development. Here's the complete implementation:

```python
from phi.agent import Agent
from phi.model.ollama import Ollama

hello_world_agent = Agent(
    model=Ollama(id="llama3"),
    description="Hello World Agent, give me a brief introduction to GenAI and Traditional AI for beginners and enthusiasts",
)
hello_world_agent.print_response("Educate the user about the world of GenAI and Traditional AI", stream=True)
```

## Running Your Agent

Execute these steps to run your agent:

1. Ensure ollama is running locally:
```bash
ollama run llama3
```

2. Activate your virtual environment (if not already active):
```bash
source ./aienv/bin/activate
```

3. Launch your agent:
```bash
python3 agent.py
```

## Next Steps

With your Hello World AI agent operational, you can explore various customization options. Consider experimenting with different prompts, adjusting the agent's description, or implementing additional functionality based on your specific requirements.

The foundation you've built here serves as a stepping stone for developing more sophisticated AI agents. As you become more comfortable with the basics, you can explore advanced features such as memory management, tool integration, and complex conversation handling.