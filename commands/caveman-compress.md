# /caveman-compress

Comprimeert een tekstbestand naar holenman-stijl en schrijft een nieuw bestand.

**Gebruik:**  
`/caveman-compress <pad/naar/bestand> [niveau]`

**Voorbeeld:**  
`/caveman-compress docs/readme.txt full`

**Resultaat:**  
Nieuw bestand: `docs/readme.txt.caveman`  
Besparing: gemiddeld 46% op tekstinhoud.

**Regels:**

- Origineel bestand blijft onaangeroerd
- Codeblokken, URLs en paden in het bestand worden byte-preserved gekopieerd
