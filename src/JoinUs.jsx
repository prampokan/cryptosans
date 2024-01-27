import CardJoin from "./components/cardJoin"
import Footer from "./Footer"

const Joinus = () => {
    return (
        <>
            <section className="bg-gradient-to-t from-violet-950 to-slate-950 min-h-full py-32 flex justify-center items-center" id="joinus">
                <div className="w-[75rem] flex flex-col justify-center items-center">
                    <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-sky-100 font-bold text-2xl sm:text-3xl md:text-5xl lg:text-6xl pb-10 sm:mx-5 md:mx-5 lg:mx-0 mx-3">
                        why choose us?
                    </h1>
                    <div className="flex flex-wrap gap-6 justify-center lg:justify-center md:justify-center sm:justify-center xl:justify-start">
                        <CardJoin 
                            icons={
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /> 
                            }
                            header="Real-Time Updates"
                            content="Get instant updates on market trends, news, and CryptoSans announcements directly from the source."
                        />
                        <CardJoin 
                            icons={
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                            }
                            header="Educational Resources"
                            content="Access valuable resources and guides to enhance your crypto knowledge. Whether you're a novice or an expert, there's always something new to learn."
                        />
                        <CardJoin 
                            icons={
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                            }
                            header="Community Engagement"
                            content="Engage in lively discussions, ask questions, and share your experiences with fellow crypto enthusiasts. The CryptoSans Discord is a hub for collaboration and networking."
                        />
                        <CardJoin
                            icons={
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                            }
                            header="Exclusive Promotions"
                            content="Be the first to know about exclusive promotions, airdrops, and events happening on CryptoSans. Don't miss out on exciting opportunities!"
                        />
                        <CardJoin
                            icons={
                                <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                            } 
                            header="24/7 Customer Support"
                            content="Have questions or concerns? Our dedicated support team is available around the clock to assist you."
                        />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Joinus