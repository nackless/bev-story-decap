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

test('preserves punctuation that is explicitly written', () => {
  const input = 'A thoughtful, post, about, clarity';
  assert.equal(cleanDescription(input), 'A thoughtful, post, about, clarity');
});

test('removes component markup but keeps explicit punctuation', () => {
  const input = 'Here is <ImageBlock alt="demo" /> content, and MediaTextLeft / MediaTextRight should stay visible as text';
  assert.equal(cleanDescription(input), 'Here is content, and / should stay visible as text');
});
