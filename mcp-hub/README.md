# MCP Hub

A centralized hub for managing and connecting to multiple MCP (Model Context Protocol) servers.

## Services

- **mcphub**: Central MCP server management dashboard with web interface

## Ports

- `3000`: MCP Hub web dashboard

## Usage

```bash
make docker-up
```

## Access

- MCP Hub Dashboard: http://localhost:3000
- Default credentials: `admin` / `admin123`

## Configuration

The hub is configured via `mcp.json` which defines available MCP servers:

```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": ["@playwright/mcp@latest", "--headless"]
    },
    "fetch": {
      "command": "uvx",
      "args": ["mcp-server-fetch"]
    }
  }
}
```

Data is persisted in the `./data` directory.

## MCP

```json
{
  "mcpServers": {
    "mcphub": {
      "url": "http://0.0.0.0:3000/mcp"
    }
  }
}
```
