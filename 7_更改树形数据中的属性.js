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

function transformPro(tree, pre, cur) {
  tree.forEach((item) => {
    item[cur] = item[pre];
    delete item[pre];
    item.children && transformPro(item.children);
  });
  return tree;
}

console.log(transformPro(tree, "name", "text"));
