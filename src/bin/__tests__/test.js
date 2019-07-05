import getDiff from '../genDiff';

test('compare two first jsons', () => {
  expect(getDiff({
    host: 'hexlet.io',
    timeout: 50,
    proxy: '123.234.53.22',
    follow: false,
  }, {
    timeout: 20,
    verbose: true,
    host: 'hexlet.io',
  })).toEqual({
    '- timeout': 50,
    '+ timeout': 20,
    '+ verbose': true,
    host: 'hexlet.io',
    '- proxy': '123.234.53.22',
    '- follow': false,
  });
});

test('compare two second jsons', () => {
  expect(getDiff(
    {
      timeout: 50,
    }, {
      timeout: 50,
      verbose: true,
    },
  )).toEqual({
    timeout: 50,
    '+ verbose': true,
  });
});

// test('meh', () => {
//   expect({
//     a: 1,
//     b: 2,
//   }).toEqual({
//     b: 2,
//     a: 1,
//   });
// });
