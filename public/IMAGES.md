# ComplianceIQ — Image generation guide

Aesthetic: **editorial archive** — *The Gentlewoman / Cereal / Kinfolk* photography energy. Warm, restrained, paper-and-architecture, never tech-y. Connects new AI to centuries of regulatory tradition.

---

## How to use this guide

1. Run all 9 prompts in **one Midjourney session, back-to-back**, so style settings stay consistent
2. Generate 4 variants per prompt → upscale your favourite
3. If a result has people/faces in it, regenerate (Midjourney sometimes ignores `no people`)
4. Export final images at the dimensions listed
5. Compress JPGs to ~82% quality with a tool like Squoosh or ImageOptim — target < 300 KB each
6. Drop into `/public` with the exact filenames listed

---

## The locked style suffix

Append this to **every prompt** below (already included in each):

```
cream and deep graphite palette with warm sienna accents,
shot on Hasselblad medium format, shallow depth of field,
editorial archive photography, The Gentlewoman magazine aesthetic,
no people, no faces, asymmetric composition,
generous negative space, soft directional warm tungsten light,
slight film grain, single dominant subject
--style raw --stylize 250 --v 6
```

**Why these constants matter:** Midjourney's style consistency comes from repeated phrases. Changing 80% of a prompt = inconsistent output. Changing 20% = a coherent visual world.

---

## What to never include in prompts

These produce generic SaaS results that will hurt the page:

- ❌ "AI", "artificial intelligence", "machine learning", "neural network"
- ❌ "Modern", "futuristic", "high-tech", "innovative"
- ❌ "Compliance", "legal", "professional", "corporate"
- ❌ "Dashboard", "interface", "screen", "UI"
- ❌ "Canada", "Canadian", "maple leaf", "snow"
- ❌ "Diverse team", "office workers", "executives"
- ❌ Anyone in business attire

Talk in *materials, light, objects, mood*. Let the image carry the symbolism.

---

## The 9 image prompts

### 1. `hero-poster.jpg` — Hero static fallback (1920×1080, --ar 16:9)

```
Overhead view of a partially closed leather portfolio
on a warm cream desk surface, a single fountain pen resting beside it,
soft golden afternoon light from the left casting long shadows,
worn leather texture and aged cream paper visible at the edge,
cream and deep graphite palette with warm sienna accents,
shot on Hasselblad medium format, shallow depth of field,
editorial archive photography, The Gentlewoman magazine aesthetic,
no people, no faces, asymmetric composition,
generous negative space, soft directional warm tungsten light,
slight film grain, single dominant subject
--ar 16:9 --style raw --stylize 250 --v 6
```

**Use:** Static fallback image shown when video isn't available, on slow connections, or when user has `prefers-reduced-motion`. Should be cinematic and beautiful as a still — not just "a video frame."

---

### 2. `hero-bg.mp4` — Hero background video (1920×1080, 3–6 second loop)

Midjourney doesn't generate video. Three options:

**Option A — Generate stills, animate in After Effects/CapCut**
Generate 3–4 stills using the hero-poster prompt above with subtle variations (slightly different pen position, slightly different light angle), then cross-fade between them with a 6-second loop in any video editor.

**Option B — Use Runway or Pika to animate one still**
Take the hero-poster image, feed it to Runway/Pika with prompt: `subtle ambient motion, slow pan right, dust motes drifting in light, no major movement, loopable`. Cost: ~$5 for a usable clip.

**Option C — Free stock footage matching the aesthetic**
Search Pexels/Coverr/Mixkit for: `golden hour paper`, `slow motion ink`, `desk light shadow`. Slower-paced ambient clips work best. Look for warm tungsten lighting only.

Encoding: see `public/README.md` for ffmpeg commands. Target < 2 MB.

---

### 3. `product-preview.png` — Hero foreground card (1400×1000)

**Use a real screenshot of ComplianceIQ if at all possible** — the live product UI is more credible than any generated image.

