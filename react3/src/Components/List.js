import React, {Component} from 'react'
import card from '../Data/data'
import ListItem from './ListItem'

class List extends Component{
    constructor(props){
        super(props)

        this.state ={
            card: card, 
            index: 1
        }
        
    }

    handleNext(){

    }

    handlePrevious(){

   }

    render() {
        const cardMap = this.state.card.filter(el => (
            el.id === this.state.index
        )).map(card => {
            return <ListItem key={card.id} card={card}/>
        })
        return (
            <div className='List'>{cardMap}
                
            </div>
        )
    }
}

export default List;