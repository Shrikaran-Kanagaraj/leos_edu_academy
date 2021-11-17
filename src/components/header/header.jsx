import {GiLion} from 'react-icons/gi';


export default function Header(props) {


    return(
    <nav className="bg-gradient-to-br from-green-400 to-cyan-500 flex justify-center px-2 py-5">
        <h2 className="lg:text-5xl md:text-4xl px-3 dark:text-white" style={{transform:"scaleX(-1)",verticalAlign:"Bottom"}}><GiLion/> </h2>
        <h1 className="lg:text-5xl md:text-3xl flex text-opacity-80 uppercase dark:text-white">The Leo's Educational Academy</h1>
        <h2 className="lg:text-5xl md:text-3xl px-3 dark:text-white" ><GiLion/> </h2>
    </nav>
    )
    
}