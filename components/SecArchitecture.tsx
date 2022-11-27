import Card from './Card';

const SecArchitecture = ({architectures}) => {
    return (

        //** Section Architecture **//
        <section 
            className="max-w-screen-lg lg:mx-auto px-6 lg:px-0 pb-24" 
            id="Architecture"
        >

            {/* Title */}
            <p className="text-base mt-4">Photos of Architecture</p>

            {/* Cards Container */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-7 pt-4">
                
                {/* Card Component */}
                {   architectures && architectures.map(i =>
                    <Card 
                        key={i.id} 
                        item={i} 
                        category="Architecture"
                    />
                )}
                
            </div>
                    
        </section>

    )
}
export default SecArchitecture;

