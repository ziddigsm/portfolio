import './FooterColumn.css'
import '../../index.css'
import { useState } from 'react';

interface FooterLink {
    title: string,
    type: string
}

interface FooterLinkList {
    title: string
    theme: string
    list: FooterLink[]
}


export default function FooterColumn (props: FooterLinkList){
    const [isSelected, setIsSelected] = useState<number | null>(null);
    const handleClick = ( index:number)=>{
         setIsSelected(isSelected === index ? null : index)
    }
    return (
        <>
        <h2 className='heading'>{props.title}</h2>
        <ul>{props.list.map((item, index)=>{
            return (
                <li className={`footer-columnlist ${isSelected === index ? "selected" : ""}`} key={index} data-theme = {props.theme}>
            <a href={`#${item.title}`} onClick={()=>{isSelected === index ? null: handleClick(index)}}>{item.title}</a>
          </li>
            )
        })}
        </ul>
        </>
    )
}