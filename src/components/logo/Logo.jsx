import s from "./style.module.css";

export function Logo ({image , title , subTitle}){
    return (
        <>
        <div className={s.container}>
            <img src={image} className={s.img}/>
            <span className={s.title}>{title}</span>
        </div>
        <span className={s.subTitle}>{subTitle}</span>
        </>)
}