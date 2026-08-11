import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { visit } from 'unist-util-visit';

function remarkObsidianCallouts() {
  return (tree) => {
    visit(tree, 'blockquote', (node) => {
      if (!node.children || node.children.length === 0) return;
      const firstChild = node.children[0];
      if (firstChild.type === 'paragraph' && firstChild.children && firstChild.children.length > 0) {
        const firstText = firstChild.children[0];
        if (firstText && firstText.type === 'text') {
          const match = firstText.value.match(/^\[!([a-zA-Z0-9_-]+)\][ \t]*(.*)/s);
          if (match) {
            const calloutType = match[1].toLowerCase();
            const remainder = match[2];
            
            // Remove [!type] prefix from text
            firstText.value = remainder;

            // Add CSS classes to blockquote element
            if (!node.data) node.data = {};
            if (!node.data.hProperties) node.data.hProperties = {};
            
            const existingClass = node.data.hProperties.className || [];
            const classes = Array.isArray(existingClass) ? existingClass : [existingClass];
            classes.push('callout', `callout-${calloutType}`);
            node.data.hProperties.className = classes;
          }
        }
      }
    });
  };
}

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkObsidianCallouts],
  },
  integrations: [mdx()],

  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
    remotePatterns: [
      { protocol: 'https' },
      { protocol: 'http', hostname: 'localhost' },
    ],
  },
});