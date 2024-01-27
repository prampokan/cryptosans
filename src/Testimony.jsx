import Card from "./components/card"

const Testimony = () => {
    return (
        <section className="bg-slate-950 min-h-full py-60 flex justify-center items-center" id="testimony">
            <div className="w-[75rem]">
                <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-sky-100 font-bold text-2xl sm:text-3xl md:text-5xl lg:text-7xl pb-10 sm:mx-5 md:mx-5 lg:mx-0 mx-3">
                    Testimony from the most famous people in the world
                </h1>
                <div className="flex flex-col gap-5 md:flex-row sm:mx-5 md:mx-5 lg:mx-0 mx-3">
                    <Card 
                        image="images/donald-trump.jpg"
                        nama="Donald Trump"
                        job="Ex American President"
                        testimoni="CryptoSans's a winner, folks! Even sleepy Joe doubted it at first, but now he's in. Tremendous gains! It's the future, and I always pick winners."
                    />
                    <Card 
                        image="images/joe-biden.jpg"
                        nama="Joe Biden"
                        job="American President"
                        testimoni="I was cautious, but after careful consideration, I joined CryptoSans. It's about responsible decisions. Let's see where it takes us, focused on building back better."
                    />
                </div>
            </div>
        </section>
    )
}

export default Testimony