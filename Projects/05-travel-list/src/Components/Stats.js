//----------------------------------------------------------------------
export function Stats({ items }) {
  if (items.length) {
    const itemNum = items.length;
    const packedItemsNum = items.filter((item) => item.packed === true).length;
    const packedItemsPercentage = Math.round(
      (packedItemsNum / items.length) * 100,
    );
    return (
      <footer className="stats">
        <em>
          {itemNum === packedItemsNum
            ? "You got everything! Ready to go✈️"
            : `🧳 You have ${itemNum} item on your list,and you already packed ${packedItemsNum} item (${packedItemsPercentage}%)`}
        </em>
      </footer>
    );
  }
  return (
    <p className="stats">
      <em>Start adding some item to your packing list🚀</em>
    </p>
  );
}
