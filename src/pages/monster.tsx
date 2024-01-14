import { Hono } from 'hono';
import { FC } from 'hono/jsx';

export const monsterPage = new Hono();

  const Layout: FC = (props) => {
    return (
      <html lang='en'>
        <style>
          {`
            .header {
              width: max-content;
              border-radius: 0.375rem; 
              border-width: 1px; 
              border-color: #F3F4F6; 
              background: #fefefe;
              padding: 0.75rem;
              text-align: center;
              margin-top: 2rem;
            }
            h1 {
              font-family: Helvetica;
              font-size: 4rem;
              color: black;
              padding: 1rem;
              margin: 0;
            }
            h4 {
              font-family: Helvetica;
              color: black;
              font-size: 1.125rem;
            }
            .list {
              border-radius: 0.375rem; 
              border-width: 1px; 
              border-color: #F3F4F6; 
              background: #fefefe;
              padding: 0 2rem 0 1rem;
              min-width: 20%;
            }
            ul {
              list-style-type: none;
              padding: 0;
              margin: 0
            }
            li {
              padding: 0;
              margin: 0;
              border: none;
              outline: none;
            }
            img {
              border-radius: 0.375rem; 
              box-shadow:  20px 20px 60px #7e7e7e,-20px -20px 60px #7e7e7e;
            }
            .layout {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }
            .cols {
              display: flex;
              flex-direction: row;
              justify-content: start;
              gap: 1rem;
            }
            .col div {
              flex-grow: 1;
            }
          `}
        </style>
        <body style="background: url('https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/08/dd-dragon-feature.jpg');background-position:center;background-repeat:no-repeat;padding:0;margin:0;">{props.children}</body>
      </html>
    )
  }

 const MonsterPage: FC<{ monster: any, base: string }> = (props: { monster: any, base: string }) => {
    const monsterState = {
      size: props.monster.size,
      type: props.monster.type,
      subtype: props.monster.subtype,
      alignment: props.monster.alignment,
      armor_class: props.monster.armor_class ? props.monster.armor_class : null,
      hit_points: props.monster.hit_points,
      hit_dice: props.monster.hit_dice,
      speed: props.monster.speed ? props.monster.speed : null,
      strength: props.monster.strength,
      dexterity: props.monster.dexterity,
      constitution: props.monster.constitution,
      intelligence: props.monster.intelligence,
      wisdom: props.monster.wisdom,
      charisma: props.monster.charisma,
      languages: props.monster.languages,
      challenge_rating: props.monster.challenge_rating,
    }

    const monsterEntries = Object.entries(monsterState);
    const chunkSize = 8;
    const chunks = [];

    for (let i = 0; i < monsterEntries.length; i += chunkSize) {
      const chunk = monsterEntries.slice(i, i + chunkSize);
      chunks.push(chunk);
    }

    return (
      <Layout>
        <div class="layout">
          <div class="header">
            <h1>Monster Name: {props.monster.name}</h1>
          </div>
          <hr />
          <div class="cols">
              <div>
                {props.monster.image ?
                  <img src={`${props.base}${props.monster.image}`} width="400" height="400" alt={props.monster.name} />
                :
                  <img src="https://placehold.co/400x400" alt="placeholder" />
                }
              </div>

              {chunks.map((chunk, i) => (
                <div class="list">
                  <ul key={i}>
                    {chunk.map(([key, value]) => {
                      if (value) {
                        return (
                          <li key={key}>
                            <h4>{key}: {value}</h4>
                          </li>
                        );
                      }
                    })}
                  </ul>
                </div>
              ))}
            </div>
        </div>
      </Layout>
    );
  }

  export default MonsterPage;