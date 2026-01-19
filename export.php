<?php
ob_start();

require __DIR__ . '/vendor/autoload.php';
require __DIR__ . '/templates/default_cv.php';

use Spatie\Browsershot\Browsershot;

try {

    // looking for node.js
    $nodePath = trim(shell_exec('which node 2>/dev/null'));
    $npmPath = trim(shell_exec('which npm 2>/dev/null'));

    if(empty($nodePath)) {
        throw new Exception('Node.js not found. Please install Node.js on your server.');
    }

    $html = file_get_contents(__DIR__ . '/templates/default_cv.php');

    $pdf = Browsershot::html($html)
        ->setOption('args', ['--no-sandbox', '--disable-setuid-sandbox'])
        ->SetNodeBinary($nodePath)
        ->SetNpmBinary($npmPath)
        ->pdf('doc.pdf');

    ob_clean();

    header('Content-Type: application/pdf');
    header('Content-Disposition: attachment; filename="cv.pdf"');
    header('Content-Length: ' . strlen($pdf));

    echo $pdf;

    exit();
} catch (\Throwable $th) {
    ob_clean();
    header('Content-Type: text/plain');
    echo 'Error generating PDF: ' . $th->getMessage();
    echo "\n\nDebug Info:\n";
    echo "Node path: " . ($nodePath ?? 'Not found') . "\n";
    echo "NPM path: " . ($npmPath ?? 'Not found') . "\n";
    $nodePath = trim(shell_exec('which node 2>/dev/null'));
    echo "Chemin de Node trouvé par PHP : " . ($nodePath ?: 'NON TROUVÉ');
    exit();
}