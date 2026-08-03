import test from 'node:test';
import assert from 'node:assert/strict';
import { cleanDescription } from './cleanDescription.js';

test('removes component tags and component names from descriptions', () => {
  const input = 'Here is <ImageBlock alt="demo" /> content with MediaTextLeft and MediaTextRight in it';
  assert.equal(cleanDescription(input), 'Here is content with and in it');
});

test('keeps readable prose and trims whitespace', () => {
  const input = '   A calm, thoughtful post about living well.   ';
  assert.equal(cleanDescription(input), 'A calm, thoughtful post about living well.');
});
