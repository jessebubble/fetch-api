import { PageIntro } from './components/PageIntro';
import { Container } from './components/Container';
import { Border } from './components/Border';
import { FadeIn } from './components/FadeIn';
import { ArrowPathRoundedSquareIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import clsx from 'clsx';
import OpenWeather from './components/examples/OpenWeather';

function FetchExample() {
    const [loading, setLoading] = useState(false);

    const handleFetch = () => {
        setLoading(true);
        fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
            .then((response) => response.json())
            .then(data => {
                const thumbnailUrls = data.map(photo => photo.thumbnailUrl);
                const result = thumbnailUrls.map(url => `<img src="${url}" alt="thumbnail" class="w-16 h-16 rounded-full">`);
                document.getElementById('result').innerHTML = result.join('');
                setLoading(false);
            })
            .catch((error) => {
                document.getElementById('result').innerHTML = error;
                setLoading(false);
            });

            setTimeout(() => {
                setLoading(false);
            }, 4000); 
    };

    return (
        <Container className="mt-40">
            <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                    Fetch API examples
                </h2>
            </FadeIn>
            <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
                <FadeIn>
                    <article>
                        <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16">
                            <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                                <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                                    <ArrowPathRoundedSquareIcon className="h-12 w-12 flex-none text-neutral-950" />
                                    <h3 className="mt-6 flex items-center text-sm font-semibold text-neutral-950 sm:mt-0 lg:mt-8">
                                        JSON Placeholder API
                                    </h3>
                                </div>
                                <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                                    <p className="text-sm tracking-tight text-neutral-950 after:ml-4 after:font-semibold after:text-neutral-300 after:content-['/'] lg:mt-2 lg:after:hidden">
                                        Free fake API for testing and prototyping
                                    </p>
                                </div>
                            </div>
                            <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                                <p className="font-display text-4xl font-medium text-neutral-950">
                                    Pending UI state
                                </p>
                                <div className="mt-6 space-y-6 text-base text-neutral-600">
                                    <p>
                                        This example provides users with
                                        feedback that their request is being
                                        processed, helping to improve the user
                                        experience. The loading UI is displayed
                                        while waiting for the response, and
                                        it&apos;s hidden once the response is
                                        received or an error occurs.
                                    </p>
                                </div>
                                <div className="mt-8 flex">
                                    <div className="flex w-full items-center justify-center rounded-lg border bg-cosa-white p-2">
                                        <div 
                                            id="loading" 
                                            className={clsx(
                                                'animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-neutral-950',
                                                loading ? 'block' : 'hidden'
                                            )}
                                        ></div>
                                        <div 
                                            id="result" 
                                            className={clsx(
                                                'overflow-x-auto',
                                                'flex gap-x-1 items-center justify-start',                                                
                                                loading ? 'hidden' : 'block'
                                            )}
                                        ></div>
                                        <button
                                            id="fetchButton"
                                            onClick={handleFetch}
                                            className={clsx(
                                                'rounded-lg border border-neutral-950',
                                                'bg-neutral-950 text-white',
                                                'p-2 px-4 text-base font-medium',
                                                'hover:bg-white hover:text-neutral-950',
                                                'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-950',
                                                loading ? 'hidden' : 'block'
                                            )}
                                        >
                                            Fetch Data
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Border>
                    </article>
                </FadeIn>
            </div>
        </Container>
    );
}

function Footer() {
    return (
        <footer className="mt-24 w-full sm:mt-32">
            <div className="border-t border-neutral-950/10 pr-3 pt-12">
                <p className="text-end text-sm text-gray-700">
                    <a
                        className="hover:text-centro-pink"
                        href="https://www.jessebubble.dev/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        jessebubble.dev <span aria-hidden="true">→</span>
                    </a>
                </p>
            </div>
        </footer>
    );
}

export default function App() {
    return (
        <>
            <PageIntro
                eyebrow="Fetch API"
                title="Working with web standards"
            >
                <p>
                    The Fetch API provides a set of objects and interfaces that
                    allow for flexible and standardized interaction with network
                    requests and responses. These objects help create, send, and
                    process HTTP requests, as well as handle corresponding
                    responses
                </p>
            </PageIntro>

            <FetchExample />
            <OpenWeather />
            <Footer />
        </>
    );
}
