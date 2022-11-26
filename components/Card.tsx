import Image from "next/image";

const Card = ({item, category}) => {
    return (
        
        <div className="h-56 w-full relative self-center rounded group bg-slate-200">

            {/* Overlay 1 */}
            <Image
                className="object-cover object-center z-[2]"
                alt={`test`}
                src={`https://source.unsplash.com/1600x900/?${category}/${item}`}
                fill
            />

            {/* Overlay 2 */}
            <div 
                className="flex flex-col justify-end w-full h-full absolute z-[3] inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b from-black/90 via-black/30 to-black/90 transition-all duration-300"
            >
                <div className="flex items-center gap-2 p-3">

                    {/* Rounded user image */}
                    <div className="bg-gray-200 h-7 w-7 rounded-full relative overflow-hidden border-2 border-white">
                        <Image
                            loading="lazy"
                            width="28"
                            height="28"
                            alt="User Profile Image"
                            src={`https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=100`}
                        />
                    </div>

                    {/* User name and info */}
                    <div>
                        <p className="text-white text-xs font-medium">John Doe</p>
                        <p className="text-gray-300 text-[0.625rem]">johndoe@gmail.com</p>
                    </div>

                </div>
            </div>

        </div>

    )
}
export default Card;