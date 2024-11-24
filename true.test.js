test('number', () => {
    const n = -12;
    expect(n).not.toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).toBeTruthy();
    expect(n).not.toBeFalsy();
  });