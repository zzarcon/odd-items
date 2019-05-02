function getRandomItem<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

export function oddItems<T>(items: T[], length: number = 1): T[] {
  const randomItems = [];
  const copiedItems = [...items];

  for (let i = 0; i < length; i++) {
    const randomItem = getRandomItem(copiedItems);
    const index = copiedItems.indexOf(randomItem);

    randomItems.push(randomItem);
    copiedItems.splice(index, 1);
  }

  return randomItems;
}