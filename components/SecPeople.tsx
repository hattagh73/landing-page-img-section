import Card from './Card';

const SecPeople = ({peoples}) => {
    return (

        //** Section Interior **//
        <section 
            className="max-w-screen-lg mx-auto px-6 lg:px-0 pb-24" 
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
                        category="peoples"
                    />
                )}
                
            </div>
                    
        </section>

    )
}
export default SecPeople;