import { useState, useEffect } from 'react';
import { MainGrid } from "../src/components/MainGrid";
import { Box } from '../src/components/Box';
import { AlurakutMenu, OrkutNostalgicIconSet, AlurakutProfileSidebarMenuDefault } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';
import ProfileSideBar from '../src/components/ProfileSideBar';
import ProfileRelationsBox from '../src/components/ProfileRelationBox';

export default function Home() {
  const githubUser = "VitorHugoAntunes";
  const [communities, setCommunities] = useState([{
    title: 'Eu odeio acordar cedo',
    image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'
  }]);

  const favoritePeople = [
    'juunegreiros',
    'omariosouto',
    'peas',
    'rafaballerini',
    'marcobrunodev',
    'felipefialho',
    'VitorHugoAntunes',
    'diego3g',
    'filipedeschamps'
  ]
  
  const cardType = {
    communities,
    favoritePeople
  }

  const [followers, setFollowers] = useState([]); 

  useEffect(() => {
    fetch('https://api.github.com/users/VitorHugoAntunes/followers').then((serverResponse) => {
      return serverResponse.json();
    }).then((response) => {
      setFollowers(response)
    })
  }, [])

  return (
    <>
      <AlurakutMenu githubUser={githubUser}/>
      <MainGrid>
        <div className="profileArea" style={{ gridArea: "profileArea" }}>
          <ProfileSideBar  githubUser={githubUser}/>
        </div>
        <div className="welcomeArea" style={{ gridArea: "welcomeArea" }}>
          <Box>
            <h1 className="title">
              Bem vindo(a)
            </h1>

            <OrkutNostalgicIconSet />
          </Box>

          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form onSubmit={(e) => {
              e.preventDefault()
              const formData = new FormData(e.target)

              const community = {
                id: new Date().toISOString(),
                title: formData.get('title'),
                image: formData.get('image')
              }

              const newCommunities = [...communities, community]
              setCommunities(newCommunities)
            }}>
              <div>
                <input 
                  type="text"
                  name="title"
                  aria-label="Qual vai ser o nome da sua comunidade?"
                  placeholder="Qual vai ser o nome da sua comunidade?" 
                />
              </div>
              <div>
                <input 
                  type="text"
                  name="image"
                  aria-label="Coloque uma URL para usarmos de capa"
                  placeholder="Coloque uma URL para usarmos de capa" 
                />
              </div>

               <button>
                 Criar comunidade
               </button>
            </form>
          </Box>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: "profileRelationsArea" }}>
          <ProfileRelationsBox title="Seguidores" items={followers} />
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">Comunidades ({communities.length})</h2>

            <ul> 
              {communities.slice(0, 6).map((item, key) => {
                return (
                  <li key={key}>
                    <a href={`/users/${item.title}`} >
                      <img src={item.image}/>
                      <span>{item.title}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">Pessoas da comunidade ({favoritePeople.length})</h2>

            <ul> 
              {favoritePeople.slice(0, 6).map((item, key) => {
                return (
                  <li key={key}>
                    <a href={`/users/${item}`} >
                      <img src={`https://github.com/${item}.png`} />
                      <span>{item}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  );
}