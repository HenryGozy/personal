interface Prop {
    title:string
}
export default function H2({title}:Prop){
    return(
        <h2 id="H2">{title}</h2>
    )
}