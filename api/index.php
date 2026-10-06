<?php

// Pastikan folder storage sementara di Vercel dibuat jika belum ada
if (isset($_ENV['VERCEL']) || getenv('VERCEL') == "1") {
    $dirs = [
        '/tmp/storage/framework/views',
        '/tmp/storage/framework/cache/data',
        '/tmp/storage/framework/sessions',
        '/tmp/storage/logs',
        '/tmp/storage/app/public',
        '/tmp/storage/bootstrap/cache',
    ];

    foreach ($dirs as $dir) {
        if (!is_dir($dir)) {
            mkdir($dir, 0777, true);
        }
    }

    // Override cache paths to avoid Vercel build-path vs runtime-path mismatch
    $overrides = [
        'APP_SERVICES_CACHE' => '/tmp/storage/bootstrap/cache/services.php',
        'APP_PACKAGES_CACHE' => '/tmp/storage/bootstrap/cache/packages.php',
        'APP_CONFIG_CACHE' => '/tmp/storage/bootstrap/cache/config.php',
        'APP_ROUTES_CACHE' => '/tmp/storage/bootstrap/cache/routes-v7.php',
        'APP_EVENTS_CACHE' => '/tmp/storage/bootstrap/cache/events.php',
        'VIEW_COMPILED_PATH' => '/tmp/storage/framework/views'
    ];

    foreach ($overrides as $key => $val) {
        putenv("{$key}={$val}");
        $_ENV[$key] = $val;
        $_SERVER[$key] = $val;
    }

    // Map Vercel Postgres URL to Laravel's DB_URL
    if (isset($_ENV['DATABASE_URL']) || getenv('DATABASE_URL')) {
        $dbUrl = isset($_ENV['DATABASE_URL']) ? $_ENV['DATABASE_URL'] : getenv('DATABASE_URL');
        putenv("DB_URL={$dbUrl}");
        $_ENV['DB_URL'] = $dbUrl;
        $_SERVER['DB_URL'] = $dbUrl;
    }
    if (isset($_ENV['POSTGRES_URL']) || getenv('POSTGRES_URL')) {
        $dbUrl = isset($_ENV['POSTGRES_URL']) ? $_ENV['POSTGRES_URL'] : getenv('POSTGRES_URL');
        putenv("DB_URL={$dbUrl}");
        $_ENV['DB_URL'] = $dbUrl;
        $_SERVER['DB_URL'] = $dbUrl;
    }

    // Force debug mode to see exactly what is failing
    putenv("APP_DEBUG=true");
    $_ENV['APP_DEBUG'] = 'true';
    $_SERVER['APP_DEBUG'] = 'true';
}

// Forward Vercel requests to normal index.php
require __DIR__ . '/../public/index.php';
