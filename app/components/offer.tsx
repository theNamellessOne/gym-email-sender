import Image from "next/image";
import gym from "../../public/gym.jpg";
import {Button} from "@nextui-org/button";

export default function Offer() {
    return (
        <div className={"h-[100vh] relative"}>
            <Image className={"inset-0"} fill src={gym} alt={"gym"}/>
            <div className={"absolute inset-0 z-10 bg-black/95"}>
                <div className={"pl-20 h-full z-20 flex flex-col justify-center"}>
                    <h1 className={"text-5xl font-bold text-red-600"}>Become a Member Today</h1>
                    <p className={"text-lg py-8 text-white w-[450px]"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, ex fugit laborum libero omnis perspiciatis placeat sed voluptatem! Aspernatur ea eligendi excepturi fugiat iste optio voluptate! Corporis laborum sint unde.</p>
                    <div className={"flex gap-4"}>
                        <Button size={"lg"} radius={"none"} className={"w-[200px] text-white bg-red-600 border-2 border-red-600 hover:border-white hover:bg-transparent"}>
                            Contact Us
                        </Button>
                        <Button size={"lg"} radius={"none"} variant={"bordered"} className={"w-[200px] text-white hover:bg-red-600 hover:border-red-600"}>
                            Lorem ipsum.
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}