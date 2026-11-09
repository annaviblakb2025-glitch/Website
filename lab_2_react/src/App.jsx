import { useEffect, useState } from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
     const [theme, setTheme] = useState('light');

    useEffect(() => {
        const hours = new Date().getHours();
        setTheme(hours >= 7 && hours < 21 ? 'light' : 'dark');
    }, []);

    useEffect(() => {
        document.body.classList.toggle('dark', theme === 'dark');
    }, [theme]);

    const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

    return (
        <div className="min-h-screen bg-[#191419] px-5 py-10 font-[family-name:Courier_New,Arial,sans-serif] text-sm leading-[1.75]
        text-[#191419] selection:bg-[#e47efb] selection:text-[#33343d] ">
            <div className="max-w-[1500px] mx-auto bg-white border border-[#44454f] dark:bg-[#24212b] dark:border-[#5a4a66]">
                <Header theme={theme} onToggleTheme={toggleTheme}/>
                <main className="p-[30px] text-[#33343d] dark:text-[#e6e0ea] grid gap-[30px] items-start min-[900px]:grid-cols-2">
                    <Education />
                    <Experience />
                    <Reviews />
                </main>
            </div>
            <Footer />
            <ContactForm />
        </div>
    );
}

export default App;