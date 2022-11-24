import Image from "next/image";

    
const SecHero = () => {
    return (
        <section className="max-w-screen-lg mx-5 lg:mx-auto py-8 grid lg:grid-cols-3">
            {/* Hero Col One */}
            <div className="col-span-2">
                <h1 className="font-semibold text-5xl">Landing Page Of Photos By Categories</h1>
                <p className="mt-6 text-sm">
                    Photos are from <span className="italic underline"><a href="https://unsplash.com/">Unsplash</a></span>
                </p>
            </div>
            {/* Hero Col Two */}
            <div className="">
                <div className="-rotate-3 bg-slate-100 w-7/12 p-2">
                    <Image 
                        src={`https://images.unsplash.com/photo-1470042100013-aff2a8f93778?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80`}
                        width="208"
                        height="200"
                        alt="Polaroid Image"
                    />
                </div>
            </div>
        </section>
    )
}
export default SecHero;
    