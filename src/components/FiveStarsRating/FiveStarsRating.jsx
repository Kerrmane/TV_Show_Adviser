import s from "./style.module.css"
import {StarFill ,  Star as StarEmpty , StarHalf} from "react-bootstrap-icons"

export function FiveStarsRating({rating}){
    const starList =[];

    
    // console.log(typeof(rating));
    const starFillCount = Math.floor(rating);
    
     console.log((rating));
     console.log((starFillCount));

    const hasStarHalf =rating - starFillCount>= 0.5 ;

    const emptyStarCount = 5 - starFillCount -( hasStarHalf ?1 : 0);
    
    for (let i=1 ; i<=starFillCount ;i++){
        starList.push(<StarFill key={"starFillCount"+i}/>);
        
    }
    if(hasStarHalf){
        starList.push(<StarHalf key={"starHalf"}/>);
    }
    for (let i=1 ; i<=emptyStarCount ;i++){
        starList.push(<StarEmpty key={"emptyStarCount"+i}/>);
    }
    console.log((starList));
    return (
        <div>{starList}</div>
)
}