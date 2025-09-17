export default function CustomersSay() {
    return (
        <>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-500 dark:bg-gray-800 p-8 rounded-xl">
                    <div className="flex items-center mb-4">
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                    </div>
                    <p className="text-gray-300 mb-6">
                        &#34;The Vapor Pro X has completely changed my vaping experience. The battery lasts all day and the flavor is incredible!&#34;
                    </p>
                    <div className="flex items-center">
                        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12 mr-4" />
                        <div>
                            <h4 className="font-bold text-gray-100">Alex Johnson</h4>
                            <p className="text-gray-300 text-sm">Vaper for 3 years</p>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-500 dark:bg-gray-800 p-8 rounded-xl">
                    <div className="flex items-center mb-4">
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                    </div>
                    <p className="text-gray-300 mb-6">
                        &#34;As a beginner, the Ninja Mini was perfect for me. Easy to use and produces just the right amount of vapor.&#34;
                    </p>
                    <div className="flex items-center">
                        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12 mr-4" />
                        <div>
                            <h4 className="font-bold text-gray-100">Sarah Williams</h4>
                            <p className="text-gray-300 text-sm">Vaper for 1 year</p>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-500 dark:bg-gray-800 p-8 rounded-xl">
                    <div className="flex items-center mb-4">
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                    </div>
                    <p className="text-gray-300 mb-6">
                        &#34;The Elite Tank is leak-proof as promised and holds so much e-liquid. I only need to refill once a week!&#34;
                    </p>
                    <div className="flex items-center">
                        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12 mr-4" />
                        <div>
                            <h4 className="font-bold text-gray-100">Michael Chen</h4>
                            <p className="text-gray-300 text-sm">Vaper for 5 years</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}