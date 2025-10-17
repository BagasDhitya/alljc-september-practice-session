import styles from '@/components/ProfileSection/ProfileSection.module.css'

export default function ProfileSection() {
    return (
        <section className={styles.profile}>
            <h2 className={styles.title}>Profile</h2>
            <p className={styles.subtitle}>
                I'm a Software Engineer skilled in both Code and No-Code development
            </p>
            <div className={styles.content}>
                <div className={styles.about}>
                    <h3>About Me</h3>
                    <p>
                        I'm a Software Engineer with strong expertise in both code-based and no-code development. I specialize in building scalable application using
                        TypeScript, Node.js, and PostgreSQL. Beyond traditional coding, I also leverage no-code platform such as Make.com and N8n to create automated
                        and efficient workflows that integrate seamlessly across different systems.
                    </p>
                </div>
                <div className={styles.photo}>
                    <img
                        src="https://i.pinimg.com/736x/e8/3f/47/e83f478b4ed46314e9e0e4a93e73a985.jpg"
                        alt="Profile photo of Bagas Dhitya Taufiqqi"
                        width={220}
                        height={220}
                        className={styles.image}
                    />
                </div>
                <div className={styles.detail}>
                    <h3>Details</h3>
                    <p>
                        <strong>Name:</strong>
                        <br />
                        Bagas Dhitya Taufiqqi
                    </p>
                    <p>
                        <strong>Profession:</strong>
                        <br />
                        Software Engineer & Lecturer
                    </p>
                    <p>
                        <strong>Location:</strong>
                        <br />
                        Jakarta, Indonesia
                    </p>
                </div>
            </div>
        </section>
    )
}
