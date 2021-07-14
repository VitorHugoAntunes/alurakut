import { Box } from '../Box/index';
import { AlurakutProfileSidebarMenuDefault } from '../../lib/AlurakutCommons';

export default function ProfileSideBar(props){
    return(
        <Box as="aside">
          <img className="profilePhoto" src={`https://github.com/${props.githubUser}.png`} alt="Profile" />
          <hr />
  
          <p>
            <a className="boxLink" href={`https://github.com/${props.githubUser}`}>
              @{props.githubUser}
            </a>
          </p>
  
          <hr />
  
          <AlurakutProfileSidebarMenuDefault />
        </Box>
    );
  }