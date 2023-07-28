const tree = [
  {
    id: 1,
    name: "北京",
    children: [
      {
        id: 2,
        name: "海淀",
      },
      {
        id: 3,
        name: "昌平",
        children: [
          {
            id: 4,
            name: "西三旗",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "上海",
  },
];

function getTarget(tree, id) {
  const listArr = [];
  function treeToList(tree) {
    tree.forEach((item) => {
      if (item.children) {
        treeToList(item.children);
        delete item.children;
      }
      listArr.push(item);
    });
    return listArr;
  }
  treeToList(tree);
  const res = listArr.filter((item) => {
    if (item.id === id) {
      return true;
    }
  });
  return res;
}

console.log(getTarget(tree, 5));
