import Image from 'next/image';

const SecArchitecture = () => {
    return (
        <section 
            className="h-screen max-w-screen-lg mx-auto" 
            name="Architecture"
        >

            <p className="text-xl pt-4">Photos of Architecture</p>
                    
            <div className="grid grid-cols-4 gap-7 grid-rows-[220px_220px] pt-4">
                
                {   [1,2,3,4,5,6].map((i, index) =>
                    <div className="h-full relative self-center overflow-hidden rounded group bg-slate-200" key={index}>
                        <Image
                            className="object-cover object-center z-[1]"
                            alt={`test`}
                            src={`https://source.unsplash.com/1600x900/?architecture/${i}`}
                            fill
                        />
                        <div className="group-hover:absolute z-[2] inset-0 group-hover:bg-gradient-to-b from-black/80 via-black/5 to-black/80">
                            <div className="bg-gray-200 h-16 w-16 rounded-full"></div>
                            <p>test</p>
                        </div>
                    </div>
                )}
                
            </div>
                    
        </section>
    )
}
export default SecArchitecture;

