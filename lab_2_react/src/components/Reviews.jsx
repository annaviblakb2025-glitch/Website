import { useEffect, useState } from 'react';

const VARIANT = 6;

const h3 = "bg-[#3b2a4a] text-[#f4d8f8] font-serif text-sm font-normal uppercase tracking-[2px] px-3 py-2 mb-3.5 border-l-[6px] border-[#e47efb]";

function Reviews() {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/6/comments`)
            .then(res => {
                if (!res.ok) throw new Error('HTTP ' + res.status);
                return res.json();
            })
            .then(data => setComments(data))
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    return (
        <section className="col-span-full">
            <h3 className={h3}>Відгуки попередніх роботодавців</h3>

            {loading && <p>Завантаження...</p>}
            {error && <p>Не вдалося завантажити відгуки ({error}).</p>}

            {comments.map(c => (
                <article
                    key={c.id}
                    className="mb-3 border-l-4 border-[#e47efb] bg-[#f6f0f8] px-3 py-2 dark:bg-[#2f2a38]"
                >
                    <h4 className="font-bold capitalize text-[#33343d] dark:text-[#f4d8f8]">{c.name}</h4>
                    <p className="text-xs text-[#55565f] dark:text-[#b9b3c0]">{c.email}</p>
                    <p>{c.body}</p>
                </article>
            ))}
        </section>
    );
}

export default Reviews;