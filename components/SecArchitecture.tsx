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
                        <div 
                            className="group-hover:block hidden absolute z-[2] inset-0 group-hover:bg-gradient-to-b from-black/70 via-black/20 to-black/70"
                        >
                            <div>
                                <div className="bg-gray-200 h-12 w-12 rounded-full">user image</div>
                                <p>user name</p>
                            </div>
                        </div>
                    </div>
                )}
                
            </div>
                    
        </section>
    )
}
export default SecArchitecture;

