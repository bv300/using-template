$replacements = @(
    @("Carplex Car Accessories LLC", "BMW Motors"),
    @("Carplex Car Accessories", "BMW Motors"),
    @("Carplex", "BMW"),
    @("CARPLEX", "BMW"),
    @("carplexuae.com", "bmw-demo.com"),
    @("carplex", "bmw"),
    @("+971 50 229 2861", "+1 234 567 8900"),
    @("+971502292861", "+12345678900"),
    @("971502292861", "12345678900"),
    @("info@carplexuae.com", "info@bmw-demo.com"),
    @("Al Mansoori Building, Shop 04, Nad Al Hammar", "123 BMW Avenue, Auto City"),
    @("Al Mansoori Building, Shop 04", "123 BMW Avenue"),
    @("Nad Al Hammar, Dubai", "Auto City, Demo State"),
    @("Nad Al Hammar", "Auto City"),
    @("Ras Al Khor, Dubai", "Auto City, Demo State"),
    @("Dubai's", "Demo City's"),
    @("Dubai", "Demo City")
)

Get-ChildItem -Path "d:\using-template\my-app\app", "d:\using-template\my-app\components" -Recurse -Include *.tsx,*.ts,*.css | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    if ($null -ne $content) {
        $original = $content
        foreach ($pair in $replacements) {
            $content = $content.Replace($pair[0], $pair[1])
        }
        if ($content -ne $original) {
            Set-Content -Path $_.FullName -Value $content -NoNewline
        }
    }
}