If no real screenshot exists yet, fall back to a placeholder mock made in Figma, not a Midjourney generation. Generated UI screenshots look fake on close inspection (text gibberish, broken layouts) and break trust.

---

### 4. `security.jpg` — Section 03 / Security (2000×1400, --ar 10:7)

```
Overhead view of an antique brass key resting on the open page
of a leather-bound ledger book, the page filled with hand-written
columns of figures in dark ink on cream paper, soft warm tungsten
light from the upper left casting the key's shadow across the entries,
worn leather edges visible, cream and deep graphite palette with
warm sienna accents, shot on Hasselblad medium format, shallow depth
of field, editorial archive photography, The Gentlewoman magazine
aesthetic, no people, no faces, asymmetric composition, generous
negative space, soft directional warm tungsten light, slight film grain,
single dominant subject
--ar 10:7 --style raw --stylize 250 --v 6
```

**Why this works:** "Vault, not chatbot" — the key + ledger conveys *guarded record-keeping* without resorting to a literal vault door (which Midjourney does poorly and reads as cliché). Editorial. Warm. Trustworthy.

---

### 5. `tenant-isolation.jpg` — Section 04 / Tenant isolation (2000×1400, --ar 10:7)

```
Overhead view of three identical leather portfolios arranged in a
precise row on a long wooden library table, each portfolio closed
and tied with a thin sienna ribbon, separated by equal spacing,
each casting its own shadow in warm afternoon light from a high window,
warm wood grain and cream marble inlay visible, cream and deep graphite
palette with warm sienna accents, shot on Hasselblad medium format,
shallow depth of field, editorial archive photography, The Gentlewoman
magazine aesthetic, no people, no faces, asymmetric composition,
generous negative space, soft directional warm tungsten light, slight
film grain, single dominant subject
--ar 10:7 --style raw --stylize 250 --v 6
```

**Why this works:** Three identical, separated objects in a row = perfect visual metaphor for tenant isolation. The sienna ribbons tie back to your accent color. Reads instantly without explanation.

---

### 6. `canadian-residency.jpg` — Section 05 / Data residency (2000×1400, --ar 10:7)

```
Close-up overhead view of a vintage globe tilted slightly,
focus on the northern hemisphere, soft pool of warm tungsten light
illuminating only one region while the rest falls into deep shadow,
brass meridian ring catching a single highlight, aged paper texture
of the globe surface visible, sitting on a worn wooden desk surface,
cream and deep graphite palette with warm sienna accents, shot on
Hasselblad medium format, shallow depth of field, editorial archive
photography, The Gentlewoman magazine aesthetic, no people, no faces,
asymmetric composition, generous negative space, soft directional warm
tungsten light, slight film grain, single dominant subject
--ar 10:7 --style raw --stylize 250 --v 6
```

**Why this works:** "Hosted in Canada, stays in Canada" — a globe with a single illuminated region conveys geographic specificity without needing maple leaves or maps. The "lit region in darkness" suggests *contained, defined territory* — exactly what data residency means.

---

### 7. `authority-retrieval.jpg` — How-it-works step ii (2000×1400, --ar 10:7)

```
Top-down view of a stack of weathered leather-bound legal volumes
on a warm wooden desk, books arranged largest at bottom and smallest
at top forming a deliberate hierarchy, the topmost book slightly
askew with a sienna silk bookmark ribbon trailing out from its pages,
single beam of golden afternoon light striking the bookmark, deep
shadows surrounding the stack, cream and deep graphite palette with
warm sienna accents, shot on Hasselblad medium format, shallow depth
of field, editorial archive photography, The Gentlewoman magazine
aesthetic, no people, no faces, asymmetric composition, generous
negative space, soft directional warm tungsten light, slight film grain,
single dominant subject
--ar 10:7 --style raw --stylize 250 --v 6
```

**Why this works:** "Authority-aware retrieval" — a hierarchical stack with one book *selected* (the bookmark) is the perfect metaphor. The largest/oldest at the bottom = statutes; the smallest/newest at top = recent guidance.

---

