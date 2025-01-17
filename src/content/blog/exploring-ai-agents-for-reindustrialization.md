---
title: 'Exploring AI agents to help Reindustrialization'
pubDatetime: 2024-01-17
description: 'A deep dive into implementing an edge-capable log analysis system using Go, NATS, and Language Models for industrial applications.'
author: 'Tobalo Torres-Valderas'
image:
    url: 'https://pbs.twimg.com/media/Ghb3di0XQAAzhXL?format=png&name=900x900'
    alt: 'Architecture diagram of the Gogent distributed log analysis system.'
tags: ["golang", "distributed systems", "LLM", "NATS", "edge computing", "manufacturing"]
---

# Building Distributed Log Analysis Systems with Gogent and LLMs

The intersection of artificial intelligence and industrial operations has created new opportunities for real-time system analysis. Today, we'll explore Gogent, a distributed log analysis system that leverages embedded NATS messaging and LLM-powered agents to process system logs at the edge.

## System Architecture

```mermaid
flowchart
subgraph Manufacturing Site Network
    S[IoT Error Log Producer 1] -->|Publish| Z
    T[IoT Error Log Producer 2] -->|Publish| Z
    Y[IoT Error Log Producer N] -->|Publish| Z
    subgraph Gogent
        subgraph embedded NATS
            Z@{ shape: das, label: "agent.technical.support" }
            U@{ shape: lin-cyl, label: "JetStream Persistence" }
        end
        Z -->|Subscribe| A{Agent Sig}
        E[(Error Log DB)]
        A --> |Retain w/ policy conditions| E
    end
    subgraph LLM Providers
        A -->|Request| L[LLM API]
        L -->|Response| A
        subgraph "Available Providers"
            L1[Ollama (default)]
            L2[OpenAI]
            L3[Azure OpenAI]
            L4[Azure AD]
            L5[Cloudflare Azure]
            L6[Gemini]
            L7[Claude]
            L8[DeepSeek]
        end
    end
end
```

## Core System Components

### Message Queue Infrastructure

The heart of Gogent is its embedded NATS server, which handles message distribution with these key configurations:

```go
const (
    StreamName    = "AGENT_STREAM"
    ConsumerName  = "AGENT_CONSUMER"
    SubjectName   = "agent.technical.support"
    NATSPort      = 4222
)
```

### Agent Configuration

Agents in Gogent are highly configurable through a structured configuration system:

```go
type Config struct {
    APIKey       string    
    NATSUrl      string
    AgentName    string
    Instructions string
    Model        string
    Provider     string    
    DBPath       string    
}
```

### Data Persistence

Gogent uses a SQLite database for storing processed logs and analysis results:

```sql
CREATE TABLE agent_logs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    timestamp TEXT NOT NULL,
    hostname TEXT NOT NULL,
    severity TEXT NOT NULL,
    service TEXT NOT NULL,
    message TEXT NOT NULL,
    context TEXT,
    analysis TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

## Implementation Guide

### Setting Up Your Development Environment

1. Begin by cloning the repository:
```bash
git clone https://github.com/tobalo/gogent.git
cd gogent
```

2. Install the necessary dependencies:
```bash
go mod download
```

3. Configure your environment:
```bash
cp .env.example .env
```

### Containerized Deployment

For production environments, Gogent supports Docker Compose deployment:

```bash
# Start the services
docker-compose up -d

# Monitor logs
docker-compose logs -f

# Stop services
docker-compose down
```

### Message Structure

```go
type LogMessage struct {
    Timestamp string
    Hostname  string
    Severity  string
    Service   string
    Message   string
    Context   map[string]interface{}
}
```

### Testing the System

Test the system by publishing sample log messages:

```bash
nats pub agent.technical.support '{
    "timestamp": "2025-01-15T02:14:23.123Z",
    "hostname": "web-server-01",
    "severity": "ERROR",
    "service": "nginx",
    "message": "Failed to bind to port 80: Address already in use",
    "context": {
        "pid": 1234,
        "user": "www-data"
    }
}'
```

## Best Practices and Considerations

When implementing Gogent in your environment, consider these key points:

1. LLM Provider Selection: Choose between edge-capable solutions like Ollama or cloud providers based on your requirements
2. Message Volume: Monitor agent message load to prevent the known limitation of nil pointer issues above 20 concurrent messages
3. Hardware Requirements: Ensure adequate VRAM when using Ollama for concurrent processing
4. Security: Properly secure API keys and credentials when using cloud LLM providers

## Future Development

The project roadmap includes integration with common industrial and IT tools:

- ServiceNow integration for ticket management
- Jira connectivity for issue tracking 
- Splunk integration for extended log analysis
- Palantir Foundry connectivity for advanced analytics

## Conclusion

Gogent represents a significant step forward in applying AI to industrial operations, particularly in log analysis and error detection. Its architecture provides a blueprint for building scalable, edge-capable systems that can enhance manufacturing productivity through intelligent log analysis.

For more information and detailed implementation guides, visit the [Gogent repository](https://github.com/tobalo/gogent).