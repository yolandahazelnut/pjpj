var node = document.getElementsByTagName('body')[0].childNodes;

for (var i = 0; i < node.length; i++) {
    if (node[i].nodeValue === '.') {
        node[i].remove();
        break;
    }
}
