# Fuel — Ernährung & Training

Persönliche PWA: Ernährungsempfehlungen passend zum eigenen Kühlschrank (vor/nach dem Training) + einfacher Trainings-Log.

## Lokal starten

```bash
npm install
npm run dev
```

Dann die angezeigte `http://localhost:5173` im Browser öffnen.

## Für's Handy testen (im gleichen WLAN)

```bash
npm run dev -- --host
```

Zeigt eine `http://192.168.x.x:5173` Adresse an, die auf dem Handy im gleichen WLAN erreichbar ist.

## Deployment (öffentlicher Link zum Teilen)

```bash
npx vercel
```

Folgt den Prompts (Login, Projekt bestätigen) — danach gibt es einen öffentlichen Link wie `https://fuel-xyz.vercel.app`, den man an jeden schicken kann. Auf dem iPhone: Link in Safari öffnen → Teilen-Button → "Zum Home-Bildschirm". Auf Android: Chrome zeigt automatisch "App installieren" an.

Jeder `git push` bzw. `vercel --prod` danach aktualisiert den Link automatisch.
