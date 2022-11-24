import Image from 'next/image';

const SecArchitecture = () => {
    return (
        <section 
            className="h-screen max-w-screen-lg mx-auto" 
            name="Architecture"
        >

            <p className="text-xl pt-4">Photos of Architecture</p>
                    
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-7 grid-rows-[220px_220px] pt-4">
                
                {   [1,2,3,4,5,6].map((i, index) =>
                    <div className="h-full relative self-center rounded group bg-slate-200" key={index}>
                        <Image
                            className="object-cover object-center z-[1]"
                            alt={`test`}
                            src={`https://source.unsplash.com/1600x900/?architecture/${i}`}
                            fill
                        />
                        <div 
                            className="group-hover:flex flex-col justify-end w-full h-full hidden absolute z-[2] inset-0 group-hover:bg-gradient-to-b from-black/70 via-black/0 to-black/70"
                        >
                            <div className="flex items-center gap-2 p-2">
                                <div className="bg-gray-200 h-7 w-7 rounded-full relative overflow-hidden border-2 border-white">
                                    <Image
                                        width="28"
                                        height="28"
                                        alt="User Profile Image"
                                        src={`https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=100`}
                                    />
                                </div>
                                <div>
                                    <p className="text-white text-xs font-medium">John Doe</p>
                                    <p className="text-gray-300 text-[0.625rem] italic">johndoe@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                
            </div>
                    
        </section>
    )
}
export default SecArchitecture;

