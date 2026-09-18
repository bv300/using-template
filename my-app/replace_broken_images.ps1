$replacements = @{
    "https://images.unsplash.com/photo-1503375894024-7eb3ea24fb24" = "https://images.unsplash.com/photo-1552519507-da3b142c6e3d"
    "https://images.unsplash.com/photo-1517594422361-5e18a412072f" = "https://images.unsplash.com/photo-1493225457124-a1a2abac9075"
    "https://images.unsplash.com/photo-1582236467008-0138cd3d837f" = "https://images.unsplash.com/photo-1563122870-6b0b48a0af09"
}

Get-ChildItem -Path "d:\using-template\my-app\app\tem-six", "d:\using-template\my-app\components\tem-six" -Recurse -Include *.tsx,*.ts | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    $original = $content
    foreach ($key in $replacements.Keys) {
        $content = $content.Replace($key, $replacements[$key])
    }
    if ($content -ne $original) {
        Set-Content -Path $_.FullName -Value $content -NoNewline
    }
}
