import { FC } from 'hono/jsx';

const styles = {
    container: {
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
    },
    title: {
        fontFamily: 'Helvetica',
        fontSize: '2rem',
        color: 'black',
        padding: '0',
        margin: '0',
    },
    iconTitle: {
        display: 'flex',
        alignItems: 'center',
    },
    iconAlign: {
        margin: '0 0.5rem 0 0',
    },
    listSkills: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    bentoGrid: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
        gridTemplateRows: '1fr 1fr 1fr 1fr 1fr',
        gridColumnGap: '1rem',
        gridRowGap: '1rem',
    },
    div1: {
        gridArea: '1 / 1 / 2 / 3',
        backgroundColor: 'white',
        borderRadius: '0.275rem',
        padding: '1rem',
    },
    div2: {
        gridArea: '2 / 1 / 4 / 3',
        borderRadius: '0.275rem',
        padding: '0',
    },
    div3: {
        gridArea: '1 / 4 / 4 / 6',
        borderRadius: '0.275rem',
        padding: '0 1rem',
        overflowY: 'scroll',
        maxHeight: '550px',
    },
    div4: {
        gridArea: '1 / 3 / 4 / 4',
        backgroundColor: 'white',
        borderRadius: '0.275rem',
        padding: '1rem',
    },
    cleanText: {
        fontFamily: 'Helvetica',
        padding: '0',
        margin: '0',
        fontWeight: 'normal',
        color: 'black',
    },
    boxShadow: {
        padding: '1rem',
        boxShadow: '2px 2px 15px #999',
        borderRadius: "1rem",
        background: 'white',
        marginBottom: '1rem',
    }
}

interface MonsterData {
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
    languages: string,
    challenge_rating: number,
    special_abilties: any,
    image: string,
}

const bentoGrid: FC<{ monster: MonsterData }> = (props: { monster: MonsterData }) => {
    if (props.monster.special_abilities) {
        props.monster.special_abilities.map((ability: any) => {
            console.log(':::', ability.name, ability.desc);
        })
    }

    return (
        <div style={styles.container}>
            <div style={styles.bentoGrid}>
                <div style={styles.div1}>
                    <div style={styles.iconTitle}>
                        <div>
                            <span style={styles.iconAlign}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-skull">
                                    <circle cx="9" cy="12" r="1"/>
                                    <circle cx="15" cy="12" r="1"/>
                                    <path d="M8 20v2h8v-2"/>
                                    <path d="m12.5 17-.5-1-.5 1h1z"/>
                                    <path d="M16 20a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20"/>
                                </svg>
                            </span>
                        </div>
                        <div>
                            <h1 style={styles.title}>
                                {props.monster.name}
                            </h1>
                        </div>
                    </div>
                </div>
                <div style={styles.div2}>
                    <div>
                        {props.monster.image ?
                        <img src={`${process.env.DND_API_IMAGE}${props.monster.image}`} width="100%" alt={props.monster.name} />
                        :
                        <img src="https://placehold.co/400x400" width="100%" alt="placeholder" />
                        }
                    </div>
                </div>
                <div style={styles.div3}>
                    <div style={styles.listSkills}>
                        {props.monster.special_abilities.map((ability: any) => {
                            return(
                                <div style={styles.boxShadow}>
                                    <h3 style={styles.cleanText}>{ability.name}</h3>
                                    <p style={styles.cleanText}>{ability.desc}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div style={styles.div4}>
                    <ul>
                        <li>
                            <h3 style={styles.cleanText}>Size: {props.monster.size}</h3>
                        </li>
                        <li>
                            <h3 style={styles.cleanText}>Type: {props.monster.type}</h3>
                        </li>
                        <li>
                            <h3 style={styles.cleanText}>Subtype: {props.monster.subtype}</h3>
                        </li>
                        <li>
                            <h3 style={styles.cleanText}>Alignment: {props.monster.alignment}</h3>
                        </li>
                        <li>
                            <h3 style={styles.cleanText}>Armor Class: {props.monster.armor_class}</h3>
                        </li>
                        <li>
                            <h3 style={styles.cleanText}>Hit Points: {props.monster.hit_points}</h3>
                        </li>
                        <li>
                            <h3 style={styles.cleanText}>Hit Dice: {props.monster.hit_dice}</h3>
                        </li>
                        <li>
                            <h3 style={styles.cleanText}>Speed: {props.monster.speed}</h3>
                        </li>
                        <li>
                            <h3 style={styles.cleanText}>Strength: {props.monster.strength}</h3>
                        </li>
                        <li>
                            <h3 style={styles.cleanText}>Dexterity: {props.monster.dexterity}</h3>
                        </li>
                        <li>
                            <h3 style={styles.cleanText}>Constitution: {props.monster.constitution}</h3>
                        </li>
                        <li>
                            <h3 style={styles.cleanText}>Intelligence: {props.monster.intelligence}</h3>
                        </li>
                        <li>
                            <h3 style={styles.cleanText}>Wisdom: {props.monster.wisdom}</h3>
                        </li>
                        <li>
                            <h3 style={styles.cleanText}>Charisma: {props.monster.charisma}</h3>
                        </li>
                        <li>
                            <h3 style={styles.cleanText}>Languages: {props.monster.languages}</h3>
                        </li>
                        <li>
                            <h3 style={styles.cleanText}>Challenge Rating: {props.monster.challenge_rating}</h3>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default bentoGrid;