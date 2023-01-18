import "./global.css"
import s  from "./style.module.css"
import { TVShowApi } from "./api/tv-show"
import { useEffect, useState } from "react"

export  function App(){
    const [currentTVShow , setCurrentTVShow]= useState();

    async function fetchPopulars(){
        const populars = await TVShowApi.fetchPopulars();
        if (populars.length > 0){
            setCurrentTVShow(populars[0])
        }

    }
    useEffect ( ()=> {
        fetchPopulars();
       
        
        


    }, []);
    console.log('current',currentTVShow )
    

    return(
        <div className={s.main_container}>
            <div className={s.header}>
                <div className="row">
                    <div className="col-4">
                        <div>logo</div>
                        <div>sub title</div>
                    </div>
                
                
                    <div className="col-sm-12 col-md-4">
                        <input style={{width:"100%"}} type="text" />
                    </div>
                </div>
            </div>
            <div className={s.tv_show_detail}>show detail</div>
            <div className={s.recommendations}>recommendations</div>
        </div>
    )
}