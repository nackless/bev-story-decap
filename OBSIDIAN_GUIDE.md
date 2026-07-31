# Obsidian Blogging Guide & Templates

This guide explains how to write blog posts in **Obsidian** for your Astro blog, including custom layout components and standard templates.

---

## 1. File Extension & Location

- Save your post files inside `src/content/posts/` in your project folder.
- Use either `.md` or `.mdx` extension.
- **Tip for Obsidian**: Save Obsidian templates as `.mdx` or `.md` files.

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

import MediaTextLeft from '../../components/MediaTextLeft.astro';
import MediaTextRight from '../../components/MediaTextRight.astro';

Write your introductory paragraph here. Simply press **Enter** to create a blank line between paragraphs, and it will render with clean, automatic vertical spacing on your blog.

## Section Heading

Second paragraph goes here. You can use standard Markdown formatting like **bold text**, *italics*, [links](https://example.com), and lists.

```

---

## 3. Custom Layout Components

### MediaTextLeft (Image on Left, Text on Right)

Use this block whenever you want an image placed on the left side of your text block:

```mdx
<MediaTextLeft 
  image="/uploads/sample.jpg" 
  alt="Sample description"
  caption="Optional image caption goes here"
  width="45%"
  borderRadius="12px"
>

This is the paragraph text sitting to the right of the image. 

You can write multiple paragraphs inside the block, and the height will automatically scale proportionally without distorting the image.

</MediaTextLeft>
```

### MediaTextRight (Text on Left, Image on Right)

Use this block whenever you want an image placed on the right side of your text block:

```mdx
<MediaTextRight 
  image="/uploads/sample.jpg" 
  alt="Sample description"
  caption="Optional image caption goes here"
  width="40%"
  borderRadius="8px"
  aspectRatio="1/1"
>

This is the paragraph text sitting to the left of the image. 

On mobile devices, this component automatically stacks vertically so your readers always get an optimal reading experience!

</MediaTextRight>
```

---

## 4. Component Options Reference

| Prop | Type | Default | Description | Example |
| :--- | :--- | :--- | :--- | :--- |
| `image` | `string` | **Required** | Path to image (URL or `/uploads/...`) | `image="/uploads/coffee.jpg"` |
| `alt` | `string` | `""` | Alt text for accessibility | `alt="A warm cup of coffee"` |
| `caption` | `string` | `undefined` | Optional caption text under image | `caption="Photo taken in Rome"` |
| `width` | `string` | `"45%"` | Image width relative to container | `width="35%"` or `width="300px"` |
| `borderRadius` | `string\|number` | `"8px"` | Border radius on image corners | `borderRadius="16px"` or `borderRadius="50%"` |
| `aspectRatio` | `string` | `undefined` | Optional fixed aspect ratio | `aspectRatio="16/9"` or `aspectRatio="1/1"` |
| `gap` | `string` | `"1.5rem"` | Spacing between image & text | `gap="2rem"` |

---

## 5. Paragraph Spacing Rule

- **Single Enter / Blank line in Obsidian**: Translates automatically to `1.5rem` bottom margin between paragraphs on the blog. No manual `<br>` tags needed!
