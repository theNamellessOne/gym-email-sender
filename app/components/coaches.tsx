import Image, {StaticImageData} from "next/image";
import GymCoach from "../../public/gym-coach.jpg"

export default function Coaches() {
    const data = [
        {
            imgUrl: GymCoach,
            name: "Oleksandr Ugrenuik"
        },
        {
            imgUrl: GymCoach,
            name: "Your Mom"
        },
        {
            imgUrl: GymCoach,
            name: "Denys Zhinariu"
        }
    ]

    return (
        <div className="my-10" id={"coaches"}>
            <h1 className={"text-5xl text-center font-bold text-white"}>Coaches</h1>
            <div className={"my-10 flex gap-4 flex-row px-8"}>
                {data.map(item => {
                    return Coach(item);
                })}
            </div>
        </div>
    )
}

function Coach(coachProps: {imgUrl: StaticImageData, name: string}) {
    return (
        <div className={"w-1/3"}>
            <div className={"h-[350px] relative text-white"}>
                <Image layout={'fill'} src={coachProps.imgUrl} alt={coachProps.name}/>
                <div className={"absolute inset-0 z-10 bg-black/75"}/>
            </div>
            <p className={"text-lg text-center text-white"}>{coachProps.name}</p>
        </div>
    );
}