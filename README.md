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

## Publish media (canon pipeline — use this)

**Do not** hand-drop MP4-only entries. Use the canon script so every video gets **poster + `{id}-web.mp4` + `srcWeb`**.

Standards checklist: `openclaw-canon/modules/glitch-crew/OPENANIME-PUBLISH-STANDARDS.md`

```bash
bash ~/Projects/openclaw-canon/scripts/publish-to-openanime.sh \
  /path/to/approved.mp4 \
  --id nova-anim-v1 --title "Nova — rooftop anim" --character nova --episode EP01 \
  --poster /path/to/scene-still.jpg
```

Push **from PC** after publish (RunPod: encode there, SCP, then push):

```powershell
cd C:\Users\Fleet9\Projects\openanime
git add data\gallery.json public\media\<id>.*
git commit -m "Publish <id>"
git push origin main
```

Backfill all web encodes (one-time / policy change):

```bash
OPENANIME_REPO=/root/openanime bash /workspace/openclaw/canon/scripts/backfill-openanime-web-videos.sh
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
