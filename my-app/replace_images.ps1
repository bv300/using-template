$replacements = @{
    "/assets/Android-Upgrade-card.png" = "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80"
    "/assets/camera-360.png" = "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=800&q=80"
    "/assets/seat-covers-a.png" = "https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=800&q=80"
    "/assets/Upholstery-Works-c.png" = "https://images.unsplash.com/photo-1503375894024-7eb3ea24fb24?auto=format&fit=crop&w=800&q=80"
    "/assets/upholstery-works.png" = "https://images.unsplash.com/photo-1503375894024-7eb3ea24fb24?auto=format&fit=crop&w=800&q=80"
    "/assets/upholstery-worksa.png" = "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1920&q=80"
    "/assets/car-tinting.png" = "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=800&q=80"
    "/assets/LED-Lights.png" = "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80"
    "/assets/sound-horns.png" = "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80"
    "/assets/car-stereo.png" = "https://images.unsplash.com/photo-1517594422361-5e18a412072f?auto=format&fit=crop&w=800&q=80"
    "/assets/lock-system.png" = "https://images.unsplash.com/photo-1582236467008-0138cd3d837f?auto=format&fit=crop&w=800&q=80"
    "/assets/car-batteries.png" = "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80"
    "/assets/carples logo.png" = "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg"
    "/assets/carples-logo-top.png" = "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg"
    "/assets/carplex-logo-top.png" = "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg"
    "/assets/interior-design.png" = "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=800&q=80"
    "/assets/trusted-auto-upgrades.png" = "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1920&q=80"
    "/assets/Advanced-Technology.png" = "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1920&q=80"
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
