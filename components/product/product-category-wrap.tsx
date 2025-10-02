import { GetWebChannelListByNo } from "@/app/api/server/server";


export default async function ProductCategoryWrap({
    catid
}:{
    catid?:string
}) {
    const ProChannels = await GetWebChannelListByNo('8900028384');
    
    return (
        <div className="flex space-x-2 md:space-x-4 justify-center min-w-max">
            {ProChannels.map((category) => (
                <a href={`/product?catid=${category.id}`}
                    key={category.id}
                    className={`px-4 py-2 rounded-full whitespace-nowrap transition ${catid === category.id
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                        }`}
                >
                    {category.name}
                </a>
            ))}
        </div>
    );
}