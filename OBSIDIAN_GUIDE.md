# Obsidian Blogging Guide & Layout Components

This guide explains how to write blog posts in **Obsidian** for your Astro blog, using custom layout components (`ImageBlock`, `MediaTextLeft`, `MediaTextRight`) and standard templates.

---

## 1. File Extension & Location

- Save your post files inside `src/content/posts/` in your project folder.
- Use `.mdx` or `.md` extension.

---

## 2. Standard Post Template (Obsidian Template)

Copy and paste this snippet into your Obsidian Templates folder (e.g. `Templates/Blog Post.md`):

```markdown
---
title: "Your Post Title Here"
pubDate: 2026-08-01
description: "A brief description of your post for preview cards and SEO."
image: "/uploads/cover-image.jpg"
tags: ["beverage", "story"]
---

import ImageBlock from '../../components/ImageBlock.astro';
import MediaTextLeft from '../../components/MediaTextLeft.astro';
import MediaTextRight from '../../components/MediaTextRight.astro';

Write your introductory paragraph here. Simply press **Enter** to create a blank line between paragraphs, and it will render with clean, automatic vertical spacing on your blog.

<ImageBlock
  src="/uploads/photo.jpg"
  alt="Sample Photo"
  width="wide"
  align="center"
  caption="The pond after the latest cleanup."
/>

## Section Heading

Second paragraph goes here. You can use standard Markdown formatting like **bold text**, *italics*, [links](https://example.com), and lists.
```

---

## 3. Custom Layout Components

### A. ImageBlock (Standalone Centered or Aligned Image)

Use `<ImageBlock />` for all standalone inline images:

```mdx
<ImageBlock
  src="/uploads/post-1/waterfall.jpg"
  alt="Waterfall"
  width="wide"
  align="center"
  caption="The pond after the latest cleanup."
/>
```

#### Presets for `width`:
- `"narrow"`: 50% container width
- `"medium"`: 75% container width
- `"wide"`: 90% container width
- `"full"`: 100% container width (Default)
- Or custom CSS string: `width="400px"` or `width="60%"`

#### Options for `align`:
- `"center"` (Default)
- `"left"`
- `"right"`

---

### B. MediaTextLeft (Image on Left, Text on Right)

```mdx
<MediaTextLeft 
  image="/uploads/sample.jpg" 
  alt="Sample description"
  caption="Optional image caption"
  width="45%"
  borderRadius="12px"
>

This is paragraph text sitting to the right of the image. 

You can write multiple paragraphs inside the block, and the height automatically scales proportionally without distorting the image.

</MediaTextLeft>
```

---

### C. MediaTextRight (Text on Left, Image on Right)

```mdx
<MediaTextRight 
  image="/uploads/sample.jpg" 
  alt="Sample description"
  caption="Optional image caption"
  width="40%"
  borderRadius="8px"
  aspectRatio="1/1"
>

This is paragraph text sitting to the left of the image. 

On mobile devices, this component automatically stacks vertically for an optimal reading experience!

</MediaTextRight>
```

---

## 4. Component Options Reference

| Component | Prop | Type | Default | Description | Example |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **ImageBlock** | `src` / `image` | `string` | **Required** | Image path or URL | `src="/uploads/pic.jpg"` |
| | `alt` | `string` | `""` | Accessibility text | `alt="Waterfall"` |
| | `caption` | `string` | `undefined` | Caption under image | `caption="Morning view"` |
| | `width` | `string` | `"full"` | Preset or custom width | `width="wide"` or `width="500px"` |
| | `align` | `string` | `"center"` | Alignment (`center`, `left`, `right`) | `align="center"` |
| | `borderRadius` | `string\|number` | `"8px"` | Border radius | `borderRadius="12px"` |
| | `aspectRatio` | `string` | `undefined` | Optional fixed aspect ratio | `aspectRatio="16/9"` |
| **MediaTextLeft / Right** | `image` | `string` | **Required** | Image path or URL | `image="/uploads/pic.jpg"` |
| | `width` | `string` | `"45%"` | Image width percentage | `width="40%"` |
| | `borderRadius` | `string\|number` | `"8px"` | Border radius | `borderRadius="12px"` |
| | `gap` | `string` | `"1.5rem"` | Spacing between image & text | `gap="2rem"` |

---

## 5. Paragraph Spacing Rule

- **Single Enter / Blank line in Obsidian**: Translates automatically to `1.5rem` bottom margin between paragraphs on the blog. No manual `<br>` tags needed!
