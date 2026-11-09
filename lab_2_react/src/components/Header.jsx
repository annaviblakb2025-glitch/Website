function Header({ theme, onToggleTheme }){
    const link = "text-white hover:text-[#e47efb] hover:underline focus:outline-2 focus:outline-offset-2 focus:outline-[#e47efb]";
    return (
        <header className="relative bg-[#33343d] text-[#f4d8f8] px-4 py-[30px] min-[900px]:px-[30px] min-[900px]:py-[50px] text-center border-b-4 border-[#e47efb]">
            <h1 className="font-serif text-[26px] min-[900px]:text-4xl font-normal uppercase tracking-[4px]">
                Анна Вібла
            </h1>
            <h2 className="mt-3.5 text-sm font-bold tracking-[3px]">CV (резюме)</h2>

            <address className="not-italic mt-4 space-y-1.5 break-words">
                <p>Львів, Україна</p>
                <p>
                    Email:{' '}
                    <a className={`${link} font-bold`} href="mailto:iimlifeyk@gmail.com">
                        iimlifeyk@gmail.com
                    </a>{' '}
                    | Телефон:{' '}
                    <a className={link} href="tel:+380967403260">+380 96 740 3260</a>
                </p>
                <a className={link} href="https://www.github.com/annaviblakb2025-glitch">
                    GitHub: https://www.github.com/annaviblakb2025-glitch
                </a>
            </address>
            <button
                 type="button"
                 onClick={onToggleTheme}
                 aria-label="Змінити тему"
                 className="absolute top-4 right-4 cursor-pointer rounded-md bg-[#e47efb] px-3 py-2 text-xl leading-none text-[#191419] transition hover:scale-105 hover:bg-[#e0b8e5]"
            >
                 {theme === 'light' ? '☀️' : '🌙'}
            </button>
        </header>
    );
}
export default Header;
