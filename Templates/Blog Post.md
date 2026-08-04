---
title: "<% tp.file.title %>"
pubDate: <% tp.file.creation_date("YYYY-MM-DD") %>
author: Aman Paul
description: "A brief description of your post for preview cards and SEO."
draft: false
tags:
  - blog
  - story
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
  borderRadius="12px"
/>

## Section Heading

Second paragraph goes here. You can use standard Markdown formatting like **bold text**, *italics*, [links](https://example.com), and lists.
