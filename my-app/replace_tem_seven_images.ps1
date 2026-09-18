$replacements = @(
    @("/images/our-project1.png", "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?auto=format&fit=crop&w=800&q=80"),
    @("/images/our-project2.png", "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"),
    @("/images/our-project3.jpg", "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80"),
    @("/images/our-project4.jpg", "https://images.unsplash.com/photo-1504307651254-35680f356f90?auto=format&fit=crop&w=800&q=80"),
    @("/images/our-project5.jpg", "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80"),
    @("/images/our-project6.jpg", "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"),

    @("/images/SERVICES-GENERAL MAINTENANCE.jpg", "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80"),
    @("/images/SERVICES-INTERIOR-DESIGN.jpg", "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"),
    @("/images/DECORATION WORKS-SERVICES-.jpg", "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"),
    @("/images/TURNKEY FIT-OUT-SERVICES.jpg", "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80"),
    @("/images/MEP-WORKS-SERVICES.jpg", "https://images.unsplash.com/photo-1581092921461-7031e4bf0e5e?auto=format&fit=crop&w=800&q=80"),
    @("/images/AC INSTALLATION & MAINTENANCE-SERVICES.jpg", "https://images.unsplash.com/photo-1611078718903-88849b2f6381?auto=format&fit=crop&w=800&q=80"),
    @("/images/LANDSCAPING & OUTDOOR WORKS-SERVICES.jpg", "https://images.unsplash.com/photo-1558904541-efa843a96f0f?auto=format&fit=crop&w=800&q=80"),
    @("/images/RETAIL & COMMERCIAL WORKS-SERVICES.png", "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"),
    @("/images/FURNITURE & CARPENTRY-SERVICES.jpg", "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=800&q=80"),
    @("/images/MEZZANINE FLOOR WORKS-SERVICES.jpg", "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80"),

    @("/images/hero-image1.png", "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?auto=format&fit=crop&w=1920&q=80"),
    @("/images/hero-image2.png", "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"),
    @("/images/hero-image3.png", "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80"),
    @("/images/hero-image4.png", "https://images.unsplash.com/photo-1504307651254-35680f356f90?auto=format&fit=crop&w=1920&q=80"),

    @("/images/alejaba_logo_200x200.png", "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg"),
    @("/images/our-associate-company.png", "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=300&q=80")
)

$files = Get-ChildItem -Path "d:\using-template\my-app\app\tem-seven", "d:\using-template\my-app\components\tem-seven" -Recurse -Include *.tsx,*.ts,*.css
foreach ($file in $files) {
    $content = [System.IO.File]::ReadAllText($file.FullName)
    $original = $content
    foreach ($pair in $replacements) {
        $content = $content.Replace($pair[0], $pair[1])
    }
    if ($content -ne $original) {
        [System.IO.File]::WriteAllText($file.FullName, $content)
    }
}
