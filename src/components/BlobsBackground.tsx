const BlobsBackground = () => {
    return (
        <div className="fixed h-dvh w-full bg-white -z-10">
            <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
            <div className="absolute opacity-80 top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,hsla(270,100%,85%,0.5)_100%)]"></div>
        </div>
    )
}

export default BlobsBackground