# caveman-NL – Praat als holenman

Mond klein, brein groot.  
Holenman-praat snijdt alleen **output-tokens**, nooit jouw redenering.  
Code, URLs en paden blijven letterlijk.  

## Wat dit is

Een Nederlandstalige variant op de originele [caveman](https://github.com/JuliusBrussee/caveman) van Julius Brussee.  
Deze repo vertaalt en past het idee toe voor Nederlandstalig gebruik, met behoud van het uitgangspunt: minder outputwoorden, zelfde technische scherpte.

Dit is de **Nederlandstalige v2** met:

- **4 niveaus**: vuur (lite), speer (full), rots (ultra), wenyan (klassiek Chinees)
- **5 slash-commando's**: `/caveman`, `/caveman-commit`, `/caveman-review`, `/caveman-stats`, `/caveman-compress`
- **Hook-architectuur**: automatisch starten via `.caveman-session` bestand
- **MCP-middleware**: `caveman-shrink` comprimeert tool descriptions
- **Statusbadge**: `[HOLENMAN] ⛏ 12.4k`

## Structuur

```text
caveman-NL/
├── ssot/
│   └── caveman-core.yaml
├── skill-caveman-nl.md
├── commands/
│   ├── caveman.md
│   ├── caveman-commit.md
│   ├── caveman-review.md
│   ├── caveman-stats.md
│   └── caveman-compress.md
├── mcp-middleware/
│   └── caveman-shrink.js
├── hooks/
│   └── session-hook.sh
└── README.md
```

## Installatie

1. Clone deze repo.
2. Voeg de skill `skill-caveman-nl.md` toe aan je LLM-interface.
3. Optioneel: source `hooks/session-hook.sh` in je shell voor automatische activatie.
4. Optioneel: gebruik `mcp-middleware/caveman-shrink.js` om MCP-tool descriptions te verkleinen.

## Gebruik

Typ `/caveman` of zeg *“praat als holenman”*.  
Kies een niveau:

- `/caveman lite` – kortere zinnen, samenhang blijft
- `/caveman` – telegramstijl (standaard)
- `/caveman ultra` – kale kernwoorden
- `/caveman wenyan` – klassiek Chinees

Stop met `normal mode` of `/caveman off`.

## Tokenbesparing

De originele caveman-repo claimt ongeveer **75% minder output-tokens**.  
Deze NL-variant gebruikt dat als richtpunt, maar meet eigen resultaten nog niet automatisch.

## Credits

- Originele maker en repo: [Julius Brussee – caveman](https://github.com/JuliusBrussee/caveman)
- NL-variant en onderwijslaag: deze repo's
- Inspiratie: holbewoners, overal.
