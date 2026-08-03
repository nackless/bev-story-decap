const COMPONENT_NAMES = ['ImageBlock', 'MediaTextLeft', 'MediaTextRight', 'MediaTextleft', 'MediaTextright'];

function normalizeWhitespace(value) {
  return value.replace(/\s+/g, ' ').trim();
}

export function cleanDescription(value) {
  if (typeof value !== 'string') {
    return '';
  }

  let text = value.trim();

  text = text.replace(/<\s*\/?.*?\s*\/?>/g, ' ');
  text = text.replace(/```[\s\S]*?```/g, ' ');
  text = text.replace(/`([^`]+)`/g, '$1');
  text = text.replace(/[*_>#~]/g, ' ');
  text = text.replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1');

  for (const name of COMPONENT_NAMES) {
    text = text.replace(new RegExp(name, 'gi'), '');
  }

  text = normalizeWhitespace(text);

  if (!text) {
    return '';
  }

  return text.length > 160 ? `${text.slice(0, 157).trimEnd()}…` : text;
}
