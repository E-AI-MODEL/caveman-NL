#!/bin/bash
# session-hook.sh – start holenman-modus automatisch als .caveman-session bestaat.
# Plaats dit in je .bashrc of .zshrc als: source /pad/naar/session-hook.sh

caveman_hook() {
  if [[ -f ".caveman-session" ]]; then
    export CAVEMAN_MODE="full"
    echo "[HOLENMAN] ⛏ Automatische holenman-modus gestart (speer)."
    # hier zou je jouw LLM-client kunnen aanroepen met de CAVEMAN_MODE variabele
  fi
}

# Indien interactieve shell
if [[ $- == *i* ]]; then
  caveman_hook
fi
