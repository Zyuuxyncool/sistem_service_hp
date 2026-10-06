<?php

// Pastikan folder storage sementara di Vercel dibuat jika belum ada
if (isset($_ENV['VERCEL']) || getenv('VERCEL') == "1") {
    $dirs = [
        '/tmp/storage/framework/views',
        '/tmp/storage/framework/cache/data',
        '/tmp/storage/framework/sessions',
        '/tmp/storage/logs',
        '/tmp/storage/app/public',
    ];

    foreach ($dirs as $dir) {
        if (!is_dir($dir)) {
            mkdir($dir, 0777, true);
        }
    }
}

// Forward Vercel requests to normal index.php
require __DIR__ . '/../public/index.php';
