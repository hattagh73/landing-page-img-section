import Card from './Card';

const SecArchitecture = () => {
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
                {   [1,2,3,4,5,6].map((i, index) =>
                    <Card key={index} item={i} category="Architecture"/>
                )}
                
            </div>
                    
        </section>

    )
}
export default SecArchitecture;

