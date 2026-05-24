# /caveman-review

Comprimeert een pull-request-review naar holenman-stijl.

**Gebruik:**  
Voer review-tekst in na `/caveman-review`.

**Voor:**

```text
Goed werk over het algemeen! Ik zou alleen aanraden om de error handling
rond regel 34 iets robuuster te maken, misschien een try-catch toevoegen
om onverwachte crashes te voorkomen. En kijk nog even naar de
naamgeving van de variabele tmp op regel 57, die mag wat duidelijker.
```

**Na (speer):**

```text
r34: error handling → try-catch nodig.
r57: tmp onduidelijk → hernoemen.
```
