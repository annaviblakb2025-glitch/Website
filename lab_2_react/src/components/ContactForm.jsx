import { useEffect, useState } from 'react';

const field = "mt-0.5 w-full border border-[#9a9ba5] bg-white px-2 py-1.5 text-[#33343d] dark:border-[#5a4a66] dark:bg-[#191419] dark:text-[#e6e0ea]";

function ContactForm() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (sessionStorage.getItem('contactClosed')) return;

        const timer = setTimeout(() => setIsOpen(true), 10);
        return () => clearTimeout(timer);
    }, []);

    const close = () => {
        setIsOpen(false);
        sessionStorage.setItem('contactClosed', 'true');
    };

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#191419]/80 p-4">
                    <div className="max-h-[90vh] w-full max-w-[440px] overflow-y-auto border-t-4 border-[#e47efb] bg-white p-6 text-[#33343d] dark:bg-[#24212b] dark:text-[#e6e0ea]">
                        <h2 className="mb-3.5 font-serif text-xl">Зворотний зв'язок</h2>
                        <form action="https://formspree.io/f/mgaalnpd" method="POST">
                            <label className="mb-2.5 block">
                                Ім'я
                                <input type="text" name="name" required className={field} />
                            </label>
                            <label className="mb-2.5 block">
                                Email
                                <input type="email" name="email" required className={field} />
                            </label>
                            <label className="mb-2.5 block">
                                Номер телефону
                                <input type="tel" name="phone" required className={field} />
                            </label>
                            <label className="mb-2.5 block">
                                Повідомлення
                                <textarea name="message" rows="4" required className={field} />
                            </label>

                            <div className="mt-3.5 flex gap-2.5">
                                <button
                                    type="submit"
                                    className="cursor-pointer bg-[#e47efb] px-4 py-2 text-[#191419] hover:bg-[#e0b8e5]"
                                >
                                    Надіслати
                                </button>
                                <button
                                    type="button"
                                    onClick={close}
                                    className="cursor-pointer border border-[#e47efb] px-4 py-2 hover:bg-[#e47efb]/20"
                                >
                                    Закрити
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default ContactForm;