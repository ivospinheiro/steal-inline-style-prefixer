import F from 'funcunit';
import QUnit from 'steal-qunit';

import 'steal-ag-grid-enterprise/models/test';

F.attach(QUnit);

QUnit.module('steal-ag-grid-enterprise functional smoke test', {
  beforeEach() {
    F.open('./development.html');
  }
});

QUnit.test('steal-ag-grid-enterprise main page shows up', function() {
  F('title').text('steal-ag-grid-enterprise', 'Title is set');
});
