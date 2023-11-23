import Image from "next/image";
import Dumbbells from "../../public/dumbbells.jpg"

export function About() {
    return (
        <div id={"about"} className="my-10 overflow-hidden">
            <h1 className={"text-5xl text-center font-bold text-white"}>About</h1>
            <div className={"my-10 flex items-center flex-col 2xl:flex-row justify-between overflow-hidden"}>
                <p className={"text-white text-lg my-10 max-w-3xl px-8"}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi atque blanditiis cumque doloribus dolorum ducimus, ea earum eius eos error est in, incidunt inventore iusto neque officia provident quae quaerat quas rem sapiente soluta tenetur velit veritatis voluptas voluptatum. Atque autem eaque magnam molestiae neque nobis omnis vitae voluptate.
                </p>
                <div className={"h-[600px] w-full relative text-white"}>
                    <Image layout={'fill'} src={Dumbbells} alt={"img"}/>
                    <div className={"absolute inset-0 z-10 bg-black/60"}/>
                </div>
            </div>
        </div>
    )
}