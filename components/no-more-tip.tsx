export default function NoMoreTip({
    msg
}: Readonly<{
    msg: string
}>) {

    return (
        <div className="text-center py-8 text-gray-400">
            <p>{msg}</p>
        </div>
    )
}