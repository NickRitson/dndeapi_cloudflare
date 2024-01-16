import { FC } from 'hono/jsx';

import Navbar from '../components/Navbar';

  const Layout: FC = (props) => {
    return (
      <html lang='en'>
        <style>
          {`
            body {
              background-color: #12181c;
              height: 100%;
              overflow: hidden;
            }
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
            },
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
              padding: '0';
              margin: '0';
            }
            .cols {
              display: flex;
              flex-direction: row;
              justify-content: start;
              gap: 1rem;
            }
          `}
        </style>
        <body style="margin:0;padding:0">{props.children}</body>
      </html>
    )
  }

  const styles = {
    layout: {
      width: 'full',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundImage: 'url(https://wvdanpecuxvbliynroff.supabase.co/storage/v1/object/public/dnd-hono/dnddragon.webp?t=2024-01-15T18%3A52%3A02.092Z)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      height: '100vh',
      paddingTop: '4rem',
    },
    container: {
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    cardLayout: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    },
    card: {
      width: 'fit-content',
      padding: '1rem',
      margin: '0',
      backgroundColor: 'rgba(23, 29, 33, 0.8)',
      borderRadius: '0.375rem',
      border: 'none',
      boxShadow: '1px 5px 15px 0px #12181d',
    },
    cardTitle: {
      fontFamily: 'Helvetica',
      fontSize: '2rem',
      color: 'white',
      padding: '0',
      margin: '0',
    },
    cardSubInfo: {
      fontFamily: 'Helvetica',
      fontSize: '1rem',
      color: 'white',
      padding: '0',
      margin: '0',
    },
    flexRow: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '1rem',
    },
    flexRowNoSpace: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: '1rem',
    },
    hr: {
      display: 'block',
      height: '1px',
      border: 0,
      borderTop: '1px solid #ccc',
      margin: '1em 0',
      padding: 0,
    },
    imgCard: {
      width: 'fit-content',
      padding: '0',
      margin: '0',
      backgroundColor: 'rgba(23, 29, 33, 0.8)',
      borderRadius: '0.375rem',
      border: 'none',
      boxShadow: '1px 5px 15px 0px #12181d',
    },
    glass: {
      boxShadow: '1px 5px 15px 0px #12181d',
      backdropFilter: 'blur(5px) opacity(0.9)',
    },
    gridTwo: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
    }
  };

interface monsterData {
  name: string,
  size: string,
  type: string,
  subtype: string,
  alignment: string,
  armor_class: number,
  hit_points: number,
  hit_dice: string,
  speed: string,
  strength: number,
  dexterity: number,
  constitution: number,
  intelligence: number,
  wisdom: number,
  charisma: number,
  constitution_save: number,
  intelligence_save: number,
  wisdom_save: number,
  history: number,
  perception: number,
  damage_vulnerabilities: string,
  damage_resistances: string,
  damage_immunities: string,
  condition_immunities: string,
  senses: string,
  languages: string,
  challenge_rating: number,
  special_abilities: [
    {
      name: string,
      desc: string,
    }
  ],
  actions: [
    {
      name: string,
      desc: string,
    }
  ],
  legendary_actions: [
    {
      name: string,
      desc: string,
    }
  ],
  url: string,
  image: string,
}

 const MonsterPage: FC<{ monster: monsterData, base: string }> = (props: { monster: any, base: string }) => {

    return (
      <Layout>
        <Navbar />
        <div style={styles.layout}>
          <div style={styles.container}>
            <div style={styles.gridTwo}>
            <div className="col-2">
                <div style={styles.imgCard}>
                  <img src={`${props.base}${props.monster.image}`} width="100%" height="350px" alt={props.monster.name} />
                </div>
              </div>
              <div className="col-1">
                <div style={styles.cardLayout}>
                  <div class="card" style={styles.card}>
                    <h1 style={styles.cardTitle}>Monster Name: {props.monster.name}</h1>
                    <hr style={styles.hr} />
                    <div style={styles.flexRow}>
                      <div>
                        <h4 style={styles.cardSubInfo}>Size: {props.monster.size}</h4>
                      </div>
                      <div>
                        <h4 style={styles.cardSubInfo}>Type: {props.monster.type}</h4>
                      </div>
                      <div>
                        <h4 style={styles.cardSubInfo}>Alignment: {props.monster.alignment}</h4>
                      </div>
                    </div>
                  </div>
                  <div style={styles.flexRowNoSpace}>
                    <div class="card" style={styles.card}>
                      <h4 style={styles.cardSubInfo}>wis: {props.monster.wisdom}</h4>
                    </div>
                    <div class="card" style={styles.card}>
                      <h4 style={styles.cardSubInfo}>cons: {props.monster.constitution}</h4>
                    </div>
                    <div class="card" style={styles.card}>
                      <h4 style={styles.cardSubInfo}>cha: {props.monster.charisma}</h4>
                    </div>
                    <div class="card" style={styles.card}>
                      <h4 style={styles.cardSubInfo}>str: {props.monster.strength}</h4>
                    </div>
                  </div>
                  <div style={styles.flexRowNoSpace}>
                    <div class="card" style={styles.card}>
                      <h4 style={styles.cardSubInfo}>hit: {props.monster.hit_points}</h4>
                    </div>
                    <div class="card" style={styles.card}>
                      <h4 style={styles.cardSubInfo}>per: {props.monster.perception}</h4>
                    </div>
                    <div class="card" style={styles.card}>
                      <h4 style={styles.cardSubInfo}>int: {props.monster.intelligence}</h4>
                    </div>
                    <div class="card" style={styles.card}>
                      <h4 style={styles.cardSubInfo}>dex: {props.monster.dexterity}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  export default MonsterPage;