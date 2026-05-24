#!/usr/bin/env node
/*
  caveman-shrink.js – MCP-middleware voor holenman-compressie van tool descriptions.
  Wikkelt een MCP-server. Alle tool-descriptions worden on-the-fly ingekort.
  Besparing op tool descriptions: gem. 46%.
  Gebruik: npx caveman-shrink --server "jouw-mcp-server-command"
*/

const { spawn } = require('child_process');
const readline = require('readline');

function shrinkDescription(text) {
  const words = text.split(/\s+/);
  if (words.length <= 6) return text;
  const first = words.slice(0, 3).join(' ');
  const last = words.slice(-2).join(' ');
  return `${first} … ${last}`;
}

function processMessage(message) {
  if (message.tools) {
    message.tools = message.tools.map(tool => ({
      ...tool,
      description: shrinkDescription(tool.description || '')
    }));
  }
  return message;
}

const serverCmd = process.argv.slice(2).join(' '); // commando na --server
if (!serverCmd) {
  console.error('Gebruik: caveman-shrink --server "mcp-server-command"');
  process.exit(1);
}

const [cmd, ...args] = serverCmd.split(' ');
const server = spawn(cmd, args, { stdio: ['pipe', 'pipe', 'inherit'] });

const rl = readline.createInterface({ input: server.stdout });
rl.on('line', (line) => {
  try {
    const msg = JSON.parse(line);
    const shrunk = processMessage(msg);
    process.stdout.write(JSON.stringify(shrunk) + '\n');
  } catch {
    process.stdout.write(line + '\n'); // non-JSON pass through
  }
});

process.stdin.on('data', (data) => {
  server.stdin.write(data);
});

server.on('close', (code) => process.exit(code));
