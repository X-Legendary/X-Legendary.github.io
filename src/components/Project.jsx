import "../css/Project.css"

function Project({ name, description, link, special }) {
    const className = special ? "project special-project" : "project"
    return (
        <div className={className}>
           <h1>{name}</h1>
           <p>{description}</p>
           <a href={link} target="_blank">
               <button>Project Link</button>
           </a>
        </div>
    )
}

export default Project