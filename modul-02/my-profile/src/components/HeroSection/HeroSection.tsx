import styles from '@/components/HeroSection/HeroSection.module.css'

export default function HeroSection() {
    return (
        <section className={styles.hero}>
            <div className={styles.textContainer}>
                <div className={styles.circle}></div>
                <h1 className={styles.title}>
                    Hi, I'm <br />
                    Bagas Dhitya Taufiqqi
                </h1>
                <p className={styles.desc}>
                    I'm a Software Engineer and Fullstack Web Development Lecturer at Purwadhika Digital School.
                    I'm passionate about building scalable web applications and sharing knowledge through teaching and mentoring.
                </p>
                <button className={styles.button}>READ MORE</button>
            </div>
            <div className={styles.imageContainer}>
                <img
                    src="https://i.pinimg.com/736x/e8/3f/47/e83f478b4ed46314e9e0e4a93e73a985.jpg"
                    alt="Bagas Dhitya Taufiqqi"
                    width={500}
                    height={500}
                    className={styles.image}
                />
            </div>
        </section>
    )
}
