# Atlassian AI

This repository has a prepared configuration for controlling Atlassian with prompts.

## Config

1. MCP servers at `.cursor/mcp.json`.

## Usage

1. Start the MCP server via `make docker-up`.
2. Use Cursor, Claude or other MCP clients.

    ```json
    {
        "mcpServers": {
            "atlassian": {
                "url": "http://0.0.0.0:19000/mcp"
            }
        }
    }
    ```

3. Pick a prompt from `prompts` folder.
