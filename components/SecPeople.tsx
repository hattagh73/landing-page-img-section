import { iResults } from '../unsplash_type';
import Card from './Card';

interface iPeoples {
    peoples: iResults[]
}

const SecPeople = ({peoples}:iPeoples) => {
    return (

        //** Section Interior **//
        <section 
            className="max-w-screen-lg mx-auto px-6 lg:px-0 pb-24 scroll-m-0" 
            id="People"
        >

            {/* Title */}
            <p className="text-base mt-4">Photos of People</p>

            {/* Cards Container */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-7 pt-4">
                
                {/* Card Component */}
                {   peoples && peoples.map(i =>
                    <Card 
                        key={i.id} 
                        item={i} 
                    />
                )}
                
            </div>
                    
        </section>

    )
}
export default SecPeople;