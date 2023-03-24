function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

function preOrder(root) {
    if (root === null) return;
    process.stdout.write(`${root.data} `);
    preOrder(root.left);
    preOrder(root.right);
}

function inOrder(root) {
    if (root === null) return;
    inOrder(root.left);
    process.stdout.write(`${root.data} `);
    inOrder(root.right);
}

function postOrder(root) {
    if (root === null) return;
    postOrder(root.left);
    postOrder(root.right);
    process.stdout.write(`${root.data} `);
}

function createTree() {
    let root = new Node(10);
    root.left = new Node(20);
    root.right = new Node(30);
    root.left.left = new Node(40);
    root.left.right = new Node(50);
    root.right.left = new Node(60);
    root.right.right = new Node(70);
    root.left.left.right = new Node(80);

    process.stdout.write('preOrder Traversal of this tree: ');
    preOrder(root);
    console.log('\n');

    process.stdout.write('postOrder Traversal of this tree: ');
    postOrder(root);
    console.log('\n');

    process.stdout.write('inOrder Traversal of this tree: ');
    inOrder(root);
    console.log('\n');
}
createTree();
