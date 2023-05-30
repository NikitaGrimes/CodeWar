//https://www.codewars.com/kata/52bef5e3588c56132c0003bc

function treeByLevels (rootNode) {
  let result = [];
	let queue = rootNode === null ? [] : [rootNode];
  while (queue.length){
    let root = queue.shift();
    result.push(root.value);
    if (root.left)
      queue.push(root.left);
    if (root.right)
      queue.push(root.right);
  }
  return result;
}
