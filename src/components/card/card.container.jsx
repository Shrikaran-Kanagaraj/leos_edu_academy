import {card_data} from './card.data';
import Card from './card.component_v';


export default function CardContainer(){
    return(
        <container class="md:container md:mx-auto px-25 py-7">
            <div className="px-10 py-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-7 ">
            {
                card_data
                ?
                (
                    card_data.map((ele,id)=>{

                        return(
                            <Card key={id} data={ele}/>
                        )

                    })
                )
                :
                <></>
            }
            </div>
        </container>
    )
    
}