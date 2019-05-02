import { oddItems } from "../src/odd-items";

describe('oddItems', () => {
  const items = [1,2,3,4,5];

  it('should return different items', () => {
    const randomItems = oddItems(items, 3);

    expect(randomItems).toHaveLength(3);

    expect(items).toContain(randomItems[0])
    expect(items).toContain(randomItems[1])
    expect(items).toContain(randomItems[2])

    expect(randomItems[0]).not.toEqual(randomItems[1])
    expect(randomItems[0]).not.toEqual(randomItems[2])
    expect(randomItems[1]).not.toEqual(randomItems[2])
  });
});
