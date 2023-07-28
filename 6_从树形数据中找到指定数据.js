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
  const listDate = [];
  const treeToList = (treeDate) => {
    treeDate.forEach((item) => {
      if (item.children) {
        treeToList(item.children);
        delete item.children;
      }
      listDate.push(item);
    });
  };
  treeToList(tree);
  return listDate.filter((item) => item.id === id);
}

console.log(getTarget(tree, 5));
