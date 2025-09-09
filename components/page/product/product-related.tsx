/* 相关产品 */

function RelatedProducts() {
    const products:Array<ProductContent> = []
    return (
        <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {products.slice(0, 3).map((relatedProduct, index) => (
                    <div
                        key={index + '_' + relatedProduct.id}
                        className="bg-gray-800 rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105"
                    >
                        <div className="h-48 bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center">
                            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-24 h-24" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-2">{relatedProduct.proName}</h3>
                            <p className="text-gray-300 mb-4 text-sm">{relatedProduct.proIntroduction?.substring(0, 80)}...</p>
                            <div className="flex justify-between items-center">
                                <span className="text-lg font-bold">${relatedProduct.proPrice.toFixed(2)}</span>
                                <a
                                    href={`/main/product/${relatedProduct.id}`}
                                    className="bg-purple-600 hover:bg-purple-700 text-white py-1 px-3 rounded-full text-sm transition"
                                >
                                    View
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}