export default function BannerInfo({
    tag,
    title,
    description,
    children
}: Readonly<{
    tag?: string,
    title:string,
    description:string,
    children?:React.ReactNode
}>) {

    return (
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-gray-700 to-gray-800  dark:from-gray-950 dark:to-gray-800 text-white mb-8">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjAuNSIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybikiLz48L3N2Zz4=')]"></div>
            <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-24">
                <div className="max-w-3xl">
                    {
                        tag ? <span className="inline-block px-4 py-1 bg-purple-600 rounded-full text-sm font-medium mb-6">
                            {tag}
                        </span> : null
                    }
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text dark:text-transparent">
                        {title}
                    </h1>
                    <p className="text-xl text-gray-200 mb-8 dark:bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text dark:text-transparent">
                        {description}
                    </p>
                    {
                        children
                    }
                </div>
            </div>
        </div>
    );
}