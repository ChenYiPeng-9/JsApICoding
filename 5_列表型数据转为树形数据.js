const data = [
  { id: 10, parentId: 0, text: "一级菜单-1" },
  { id: 20, parentId: 0, text: "一级菜单-2" },
  { id: 30, parentId: 20, text: "二级菜单-3" },
  { id: 25, parentId: 30, text: "三级菜单-25" },
  { id: 35, parentId: 30, text: "三级菜单-35" },
];

function listToTree(data) {
  const listInfo = data.reduce((preData, curNode) => {
    preData[curNode.id] = curNode;
    return preData;
  }, {});

  const res = [];

  data.forEach((nodeItem) => {
    if (!nodeItem.parentId) {
      res.push(nodeItem);
      return;
    }

    parentInfo = listInfo[nodeItem.parentId];
    parentInfo.children = parentInfo.children || [];
    parentInfo.children.push(nodeItem);
  });

  return res;
}

console.log(listToTree(data));
