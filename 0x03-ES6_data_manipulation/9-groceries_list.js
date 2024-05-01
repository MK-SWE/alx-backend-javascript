/* eslint-disable array-callback-return */
export default function groceriesList() {
  const gList = {
    Apples: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Banana: 5,
  };

  const gMap = new Map();
  Object.keys(gList).map((el) => {
    gMap.set(el, gList[el]);
  });
  return gMap;
}
