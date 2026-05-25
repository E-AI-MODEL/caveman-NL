# caveman-NL – Praat als holenman

Mond klein, brein groot.  
Holenman-praat snijdt alleen **output-tokens**, nooit jouw redenering.  
Code, URLs en paden blijven letterlijk.

## Wat dit is

Een Nederlandstalige variant op de originele [caveman](https://github.com/JuliusBrussee/caveman) van Julius Brussee.  
Deze repo vertaalt en past het idee toe voor Nederlandstalig gebruik, met behoud van het uitgangspunt: minder outputwoorden, zelfde technische scherpte.

## Snel starten

```bash
npx -y github:E-AI-MODEL/caveman-NL -- --with-init
```

Dit kopieert de skill naar:

```text
~/.caveman-nl/skills/caveman-nl/SKILL.md
```

Met `--with-init` schrijft de installer ook een blok naar `AGENTS.md` in je huidige repo.

Daarna kun je in je agent gebruiken:

```text
/caveman
```

Of:

```text
holenman aan
```

Stop met:

```text
/caveman off
```

## Lokaal installeren

```bash
git clone https://github.com/E-AI-MODEL/caveman-NL.git
cd caveman-NL
node bin/install.js --with-init
```

Windows PowerShell:

```powershell
npx -y github:E-AI-MODEL/caveman-NL -- --with-init
```

Verwijderen:

```bash
npx -y github:E-AI-MODEL/caveman-NL -- --uninstall
```

## Wat zit erin?

- `SKILL.md` – echte skill-entrypoint met YAML-frontmatter
- `bin/install.js` – Node-installer
- `install.sh` en `install.ps1` – lokale shims
- `package.json` – npx/bin metadata
- `commands/` – commanddocumentatie
- `mcp-middleware/caveman-shrink.js` – simpele MCP-description-compressor
- `hooks/session-hook.sh` – simpele shell-hook
- `ssot/caveman-core.yaml` – specificatie

## Niveaus

- `/caveman lite` – kort en professioneel
- `/caveman` – telegramstijl, standaard
- `/caveman ultra` – maximaal kort
- `/caveman wenyan` – klassiek Chinees waar passend

## Let op

Deze installer is eenvoudiger dan de originele caveman-installer. Hij doet geen volledige auto-detectie van alle agents. Hij maakt de skill praktisch bruikbaar via een lokaal skillbestand en optioneel via `AGENTS.md`.

## Tokenbesparing

De originele caveman-repo claimt ongeveer **75% minder output-tokens**.  
Deze NL-variant gebruikt dat als richtpunt, maar meet eigen resultaten nog niet automatisch.

## Credits

- Originele maker en repo: [Julius Brussee – caveman](https://github.com/JuliusBrussee/caveman)
- NL-variant en onderwijslaag: deze repo's
- Inspiratie: holbewoners, overal.
