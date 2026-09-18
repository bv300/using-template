const fs = require('fs');
const https = require('https');

const urls = [
    "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1504307651254-35680f356f90?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1581092921461-7031e4bf0e5e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1611078718903-88849b2f6381?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1558904541-efa843a96f0f?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1504307651254-35680f356f90?auto=format&fit=crop&w=1920&q=80",
    "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=300&q=80"
];

async function checkUrl(url) {
    return new Promise((resolve) => {
        https.get(url, (res) => {
            if (res.statusCode !== 200 && res.statusCode !== 302 && res.statusCode !== 301) {
                console.log(`BROKEN: ${url} (Status: ${res.statusCode})`);
            }
            resolve();
        }).on('error', (e) => {
            console.log(`ERROR: ${url} - ${e.message}`);
            resolve();
        });
    });
}

async function run() {
    console.log('Checking URLs...');
    for (const url of urls) {
        await checkUrl(url);
    }
    console.log('Done checking.');
}

run();
