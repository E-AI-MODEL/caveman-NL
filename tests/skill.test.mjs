import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const skill = fs.readFileSync(path.join(root, 'SKILL.md'), 'utf8');
const installer = fs.readFileSync(path.join(root, 'bin/install.js'), 'utf8');

test('SKILL.md has valid frontmatter and caveman triggers', () => {
  assert.match(skill, /^---\nname: caveman-nl/m);
  assert.match(skill, /\/caveman/);
  assert.match(skill, /holenman aan/);
});

test('skill protects exact technical text', () => {
  assert.match(skill, /code/i);
  assert.match(skill, /URLs/);
  assert.match(skill, /bestandspaden|paden/);
});

test('installer writes AGENTS block markers', () => {
  assert.match(installer, /caveman-nl-begin/);
  assert.match(installer, /caveman-nl-end/);
  assert.match(installer, /--with-init/);
  assert.match(installer, /--uninstall/);
});
