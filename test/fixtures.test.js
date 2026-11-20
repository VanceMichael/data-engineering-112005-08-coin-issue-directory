import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

test('演练资料区分发行规格、渠道公告及发行更正', async () => {
  const data = JSON.parse(await readFile(new URL('../fixtures/observations.json', import.meta.url), 'utf8'));
  assert.equal(data.fixture_kind, 'synthetic');
  assert.ok(data.records.some((record) => record.type === 'correction'));
  assert.ok(data.records.some((record) => record.type === 'offer' && record.source === 'reseller-copy'));
});
