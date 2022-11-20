import Image from 'next/image';

const SecArchitecture = () => {
    return (
        <section className="h-screen max-w-screen-lg mx-auto" name="Architecture">

            <p className="text-4xl">Section</p>
                    
            <div className="mt-6 grid grid-cols-4 gap-7 grid-rows-[220px_220px] border">
                
                <div className="h-full relative self-center">
                    {/* <Image
                        className="object-cover object-center rounded-md"
                        alt="architecture"
                        src={i.image+'&'+index}
                        fill
                    /> */}
                </div>
                
            </div>
                    
        </section>
    )
}
export default SecArchitecture;