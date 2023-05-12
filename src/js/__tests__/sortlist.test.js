import orderByProps from '../sortlist';

test('invalid value of the sort argument', () => {
  const object = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  expect(() => orderByProps(object, undefined)).toThrow();
});

test('empty value of the sort argument', () => {
  const object = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  expect(orderByProps(object, [])).toEqual([
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
  ]);
});

test('missing value of the sort argument', () => {
  const object = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  expect(orderByProps(object, ['foo'])).toEqual([
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
  ]);
});

test('correct value of the sort argument', () => {
  const object = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  expect(orderByProps(object, ['name', 'level'])).toEqual([
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ]);
});
