import { ProfileRelationsBoxWrapper } from '../ProfileRelations';

export default function ProfileRelationBox(props) {
    return(
      <ProfileRelationsBoxWrapper>
        <h2 className="smallTitle">{props.title} ({props.items.length})</h2>
  
        <ul> 
          {/* {communities.slice(0, 6).map((item, key) => {
            return (
              <li key={key}>
                <a href={`/users/${item.title}`} >
                  <img src={item.image}/>
                  <span>{item.title}</span>
                </a>
              </li>
            )
          })} */}
        </ul>
      </ProfileRelationsBoxWrapper>
    )
  }