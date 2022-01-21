function childNodes(id) {
    function getDirectChildren(node) {
      return Array.from(node.childNodes);
    }
  
    function getIndirectChildren(nodeList) {
       for (let i = 0; i < nodeList.length; i += 1) {
              getIndirectChildren(nodeList[i].childNodes);
              indirectChildren.push(nodeList[i]);
          }
    };
    
    let indirectChildren = [];
    let node = document.getElementById(Number(id));
    let directChildren = getDirectChildren(node);
    let grandChildren = Array.from(directChildren).map(node => Array.from(node.childNodes)).flat();
    
    getIndirectChildren(grandChildren);
      
    return [directChildren.length, indirectChildren.length];
  }
  
  childNodes(4);
  