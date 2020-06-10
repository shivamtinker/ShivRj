import React from 'react'
import data from './data.json';
import Card from './Card'

class App extends React.Component {
  render(){
      let newCardList = data.map((dataItem)=>{
      // let shivam= {
      //   name:dataItem.name,
      //   description:dataItem.description
      // };
      return <Card brand= {dataItem}></Card>
    }) 

    //console.log(cardList);
    //console.log(data);
    // const cardInfo={
    //   name:"shivam",
    //   description:"he is a boy",
    //   status:"in progress"
    // }
    return (
      <div>
         {
           newCardList
         }
      </div>
    )

  }
  
}

export default App;
