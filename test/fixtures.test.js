import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

test('演练资料区分发行规格、渠道公告、预约请求及渠道回执', async () => {
  const data = JSON.parse(await readFile(new URL('../fixtures/observations.json', import.meta.url), 'utf8'));
  assert.equal(data.fixture_kind, 'synthetic');
  assert.ok(data.records.some((record) => record.type === 'correction'));
  assert.ok(data.records.some((record) => record.type === 'offer' && record.source === 'reseller-copy'));
  assert.ok(data.records.some((record) => record.type === 'booking' && record.response === 'timeout'));
  assert.ok(data.records.some((record) => record.type === 'receipt'));
});