### 8. `citations.jpg` — How-it-works step iii / general use (2000×1400, --ar 10:7)

```
Close-up macro view of a fountain pen mid-stroke underlining a single
phrase on a cream-coloured document, the underline drawn in deep
sienna ink, small precise handwritten margin notes visible in the
same hand alongside, warm desk lamp light from the right casting the
pen's shadow across the page, cream paper texture clearly visible,
cream and deep graphite palette with warm sienna accents, shot on
Hasselblad medium format, shallow depth of field, editorial archive
photography, The Gentlewoman magazine aesthetic, no people visible
beyond a single hand, no faces, asymmetric composition, generous
negative space, soft directional warm tungsten light, slight film
grain, single dominant subject
--ar 10:7 --style raw --stylize 250 --v 6
```

**Note on the hand:** This is the only prompt where a single hand is acceptable — it's the universal symbol for *evidence and annotation*. Make sure Midjourney returns a hand from the wrist down only, never an arm, never a face.

**Why this works:** "Cited answers, every time" — the act of underlining and annotating is what compliance professionals actually do. Direct, recognisable, dignified.

---

### 9. `audit-trail.jpg` — Optional / for blog or future use (2000×1400, --ar 10:7)

```
Close-up overhead view of an open ledger book filled with timestamped
hand-written entries in dark ink on cream paper, each line precise and
dated, a silver pen resting in the gutter, soft morning window light
from the upper left, slight wear visible at the edges of the pages,
cream and deep graphite palette with warm sienna accents, shot on
Hasselblad medium format, shallow depth of field, editorial archive
photography, The Gentlewoman magazine aesthetic, no people, no faces,
asymmetric composition, generous negative space, soft directional warm
tungsten light, slight film grain, single dominant subject
--ar 10:7 --style raw --stylize 250 --v 6
```

**Use:** Optional fourth band, blog post header, or future "Audit trail" feature page.

---

### 10. `og-image.png` — Social sharing preview (1200×630)

**Don't generate this in Midjourney.** Build it in Figma or any vector tool:

- Cream background (#F5F1E8)
- Centred wordmark: **Compliance*IQ*** in Fraunces, 96pt, the "IQ" italicized in sienna (#B84A2E)
- Below the wordmark, a thin sienna underline 240px wide
- Below that: tagline in IBM Plex Mono 14pt: `Grounded AI research for regulated firms · Canadian-hosted`
- Generous padding all around

This is what shows when someone shares the link on LinkedIn/Slack/X. A type-only social card looks far more credible than any photo or generated image at this size.

---

## What success looks like

Open all 9 final images in a single grid view (Photos, Lightroom, Figma board). Ask yourself:

- **Do they look like they're from one photoshoot?** If 8 are warm and 1 is cool, regenerate the cool one.
- **Do they have a consistent depth of field?** All should have shallow focus, no crisp-everywhere shots.
- **Are any "obviously AI"?** Watch for: too-perfect symmetry, melting object edges, gibberish text on documents.
- **Could this run in a Sotheby's catalog or a high-end law firm's annual report?** That's the bar.

If yes to all four, ship them.

---

## File checklist

Drop these into `/public/`:

- [ ] `hero-poster.jpg` (1920×1080)
- [ ] `hero-bg.mp4` + `hero-bg.webm` (1920×1080, 3–6s loop)
- [ ] `product-preview.png` (1400×1000) — real screenshot, not generated
- [ ] `security.jpg` (2000×1400)
- [ ] `tenant-isolation.jpg` (2000×1400)
- [ ] `canadian-residency.jpg` (2000×1400)
- [ ] `authority-retrieval.jpg` (2000×1400) — used in How-it-works section
- [ ] `citations.jpg` (2000×1400) — used in How-it-works section
- [ ] `audit-trail.jpg` (2000×1400) — optional
- [ ] `og-image.png` (1200×630) — built in Figma, not Midjourney
- [ ] `favicon.ico` (32×32)
- [ ] `icon.png` (512×512)
- [ ] `apple-icon.png` (180×180)
