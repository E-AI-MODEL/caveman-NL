# Install caveman-NL

Deze repo is een Nederlandstalige variant op `JuliusBrussee/caveman`.

## Snel installeren

```bash
npx -y github:E-AI-MODEL/caveman-NL -- --with-init
```

Of na clonen:

```bash
git clone https://github.com/E-AI-MODEL/caveman-NL.git
cd caveman-NL
node bin/install.js --with-init
```

Windows PowerShell:

```powershell
npx -y github:E-AI-MODEL/caveman-NL -- --with-init
```

## Wat gebeurt er?

- `SKILL.md` wordt gekopieerd naar `~/.caveman-nl/skills/caveman-nl/SKILL.md`.
- Met `--with-init` wordt een blok toegevoegd aan `AGENTS.md` in de huidige repo.
- Agents die `AGENTS.md` lezen krijgen zo de activatieregel mee.

## Gebruik

Typ in je agent:

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

of:

```text
normaal doen
```

## Verifiëren

```bash
cat ~/.caveman-nl/skills/caveman-nl/SKILL.md
```

Check ook of `AGENTS.md` een blok bevat tussen:

```text
<!-- caveman-nl-begin -->
<!-- caveman-nl-end -->
```

## Verwijderen

```bash
npx -y github:E-AI-MODEL/caveman-NL -- --uninstall
```

Of lokaal:

```bash
node bin/install.js --uninstall
```

## Let op

Deze installer is bewust eenvoudiger dan de originele caveman-installer. Hij doet geen volledige auto-detectie van alle agents. Hij maakt de skill bruikbaar via een lokaal skillbestand en optioneel via `AGENTS.md`.
