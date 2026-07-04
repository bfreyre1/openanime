# OpenAIAnime

Public home for **Glitch Crew** — gallery, episodes, and AI disclosure.

- **Production site:** [openaianime.com](https://openaianime.com)
- **Short domain:** [openainime.com](https://openainime.com) → redirects to openaianime.com
- **AI disclosure:** [openaianime.com/ai](https://openaianime.com/ai)

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Publish media (from RunPod or PC)

1. Copy approved file to `public/media/` (e.g. `nova-anim-v1.mp4`)
2. Add entry to `data/gallery.json`
3. `git add` → commit → push → Vercel deploys

Or use canon script (after paths configured):

```bash
bash ~/.openclaw/canon/scripts/publish-to-openanime.sh \
  ~/.openclaw/workspace/creative-runtime/gallery/glitch/videos/nova-anim-v1.mp4 \
  --id nova-anim-v1 --title "Nova — rooftop anim" --character nova --episode EP01
```

## Vercel

1. Import GitHub repo `openanime`
2. Add domains: `openaianime.com`, `www.openaianime.com`, `openainime.com`, `www.openainime.com`
3. `openainime.com` redirects via `next.config.ts`

## Repo layout

```
data/gallery.json     ← manifest of published media
data/episodes.json    ← episode summaries
public/media/         ← images + mp4 files
src/app/              ← Next.js pages
```

Canon: `openclaw-canon/modules/glitch-crew/OPENANIME.md`
