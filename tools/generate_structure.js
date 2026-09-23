const fs = require('fs');
const path = require('path');

const defaultIgnoreDirs = new Set([
    '.git', 'node_modules', '__pycache__', '.venv', 'venv', 'env',
    'target', '.idea', '.vscode', '.mvn', '.pytest_cache', 'dist', 'build', '.next'
]);
const defaultIgnoreFiles = new Set(['.DS_Store', 'structure.txt']);

function generateTree(dirPath, prefix = "", ignoreDirs = defaultIgnoreDirs, ignoreFiles = defaultIgnoreFiles) {
    let treeStr = "";
    let items;
    try {
        items = fs.readdirSync(dirPath);
    } catch (err) {
        return "";
    }

    const dirs = [];
    const files = [];

    for (const item of items) {
        if (ignoreDirs.has(item) || ignoreFiles.has(item)) {
            continue;
        }
        
        const itemPath = path.join(dirPath, item);
        try {
            const stat = fs.statSync(itemPath);
            if (stat.isDirectory()) {
                dirs.push(item);
            } else {
                files.push(item);
            }
        } catch (e) {
            // Ignore files that can't be stat'd
        }
    }

    dirs.sort();
    files.sort();
    const sortedItems = dirs.concat(files);

    for (let i = 0; i < sortedItems.length; i++) {
        const item = sortedItems[i];
        const itemPath = path.join(dirPath, item);
        const isLast = i === sortedItems.length - 1;
        const connector = isLast ? "└── " : "├── ";
        
        treeStr += `${prefix}${connector}${item}\n`;
        
        try {
            const stat = fs.statSync(itemPath);
            if (stat.isDirectory()) {
                const extension = isLast ? "    " : "│   ";
                treeStr += generateTree(itemPath, prefix + extension, ignoreDirs, ignoreFiles);
            }
        } catch (e) {}
    }

    return treeStr;
}

function main() {
    const scriptDir = __dirname;
    const projectRoot = path.dirname(scriptDir);
    const outputFile = path.join(projectRoot, 'structure.txt');

    console.log(`Generating structure for: ${projectRoot}`);

    let treeContent = `${path.basename(projectRoot)}/\n`;
    treeContent += generateTree(projectRoot);

    fs.writeFileSync(outputFile, treeContent, 'utf8');

    console.log(`Structure saved to: ${outputFile}`);
}

main();
