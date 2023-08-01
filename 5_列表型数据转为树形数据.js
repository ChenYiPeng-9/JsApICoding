const data = [
  { id: 10, parentId: 0, text: "一级菜单-1" },
  { id: 20, parentId: 0, text: "一级菜单-2" },
  { id: 30, parentId: 20, text: "二级菜单-3" },
  { id: 25, parentId: 30, text: "三级菜单-25" },
  { id: 35, parentId: 30, text: "三级菜单-35" },
];

const listToTree = (data) => {
  const listInfo = data.reduce((preData, curNode) => {
    preData[curNode.id] = curNode;
    return preData;
  }, {});

  const treeResult = [];
  data.forEach((itemNode) => {
    if (!itemNode.parentId) {
      treeResult.push(itemNode);
      return;
    }

    parentInfo = listInfo[itemNode.parentId];
    parentInfo.children = parentInfo.children || [];

    parentInfo.children = itemNode;
  });

  return treeResult;
};
console.log(listToTree(data));
