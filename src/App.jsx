import "./global.css"
import s  from "./style.module.css"
import { TVShowApi } from "./api/tv-show"
import { useEffect, useState } from "react"
import {BACKDROP_BASE_URL} from "./config"
import { TVShowDetail } from "./components/TVShowDetail/TVShowDetail"
import {Logo} from "./components/logo/Logo"
import logo from "./assets/img/logo.png"
import { TVShowListItem } from "./components/TVShowListItem/TVShowListItem"
import { TVShowList } from "./components/TVShowList/TVShowList"

export  function App(){

    
    const [currentTVShow , setCurrentTVShow]= useState();
    const [recommendationsList , setRecommendationList]= useState([]);

    async function fetchPopulars(){
        const populars = await TVShowApi.fetchPopulars();
        if (populars.length > 0){
            setCurrentTVShow(populars[0])
        }

    }

    async function fetchRecommendations(tvShowId){
        const recommendationsList = await TVShowApi.fetchRecommendations(tvShowId);
        if (recommendationsList.length > 0){
            setRecommendationList(recommendationsList.slice(0,10));
        }

    }

    useEffect ( ()=> {
        fetchPopulars();
     
    }, []);

    useEffect ( ()=> {
        if(currentTVShow){
            fetchRecommendations(currentTVShow.id)
        }
     
    }, [currentTVShow]);

    function setCurrentTVShowfromRecommendation(tvShow){
        alert(JSON.stringify(tvShow))

    }
    console.log('***' ,recommendationsList)
    
    

    return(
        <div className={s.main_container}
        style={{
            background: currentTVShow
              ? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
              : "black",
          }}
        >
            <div className={s.header}>
                <div className="row">
                    <div className="col-4">
                        <Logo image={logo} title="WatWatch" subTitle="find a show you may like"/>
                    </div>
                
                
                    <div className="col-sm-12 col-md-4">
                        <input style={{width:"100%"}} type="text" />
                    </div>
                </div>
            </div>
            <div className={s.tv_show_detail}>
                {currentTVShow && <TVShowDetail tvShow={currentTVShow} />}
            </div>
            <div className={s.recommendations}>
                {recommendationsList && recommendationsList.length>0 && ( <TVShowList tvShowList={recommendationsList}/>)}
                </div>
        </div>
    )
}