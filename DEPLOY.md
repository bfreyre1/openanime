# Deploy — GitHub, Vercel, GoDaddy

## 1. GitHub CLI login (once)

PowerShell:

```powershell
gh auth login
```

Choose:

- **GitHub.com**
- **HTTPS**
- **Login with a web browser** (easiest)
- Copy the one-time code → authorize in browser

Verify:

```powershell
gh auth status
```

## 2. Create repo and push

From `C:\Users\Fleet9\Projects\openanime` (already committed locally):

```powershell
cd C:\Users\Fleet9\Projects\openanime

gh repo create openanime --public --source=. --remote=origin --push
```

If remote already exists but repo was missing:

```powershell
gh repo create bfreyre1/openanime --public --confirm
git push -u origin main
```

Repo URL: https://github.com/bfreyre1/openanime

## 3. Vercel

1. Go to [vercel.com](https://vercel.com) → **Add New Project**
2. Import **bfreyre1/openanime** from GitHub
3. Framework: **Next.js** (auto-detected)
4. Deploy (no env vars needed for v1)

### Add domains in Vercel

Project → **Settings** → **Domains** → add each:

| Domain | Notes |
|--------|--------|
| `openanime.com` | Primary |
| `www.openanime.com` | Vercel may auto-suggest redirect to apex |
| `openanimeai.com` | Redirects to openanime.com via `next.config.ts` |
| `www.openanimeai.com` | Same |

Vercel shows **DNS records** for each — use those in GoDaddy (step 4).

## 4. GoDaddy DNS

For **each domain** (`openanime.com`, `openanimeai.com`):

1. GoDaddy → **My Products** → domain → **DNS** → **Manage DNS**
2. Remove conflicting old **A** / **CNAME** for `@` and `www` if pointing elsewhere
3. Add records Vercel shows. Typical setup:

### Apex (root) — `openanime.com` and `openanimeai.com`

| Type | Name | Value | TTL |
|------|------|-------|-----|
| **A** | `@` | `76.76.21.21` | 600 (or default) |

(Vercel may show `216.150.1.1` on newer projects — **use the IP Vercel displays** for your project.)

### WWW

| Type | Name | Value | TTL |
|------|------|-------|-----|
| **CNAME** | `www` | `cname.vercel-dns.com` | 600 |

Repeat for **openanimeai.com** (same A + CNAME for www).

4. Save → wait 5–30 min (sometimes up to 48h; usually fast)
5. In Vercel, domains should show **Valid Configuration**

### SSL

Vercel provisions HTTPS automatically once DNS propagates.

## 5. Publish first video

```powershell
# Copy mp4 from RunPod to PC first, then:
cd C:\Users\Fleet9\Projects\openclaw-canon

bash scripts/publish-to-openanime.sh "C:\path\to\nova-anim-v1.mp4" `
  --id nova-anim-v1 `
  --title "Nova — Midnight Glitch Run (anim)" `
  --character nova `
  --episode EP01

cd C:\Users\Fleet9\Projects\openanime
git add public/media data/gallery.json
git commit -m "Publish nova-anim-v1"
git push
```

Vercel auto-deploys → https://openanime.com/gallery/nova-anim-v1

## 6. Alfred

After live, large videos: post `https://openanime.com/gallery/<id>` in `#glitch-crew`.

## Troubleshooting

| Issue | Fix |
|-------|-----|
| `Repository not found` | Run `gh repo create` (step 2) |
| GoDaddy "Parked" page | Remove parking A record; use Vercel A only |
| www works, apex doesn't | Check `@` A record matches Vercel IP |
| openanimeai shows wrong site | Add domain in Vercel project + DNS for that domain too |
