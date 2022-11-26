import Card from './Card';

const SecInterior = () => {
    return (

        //** Section Interior **//
        <section 
            className="max-w-screen-lg h-screen mx-auto px-6 lg:px-0" 
            id="Interior"
        >

            {/* Title */}
            <p className="text-base mt-4">Photos of Interior</p>

            {/* Cards Container */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-7 pt-4">
                
                {/* Card Component */}
                {   [1,2,3,4].map((i, index) =>
                    <Card key={index} item={i} category="Interior"/>
                )}
                
            </div>
                    
        </section>

    )
}
export default SecInterior;