import {GiLion} from 'react-icons/gi';


export default function Header(props) {


    return(
    <nav class="bg-gradient-to-br from-green-400 to-cyan-500 flex justify-center px-2 py-5">
        <h2 class="font-mono lg:text-5xl md:text-4xl px-3" style={{transform:"scaleX(-1)",verticalAlign:"Bottom"}}><GiLion/> </h2>
        <h1 class="font-mono lg:text-5xl md:text-3xl flex text-opacity-80 uppercase">The Leo's Educational Academy,</h1>
        <h2 class="font-mono lg:text-5xl md:text-3xl px-3" ><GiLion/> </h2>
    </nav>
    )
    
}