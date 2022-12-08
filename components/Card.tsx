import Image from "next/image";
import { iResults } from "../unsplash_type";

interface iItem {
    item: iResults
}

const Card = ({item}:iItem) => {
    
    return (
        
        <div className="h-56 w-full relative self-center rounded group bg-slate-200">

            {/* Overlay 1 - Image from Unsplash */}
            <Image
                placeholder="blur"
                blurDataURL="/img-3d.png"
                className="object-cover object-center z-[2]"
                fill
                src={`${item.urls.full}`}
                alt={`test`}
                sizes="(max-width: 768px) 100vw,(max-width: 1200px) 20vw"
            />

            {/* Overlay 2 - If hover will display user's information */}
            <div 
                className="flex flex-col justify-end w-full h-full absolute z-[3] inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b from-black/90 via-black/30 to-black/90 transition-all duration-300"
            >
                <div className="flex items-center gap-2 p-3">

                    {/* Rounded user image */}
                    <div className="bg-gray-200 h-7 w-7 rounded-full relative overflow-hidden border-2 border-white">
                        <Image
                            // placeholder="blur"
                            // blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP89h8AAvEB93wyFi8AAAAASUVORK5CYII="
                            width="28"
                            height="28"
                            alt="User Profile Image"
                            src={item.user.profile_image.large}
                        />
                    </div>

                    {/* User name and info */}
                    <div className="w-3/4">
                        <p className="text-white text-xs font-medium">{item.user.first_name}</p>
                        {   item.user.portfolio_url ? (
                                <p 
                                    className="text-gray-300 text-[0.625rem] truncate"
                                >
                                    <a 
                                        rel="noreferrer" 
                                        target="_blank" 
                                        href={item.user.portfolio_url}
                                    >{item.user.portfolio_url}
                                    </a>
                                </p>
                            ) : (
                                <p className="text-gray-300 text-[0.625rem]">{`User's portfolio not found`}</p>
                            )
                        }
                    </div>

                </div>
            </div>

        </div>

    )
}
export default Card;