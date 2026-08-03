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

Write your introductory paragraph here. Press **Enter** to create a blank line between paragraphs and let the blog handle the spacing.

<ImageBlock
  src="/uploads/photo.jpg"
  alt="Sample Photo"
  width="wide"
  align="center"
  caption="Keep the image in its natural proportion."
  optimized
  aspectRatio="16/9"
/>

## Section Heading

<MediaTextLeft
  image="/uploads/sample.jpg"
  alt="Sample description"
  caption="Optional image caption"
  width="45%"
  borderRadius="12px"
  optimized
  aspectRatio="4/3"
>

This is paragraph text sitting to the right of the image. The layout preserves the original image ratio rather than stretching or cropping it.

</MediaTextLeft>

Second paragraph goes here. You can use standard Markdown formatting like **bold text**, *italics*, [links](https://example.com), and lists.
