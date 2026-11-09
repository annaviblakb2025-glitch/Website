import { useEffect, useState } from 'react';
function Footer() {
    const [system, setSystem] = useState({ userAgent: '', platform: '' });

    useEffect(() => {
        localStorage.setItem('userAgent', navigator.userAgent);
        localStorage.setItem('platform', navigator.platform);

        setSystem({
            userAgent: localStorage.getItem('userAgent'),
            platform: localStorage.getItem('platform'),
        });
    }, []);
    return (
        <footer className="max-w-[1500px] mx-auto mt-4 text-center text-xs text-[#9a9ba5]">
            <p>© 2026 Анна Вібла. Усі права захищені.</p>
         <ul className="mt-3 max-w-[900px] mx-auto text-left break-words">
                <li>Платформа: {system.platform}</li>
                <li>User Agent: {system.userAgent}</li>
            </ul>
        </footer>
    );
}

export default Footer;