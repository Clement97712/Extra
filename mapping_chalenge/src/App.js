import React, { Component } from 'react';
import './css/App.css';

class App extends Component {

      state={
        texte:"",
        data:[{
          element:{
            image:"./Images/photo1.jpg",
            texte:"Everyday, I say 'Why Not'. ",
            nom:"Sue Bird"
          } 
        },
        {
         element:{
          image:"./Images/photo3.jpg",
          texte:"Vamos. ",
          nom:"Rafael Nadal"
        }   
      },
      {
        element:{
        image:"./Images/photo2.jpg",
        texte:"This why we play. ",
        nom:"Kyrie Irving"
        }
      }
      
      ]

      }
  
  render() {
    let constante =
      this.state.data.map((el,index)=>{
        return(
          <div key={index} className="Wit-container">
          <div className="Wit-texteCache">
            <em className="Wit-text"> {el.element.texte}&nbsp;</em>
            <p><strong> {el.element.nom}</strong></p>
          </div>
            <img src={require(el.element.image)} className="Wit-app" alt="portrait"/>
            <p>{el.text}</p>
            
          </div>
          
        )

    });
    return (
      <div className="Wit-container">
       {constante}
      </div>
    );
  }
}

export default App;
