# Hero reel: prompts and script

Cleaned-up prompts for regenerating the hero video so it fits the website properly.

**What changed from the original prompts:**
- Name changed from "Leeshark" to Sabarinathan V, and the script rewritten around your real stack and projects.
- Image 1 now matches the video's start frame (head resting on folded arms). Before, it described looking at the camera.
- One style everywhere: **photorealistic**. The old video prompt asked for an "animated illustration" while the images were photoreal, which is why the current clip jumps between a real look and a cartoon look.
- Both frames are composed for **16:9 with you on the right third**, leaving empty red space on the left for the website heading.
- Explicit "no text / no logos / no watermark", so there's no "CREATE FOCUS INSPIRE" sign, no mug text and no Apple logo.

---

## 1. Start frame (Image 1)

> Upload your photo as the face/identity reference.

```
Photorealistic portrait of the man in the reference photo (same face, beard, hairstyle and skin tone),
16:9 landscape frame, subject placed on the RIGHT third of the frame, left two-thirds is empty red background.

He sits behind a modern silver laptop at a glossy reflective red table, wearing premium white over-ear
headphones and a loose white linen shirt with sleeves rolled up. His arms are folded on the table and his
head is resting on his folded arms, face turned slightly toward the camera, eyes open, calm and relaxed.

Bright solid red seamless studio background, soft front softbox lighting, gentle cinematic shadows on the
wall, realistic reflections on the table, natural skin texture, sharp eyes, shallow depth of field,
85mm lens, f/1.8, high-end commercial photoshoot, clean minimal composition.

No text, no signs, no logos (including on the laptop), no mugs, no props other than the laptop and
headphones, no watermark.
```

## 2. End frame (Image 2)

```
Photorealistic portrait of the man in the reference photo (same face, beard, hairstyle, skin tone and
clothing as the previous image), 16:9 landscape frame, subject on the RIGHT third, left two-thirds empty
red background, identical camera position, lighting, table and laptop placement as the previous image.

He now sits upright behind the silver laptop, one hand lightly supporting his chin, the other forearm
resting naturally on the table, wearing white over-ear headphones and the same white linen shirt.
Looking directly into the camera with a calm, confident, intelligent expression.

Bright solid red seamless studio background, soft front softbox lighting, cinematic shadows, glossy red
table with realistic reflections, natural skin texture, sharp eyes, 85mm lens, f/1.8, photorealistic.

No text, no signs, no logos, no extra objects, no watermark.
```

## 3. Video

```
Start frame: Image 1 (head resting on folded arms).
End frame: Image 2 (sitting upright, hand supporting chin).

Style: photorealistic, matching the reference images exactly. Not animated, not illustrated.
Aspect ratio: 16:9 landscape, 1920×1080.
Camera: locked-off static shot. No camera movement, zoom, pan, shake, cuts or transitions.

Motion:
- 0–1 s: resting head on folded arms.
- 1–3 s: slowly and naturally lifts his head and sits upright into the end-frame pose.
- After that: stays in the end-frame pose and speaks to the camera for the rest of the video.

While speaking: steady eye contact, natural blinking, subtle breathing in the chest and shoulders,
small natural head movements, slight eyebrow movement on emphasis, occasional soft smile,
accurate lip sync to the dialogue.

Keep fixed: same seat and position, same face, beard, hair, skin tone, white shirt, headphones,
laptop (completely still), red background and lighting.

Avoid: morphing, warping, face drift, body distortion, extra fingers, pose glitches, floating objects,
sudden movements, stylised effects, text, logos, watermark.
```

**If your tool can't make a 60-second clip in one go:** make the lift-up motion as one short clip
(start → end frame). Then make the talking part as separate clips that all start from the end frame,
and join them. Using the same end frame for every talking clip keeps the cuts invisible.
A lip-sync tool with your own recorded voice also works well for the talking part.

## 4. Video dialogue (≈ 60 seconds, ~150 words)

> Hi, I'm Sabarinathan V, a full stack developer.
>
> I build complete software for businesses: SaaS platforms with multi-tenant architecture, e-commerce stores, and GST billing software made for Indian businesses.
>
> On the frontend I work with React, Next.js and Tailwind CSS. On the backend I use Node.js, .NET Core with C#, and FastAPI with Python, backed by PostgreSQL, MySQL, MS SQL, MongoDB and vector databases for AI features.
>
> My recent work includes TOGZA, an e-commerce store where customers design their own T-shirts; Winq Vision, a creative agency website; and MetroCraft, a corporate site for an infrastructure group.
>
> I use AI tools every day to move faster, but I never compromise on clean code, performance and a great user experience.
>
> If you have an idea, a product or a business that needs software, I'd love to build it with you.
>
> Thanks for visiting my portfolio. Let's create something great together.

## 5. Putting the new video on the site

Export the final reel as MP4 without a watermark, then from the project folder run:

```bash
# Web-friendly MP4 (keeps the voice)
ffmpeg -i reel.mp4 -vf "scale=1920:-2" -c:v libx264 -crf 24 -preset slow -pix_fmt yuv420p \
  -movflags +faststart -c:a aac -b:a 128k "src/assets/hero video/hero.mp4"

# Smaller WebM copy (browsers that support it load this first)
ffmpeg -i reel.mp4 -vf "scale=1920:-2" -c:v libvpx-vp9 -crf 34 -b:v 0 -row-mt 1 \
  -c:a libopus -b:a 96k "src/assets/hero video/hero.webm"

# Poster image shown before the reel is played (pick a frame where you're upright)
ffmpeg -ss 3 -i reel.mp4 -frames:v 1 -vf "scale=1920:-2" "src/assets/hero video/hero-poster.webp"
```

No code changes are needed. The hero detects that the new video is landscape and switches to a
full-screen layout, with the Play Reel button on the right.
