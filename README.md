# Patrick Booking Site — Versione modulare

La pagina contiene 3 servizi:

1. Incontro dal vivo — €150
2. Incontro online — 60 minuti — €70
3. Incontro online — 120 minuti — €130

## Per cambiare servizi e prezzi

Apri solo:

`services.js`

Ogni servizio ha questa struttura:

```js
{
  id: "online-60",
  name: "Incontro online",
  price: 70,
  duration: "60 minuti",
  tag: "ONLINE",
  description: "Descrizione...",
  calLink: "patrickmazzarol/incontro-online-60",
  featured: false
}
```

Puoi modificare:
- `name`
- `price`
- `duration`
- `tag`
- `description`
- `calLink`
- `featured`

## Collegare Cal.com

Nel file `services.js` sostituisci:

- `YOUR-CAL-LINK-DAL-VIVO`
- `YOUR-CAL-LINK-ONLINE-60`
- `YOUR-CAL-LINK-ONLINE-90`

con il percorso dei tre eventi Cal.com.

Esempio:

```js
calLink: "patrickmazzarol/incontro-online-60"
```

Non inserire `https://cal.com/`.

## Prezzi

Il prezzo mostrato nel sito viene da `services.js`.
Il prezzo effettivamente richiesto al cliente va impostato anche nel corrispondente evento Cal.com/Stripe.

## Pubblicazione GitHub Pages

Carica nella root del repository:

- index.html
- style.css
- services.js
- script.js
- privacy.html
- terms.html

Poi:
Settings → Pages → Deploy from a branch → main → /(root)

## Nota

La durata dell'“Incontro dal vivo” è attualmente indicata come “Durata da concordare”, perché non è stata specificata.
