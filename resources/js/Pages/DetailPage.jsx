import poster from "../../../public/images/detail/poster.jpg";
import author from "../../../public/images/detail/author.png";
import starIcon from "../../../public/images/detail/icon-star.svg";

import Navbar from '@/Components/Navbar';
import { Head } from '@inertiajs/react';
import Footer from "@/Components/Footer";

export default function DetailPage() {
    return (
        <>
            <Head title="Detail" />
            <Navbar />
            <section className="pt-24 md:pt-28">
                <div className="container">
                    <div className="flex justify-between items-center mb-4">
                    <div>
                        <h2 className="text-6xl font-bold text-dark">Overlord</h2>
                        <p className="text-base text-body-color" data-wow-delay=".2s">
                        <strong>Other Title:</strong> Ôbârôdo
                        </p>
                        <p className="text-base text-body-color" data-wow-delay=".2s">
                        <strong>Year:</strong> 2015
                        </p>
                    </div>
                    <div className="flex items-center">
                        <img src={starIcon} alt="star icon" className="w-10 h-10" />
                        <div className="ml-2 flex flex-col items-center">
                        <p className="text-base font-bold text-body-color">Rating</p>
                        <span className="text-xl text-body-color">7.0/10</span>
                        </div>
                    </div>
                    </div>
                    <div className="flex flex-wrap">
                    <div className="px-1 w-3/12" data-wow-delay=".3s">
                        <img
                        src={poster}
                        alt="Movie Poster"
                        className="w-full h-full rounded-lg"
                        />
                    </div>
                    <div className="px-1 w-9/12" data-wow-delay=".3s">
                        <iframe
                        className="w-full h-full rounded-lg"
                        src="https://www.youtube.com/embed/3jE9moHQePI?si=V8fCal7jJZky9Shj"
                        title="YouTube video player"
                        frameBorder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen=""
                        ></iframe>
                    </div>
                    </div>
                    <div
                    className="flex flex-wrap items-center gap-4 mt-4 mb-10 wow fadeInUp"
                    style={{ visibility: "visible", animationDelay: "0.1s" }}
                    >
                    <a className="block rounded-md bg-primary/[0.08] px-[14px] py-[5px] text-base text-dark hover:bg-primary hover:text-white">
                        Animation
                    </a>
                    <a className="block rounded-md bg-primary/[0.08] px-[14px] py-[5px] text-base text-dark hover:bg-primary hover:text-white">
                        Action
                    </a>
                    <a className="block rounded-md bg-primary/[0.08] px-[14px] py-[5px] text-base text-dark hover:bg-primary hover:text-white">
                        Adventure
                    </a>
                    <a className="block rounded-md bg-primary/[0.08] px-[14px] py-[5px] text-base text-dark hover:bg-primary hover:text-white">
                        Fantasy
                    </a>
                    </div>
                    <div className="mb-10">
                    <h2 className="text-4xl font-semibold text-dark">Synopsis</h2>
                    <span className="inline-block h-[2px] w-20 bg-primary" />
                    <p className="text-base text-body-color" data-wow-delay=".2s">
                        The final hour of the popular virtual reality game Yggdrasil has
                        come. However, Momonga, a powerful wizard and master of the dark
                        guild Ainz Ooal Gown, decides to spend his last few moments in the
                        game as the servers begin to shut down. To his surprise, despite the
                        clock having struck midnight, Momonga is still fully conscious as
                        his character and, moreover, the non-player characters appear to
                        have developed personalities of their own! Confronted with this
                        abnormal situation, Momonga commands his loyal servants to help him
                        investigate and take control of this new world, with the hopes of
                        figuring out what has caused this development and if there may be
                        others in the same predicament.
                    </p>
                    <p className="mt-4 text-base text-body-color">
                        <strong>Available on</strong> Crunchyroll and Netflix
                    </p>
                    </div>
                    <div className="mb-10">
                    <h2 className="text-4xl font-semibold text-dark">Casts</h2>
                    <span className="inline-block h-[2px] w-20 bg-primary" />
                    <div className="flex flex-wrap">
                        <div className="w-full p-4 md:w-1/2 lg:w-3/12 flex items-center border-b border-stroke">
                        <div className="mr-5 h-20 w-20 rounded-full">
                            <img src={author} alt="Actor Image" className="w-full" />
                        </div>
                        <div>
                            <h4 className="text-lg font-medium leading-snug text-dark">
                            Name
                            </h4>
                            <p className="text-sm text-body-color">Role</p>
                        </div>
                        </div>
                        <div className="w-full p-4 lg:w-3/12 md:w-1/2 flex items-center border-b border-stroke">
                        <div className="mr-5 h-20 w-20 max-w-[80px] overflow-hidden rounded-full">
                            <img src={author} alt="Actor Image" className="w-full" />
                        </div>
                        <div>
                            <h4 className="text-lg font-medium leading-snug text-dark">
                            Name
                            </h4>
                            <p className="text-sm text-body-color">Role</p>
                        </div>
                        </div>
                        <div className="w-full p-4 lg:w-3/12 md:w-1/2 flex items-center border-b border-stroke">
                        <div className="mr-5 h-20 w-20 max-w-[80px] overflow-hidden rounded-full">
                            <img src={author} alt="Actor Image" className="w-full" />
                        </div>
                        <div>
                            <h4 className="text-lg font-medium leading-snug text-dark">
                            Name
                            </h4>
                            <p className="text-sm text-body-color">Role</p>
                        </div>
                        </div>
                        <div className="w-full p-4 lg:w-3/12 md:w-1/2 flex items-center border-b border-stroke">
                        <div className="mr-5 h-20 w-20 max-w-[80px] overflow-hidden rounded-full">
                            <img src={author} alt="Actor Image" className="w-full" />
                        </div>
                        <div>
                            <h4 className="text-lg font-medium leading-snug text-dark">
                            Name
                            </h4>
                            <p className="text-sm text-body-color">Role</p>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="mb-10">
                    <h2 className="text-4xl font-semibold text-dark">Reviews</h2>
                    <span className="inline-block h-[2px] w-20 bg-primary" />
                    <div className="h-80 overflow-auto p-4 mb-10">
                        <div className="flex items-start gap-4 rounded-xl border-b bg-white p-4  sm:px-[30px]">
                        <div className="h-[50px] w-[50px] overflow-hidden rounded-full">
                            <img
                            src={author}
                            alt="author"
                            className="h-[50px] w-[50px] overflow-hidden rounded-full"
                            />
                        </div>
                        <div className="flex flex-col w-full">
                            <div className="flex w-full gap">
                            <div>
                                <h3 className="text-sm font-semibold text-dark">
                                Musharof Chowdhury
                                </h3>
                                <p className="text-xs text-body-secondary">
                                Founder @ Ayto UI
                                </p>
                            </div>
                            <div className="mb-[18px] flex items-center gap-1">
                                <img src={starIcon} alt="star icon" />
                                <img src={starIcon} alt="star icon" />
                                <img src={starIcon} alt="star icon" />
                                <img src={starIcon} alt="star icon" />
                                <img src={starIcon} alt="star icon" />
                            </div>
                            </div>
                            <div className="mt-4">
                            <p className="text-base text-body-color">
                                “Our members are so impressed. It's intuitive. It's clean.
                                It's distraction-free. If you're building a community.”
                            </p>
                            </div>
                        </div>
                        </div>
                        <div className="flex items-start gap-4 rounded-xl border-b bg-white p-4  sm:px-[30px]">
                        <div className="h-[50px] w-[50px] overflow-hidden rounded-full">
                            <img
                            src={author}
                            alt="author"
                            className="h-[50px] w-[50px] overflow-hidden rounded-full"
                            />
                        </div>
                        <div className="flex flex-col w-full">
                            <div className="flex w-full">
                            <div>
                                <h3 className="text-sm font-semibold text-dark">
                                William Smith
                                </h3>
                                <p className="text-xs text-body-secondary">
                                Founder @ Trorex
                                </p>
                            </div>
                            <div className="mb-[18px] flex items-center gap-1">
                                <img src={starIcon} alt="star icon" />
                                <img src={starIcon} alt="star icon" />
                                <img src={starIcon} alt="star icon" />
                                <img src={starIcon} alt="star icon" />
                                <img src={starIcon} alt="star icon" />
                            </div>
                            </div>
                            <div className="mt-4">
                            <p className="text-base text-body-color">
                                “Our members are so impressed. It's intuitive. It's clean.
                                It's distraction-free. If you're building a community.”
                            </p>
                            </div>
                        </div>
                        </div>
                        <div className="flex items-start gap-4 rounded-xl border-b bg-white p-4  sm:px-[30px]">
                        <div className="h-[50px] w-[50px] overflow-hidden rounded-full">
                            <img
                            src={author}
                            alt="author"
                            className="h-[50px] w-[50px] overflow-hidden rounded-full"
                            />
                        </div>
                        <div className="flex flex-col w-full">
                            <div className="flex w-full">
                            <div>
                                <h3 className="text-sm font-semibold text-dark">
                                Sabo Masties
                                </h3>
                                <p className="text-xs text-body-secondary">
                                Founder @ Rolex
                                </p>
                            </div>
                            <div className="mb-[18px] flex items-center gap-1">
                                <img src={starIcon} alt="star icon" />
                                <img src={starIcon} alt="star icon" />
                                <img src={starIcon} alt="star icon" />
                                <img src={starIcon} alt="star icon" />
                                <img src={starIcon} alt="star icon" />
                            </div>
                            </div>
                            <div className="mt-4">
                            <p className="text-base text-body-color">
                                “Our members are so impressed. It's intuitive. It's clean.
                                It's distraction-free. If you're building a community.”
                            </p>
                            </div>
                        </div>
                        </div>
                        <div className="flex items-start gap-4 rounded-xl border-b bg-white p-4  sm:px-[30px]">
                        <div className="h-[50px] w-[50px] overflow-hidden rounded-full">
                            <img
                            src={author}
                            alt="author"
                            className="h-[50px] w-[50px] overflow-hidden rounded-full"
                            />
                        </div>
                        <div className="flex flex-col w-full">
                            <div className="flex w-full gap">
                            <div>
                                <h3 className="text-sm font-semibold text-dark">
                                Musharof Chowdhury
                                </h3>
                                <p className="text-xs text-body-secondary">
                                Founder @ Ayto UI
                                </p>
                            </div>
                            <div className="mb-[18px] flex items-center gap-1">
                                <img src={starIcon} alt="star icon" />
                                <img src={starIcon} alt="star icon" />
                                <img src={starIcon} alt="star icon" />
                                <img src={starIcon} alt="star icon" />
                                <img src={starIcon} alt="star icon" />
                            </div>
                            </div>
                            <div className="mt-4">
                            <p className="text-base text-body-color">
                                “Our members are so impressed. It's intuitive. It's clean.
                                It's distraction-free. If you're building a community.”
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <form
                        className="mb-10 bg-gray-100 p-4 rounded-lg"
                        data-wow-delay="0.1s"
                    >
                        <h2 className="text-2xl font-bold mb-4">Add yours!</h2>
                        <div className="mb-4 lg:w-1/2">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                        />
                        </div>
                        <div className="mb-4 lg:w-1/2">
                        <label htmlFor="rate">Rate</label>
                        <div className="flex space-x-1">
                            <span className="text-gray-300 text-xl">★</span>
                            <span className="text-gray-300 text-xl">★</span>
                            <span className="text-gray-300 text-xl">★</span>
                            <span className="text-gray-300 text-xl">★</span>
                            <span className="text-gray-300 text-xl">★</span>
                        </div>
                        </div>
                        <div className="mb-4">
                        <label htmlFor="thoughts">Your thoughts</label>
                        <textarea
                            id="thoughts"
                            name="thoughts"
                            rows={4}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                            defaultValue={""}
                        />
                        </div>
                        <p className="text-body-secondary">
                        you can only submit your comment once.
                        </p>
                        <div className="m-4 w-full">
                        <a className="text-white inline-flex items-center justify-center py-2 text-base font-medium text-center rounded-md bg-primary px-7 hover:bg-blue-dark">
                            Submit
                        </a>
                        </div>
                    </form>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
