function Education() {
    const h3 = "bg-[#3b2a4a] text-[#f4d8f8] font-serif text-sm font-normal uppercase tracking-[2px] px-3 py-2 mb-3.5 border-l-[6px] border-[#e47efb]";
    const ul = "list-[circle] pl-[18px] mb-7 [&>li]:py-1 [&>li]:border-b [&>li]:border-dotted [&>li]:border-[#e47efb] [&>li:last-child]:border-b-0";

    return (
        <section className="rounded-xl border-2 border-[#e0b8e5] p-5 shadow-lg transition-all hover:shadow-2xl hover:scale-[1.02]">
                <h3 className="bg-[#3b2a4a] text-[#f4d8f8] font-serif text-sm font-normal uppercase tracking-[2px] px-3 py-2 mb-3.5
                border-l-[6px] border-[#e47efb]">
                    Про мене
                </h3>
                <p className="mb-7 italic">
                    Студентка спеціальності "Кібербезпека" з практичним досвідом роботи на позиції TechOps Specialist у компанії CyberLine Solutions. Цікавлюся захистом систем, етичним хакінгом та аудитом безпеки. Шукаю part-time роботу, щоб розвивати практичні навички далі.
                </p>
            <h3 className={h3}>Освіта</h3>
            <div className="mb-7">
                <p><strong>Національний університет "Львівська політехніка"</strong></p>
                <p><em>Бакалавр з кібербезпеки</em></p>
                <p>Роки: 2025 — дотепер</p>
            </div>

            <h3 className={h3}>Навички</h3>
            <ul className={ul}>
                <li>Мови: українська (рідна), англійська (B1+)</li>
                <li>Програмування: C#, Python — з практичним застосуванням у проєктах з кібербезпеки</li>
                <li>Робота з тікет-системами (Jira, Zendesk)</li>
                <li>Базове адміністрування Linux</li>
                <li>Аналітичне мислення, застосоване в дослідженні вразливостей</li>
                <li>Відповідальне ставлення до дедлайнів</li>
                <li>Уважність до деталей</li>
                <li>Швидко сприймаю нову інформацію</li>
            </ul>

            <h3 className={h3}>Сертифікати</h3>
            <ul className={ul}>
                <li>Google Cybersecurity Certificate — в процесі проходження</li>
                <li>TryHackMe "Pre Security" path — пройдено</li>
                <li>Курс Python від JavaRush — пройдено</li>
            </ul>

            <h3 className={h3}>Позанавчальна діяльність</h3>
            <ul className={ul.replace('mb-7', '')}>
                <li>Брала участь у волонтерських ініціативах разом із викладачами ще в школі.</li>
                <li>Цікавлюсь спільнотами й платформами з кібербезпеки, щоб надалі практикуватись.</li>
            </ul>
        </section>
    );
}

export default Education;