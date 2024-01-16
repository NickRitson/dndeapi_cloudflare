import { FC } from 'hono/jsx';

const styles = {
    nav: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#12181d',
        padding: '1rem',
    },
    btnPrimary: {
        backgroundColor: '#171d21',
        color: 'gray',
        padding: '0.5rem 1rem',
        borderRadius: '0.375rem',
        border: 'none',
        cursor: 'pointer',
        boxShadow: '5px 5px 10px 1px #12181d',
    },
    h1: {
        fontFamily: 'Helvetica',
        fontSize: '2rem',
        color: 'white',
        padding: '0',
        margin: '0 0 0 1rem',
    },
    finePrint: {
        fontFamily: 'Helvetica',
        fontSize: '0.75rem',
        color: 'gray',
        padding: '0',
        margin: '0 0 0 1rem',
    },
    navContainer: {
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    navBrand: {
        display: 'flex',
        alignItems: 'center',
    },
    navButtonContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
    },
    navSearch: {
        backgroundColor: '#171d21',
        color: 'gray',
        padding: '0.5rem 1rem',
        borderRadius: '0.375rem',
        border: 'none',
        cursor: 'pointer',
        boxShadow: '5px 5px 10px 1px #12181d',
    },
    iconStyle: {
        width: '2rem',
        height: '2rem',
        padding: '5px',
        backgroundColor: 'red',
        borderRadius: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
};

const Navbar: FC = () => {
    return (
        <nav style={styles.nav}>
            <div style={styles.navContainer}>
                <div style={styles.navBrand}>
                    <div>
                        <span style={styles.iconStyle}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dices">
                            <rect width="12" height="12" x="2" y="10" rx="2" ry="2"/>
                            <path d="m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6"/>
                            <path d="M6 18h.01"/>
                            <path d="M10 14h.01"/>
                            <path d="M15 6h.01"/>
                            <path d="M18 9h.01"/>
                            </svg>
                        </span>
                    </div>
                    <div>
                        <h1 style={styles.h1}>DNDE - API</h1>
                        <small style={styles.finePrint}>documentation coming soon</small>
                    </div>
                </div>
                <div style={styles.navButtonContainer}>
                    <div>
                        <input style={styles.navSearch} type="text" disabled placeholder="search | disabled" />
                    </div>
                    <div>
                        <button style={styles.btnPrimary}>aboleth</button>
                    </div>
                    <div>
                        <button style={styles.btnPrimary}>skeleton</button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;