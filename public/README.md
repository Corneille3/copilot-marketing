# Public assets

The page renders fine without any of these — gradient placeholders fill in. Drop real assets when ready.

## Hero video (optional but recommended)

The Hero component currently uses the gradient placeholder. To enable real video:

1. Drop `hero-bg.mp4`, `hero-bg.webm`, and `hero-poster.jpg` into this folder
2. Open `components/landing/Hero.tsx`
3. Find the comment `{/* To use a real video... uncomment: */}`
4. Uncomment the `<video>` element above the gradient placeholder

| File | Format | Spec |
|---|---|---|
| `hero-bg.mp4` | H.264 MP4 | 1920×1080, 3–6s loop, < 2 MB |
| `hero-bg.webm` | VP9 WebM | 1920×1080, < 1.5 MB |
| `hero-poster.jpg` | JPG | 1920×1080, < 200 KB |

### ffmpeg encoding

```bash
ffmpeg -i source.mov -vf "scale=1920:-2,fps=24" -c:v libx264 -crf 28 -preset slow \
  -movflags +faststart -an hero-bg.mp4

ffmpeg -i source.mov -vf "scale=1920:-2,fps=24" -c:v libvpx-vp9 -crf 35 -b:v 0 \
  -an hero-bg.webm

ffmpeg -i hero-bg.mp4 -ss 00:00:02 -frames:v 1 -q:v 4 hero-poster.jpg
```

## Image-band assets (Security, Isolation, Residency)

See `IMAGES.md` in this folder for Midjourney prompts. Drop the three images here:

- `security.jpg` (2000×1400)
- `tenant-isolation.jpg` (2000×1400)
- `canadian-residency.jpg` (2000×1400)

Then update the corresponding `Splits.tsx` component to use `<img>` or background-image referencing these files. Currently using gradient placeholders.

## Social preview

- `og-image.png` (1200×630) — built in Figma, not generated. See IMAGES.md.

## Icons

- `favicon.ico` (32×32)
- `icon.png` (512×512)
- `apple-icon.png` (180×180)

Next.js auto-uses these if placed at the root of `/app` or `/public`.
