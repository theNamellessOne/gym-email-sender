import {ReactNode} from "react";
import {Dumbbell} from "lucide-react";

export function Price() {
    const data = [
        {
            icon: <Dumbbell size={48} className={"text-red-600"}/>,
            name: "1 Month",
            price: 300,
        },
        {
            icon: <div className={"flex"}>
                <Dumbbell size={48} className={"text-red-600"}/>
                <Dumbbell size={48} className={"text-red-600"}/>
            </div>,
            name: "6 Month",
            price: 1700,
        },
        {
            icon: <div className={"flex"}>
                <Dumbbell size={48} className={"text-red-600"}/>
                <Dumbbell size={48} className={"text-red-600"}/>
                <Dumbbell size={48} className={"text-red-600"}/>
            </div>,
            name: "12 Month",
            price: 3200,
        }
    ];

    return (
        <div id={"pricing"} className={"my-10"}>
            <h1 className={"text-5xl text-center font-bold text-white"}>Prices</h1>
            <div className={"my-10 flex gap-4 flex-row flex-wrap px-8"}>
                {data.map(item => {
                    return PriceCard(item);
                })}
            </div>
        </div>
    );
}

function PriceCard(priceCardProps: {icon: ReactNode, name: string, price: number}) {
    return (
        <div className={"flex p-8 flex-col gap-4 border-1 flex-1 text-white w-1/3"}>
            { priceCardProps.icon }
            <br/>
            <p className={"text-2xl"}>
                { priceCardProps.name }
            </p>
            <p className={"text-lg"}>
                { priceCardProps.price } UAH
            </p>
        </div>
    );
}