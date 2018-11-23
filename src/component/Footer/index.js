import React from "react";
import ReactDOM from "react-dom";
// import FooterData from '../../../public/FooterData.json';
import './index.less'

export default class Footer extends React.Component {
     constructor(props){
         super(props);
         this.state = {
             FooterData:[
                 {
                     img:require('../../image/footer/index.png'),
                     text:'首页'
                 },
                 {
                     img:require('../../image/footer/index.png'),
                     text:'首页'
                 },
                 {
                     img:require('../../image/footer/index.png'),
                     text:'首页'
                 },
                 {
                     img:require('../../image/footer/index.png'),
                     text:'首页'
                 },
             ],
             currentIndex:0
         }


     }

    select = (index) =>{
        this.setState({
            currentIndex:index
        })
    }
     render() {
         let FooterData  = this.state.FooterData;
         console.log(FooterData);
         return(
             <ul className="footerBox">
                 {
                     FooterData.map((item,index)=>{
                         return(
                             <li key={index} className={this.state.currentIndex == index?'current':''}  onClick={this.select.bind(this ,index)}>
                                 <img src={item.img} alt=""/>
                                 <p>{item.text}</p>
                             </li>
                         )
                     })
                 }
             </ul>
         )

     }

 }