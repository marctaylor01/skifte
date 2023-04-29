import './postLink.css'

export default function PostLink (props) {
    return (
      <>
        <a className={`pg-link ${props.className}`} href={window.location.origin + props.reference}>
            {props.display}
        </a>
      </>
    )
  }
  