function saveSystemInfo() {
    const info = {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        language: navigator.language,
        vendor: navigator.vendor,
        cookiesEnabled: navigator.cookieEnabled,
        online: navigator.onLine,
        cpuCores: navigator.hardwareConcurrency,
        screen: screen.width + 'x' + screen.height,
        windowSize: window.innerWidth + 'x' + window.innerHeight,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
    };

    for (const key in info) {
        localStorage.setItem(key, String(info[key]));
    }
}

function showStorageInfo() {
    const list = document.getElementById('storageInfo');
    list.innerHTML = '';

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const li = document.createElement('li');
        li.textContent = key + ': ' + localStorage.getItem(key);
        list.appendChild(li);
    }
}

const VARIANT = 6;

async function loadComments() {
    const box = document.getElementById('reviews');
    try {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/posts/' + VARIANT + '/comments'
        );
        if (!response.ok) {
            throw new Error('HTTP ' + response.status);
        }
        const comments = await response.json();

        box.innerHTML = '';
        comments.forEach(function (c) {
            const card = document.createElement('article');
            card.className = 'review-card';

            const name = document.createElement('h4');
            name.textContent = c.name;

            const email = document.createElement('p');
            email.className = 'review-email';
            email.textContent = c.email;

            const body = document.createElement('p');
            body.textContent = c.body;

            card.append(name, email, body);
            box.appendChild(card);
        });
    } catch (error) {
        box.textContent = 'Не вдалося завантажити відгуки.';
        console.error('Error:', error);
    }
}

const modal = document.getElementById('modal');

setTimeout(function () {
    modal.classList.remove('hidden');
}, 60000);

document.getElementById('closeModal').addEventListener('click', function () {
    modal.classList.add('hidden');
});

const themeBtn = document.getElementById('themeToggle');

function updateThemeIcon() {
    const isDark = document.body.classList.contains('dark');
    themeBtn.textContent = isDark ? '🌙' : '☀️';
}

function applyAutoTheme() {
    const hours = new Date().getHours();
    const isDay = hours >= 7 && hours < 21;
    document.body.classList.toggle('dark', !isDay);
    updateThemeIcon();
}

themeBtn.addEventListener('click', function () {
    document.body.classList.toggle('dark');
    updateThemeIcon();
});


saveSystemInfo();
showStorageInfo();
loadComments();
applyAutoTheme();