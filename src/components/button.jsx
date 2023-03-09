export default function button(props) {
  return (
    <div>
     <button className="{props.class}" 
             onClick={props.onClick}>
        {props.value} 
     </button>
    </div>
  )
}
