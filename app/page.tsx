import Offer from "@/app/components/offer";
import {Price} from "@/app/components/price";
import Coaches from "@/app/components/coaches";
import {About} from "@/app/components/about";

export default function Home() {
  return <div>
      <Offer/>
      <Price/>
      <Coaches/>
      <About/>
  </div>;
}
