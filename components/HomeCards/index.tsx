import Styles from '../../styles/HomeCards.module.css'
import type { ICardContent } from '../../typings/mainTypes'

const HomeCards = () => {

    const CardText = ({ index, dashTitle, titleCard, contentCard }: ICardContent) => {
        return (
            <div>
                <div className={Styles.containerFirstItemCard}>
                    <div className={Styles.numberCardText}>
                        <h1 className={Styles.letterHeaderCard}>0{index ? index+1 : 1}</h1>
                    </div>

                    <div className={Styles.containerCardContent}>
                        <div className={Styles.containerContentTitleCard}>
                            <hr className={Styles.dashCardTitle}/>
                            <span className={Styles.nextDashTitleCardd} >{dashTitle}</span>
                        </div>

                        <div className={Styles.containerContentCard}>
                            <h1>{titleCard}</h1>
                            <p>{contentCard}</p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

    const itens = [
        {
            dashTitle: 'Get Started',
            titleCard: 'What level of hiker are you?',
            contentCard: 'Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?',
            imageCard: 'https://res.cloudinary.com/publi-node-uploads/image/upload/v1645976809/landing-montain/01_howfze.png',
        },
        {
            dashTitle: 'Hiking Essentials',
            titleCard: 'Picking the right Hiking Gear!',
            contentCard: 'The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have. Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet.',
            imageCard: 'https://res.cloudinary.com/publi-node-uploads/image/upload/v1645965431/landing-montain/02_rbzrrs.png',
        },
        {
            dashTitle: 'where you go is the key',
            titleCard: 'Understand Your Map & Timing',
            contentCard: 'To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction..',
            imageCard: 'https://res.cloudinary.com/publi-node-uploads/image/upload/v1645977814/landing-montain/03_new_size_mfgqpn.png',
        }
    ]

    return (
        <>
            <div className={Styles.containerCards}>
                {itens.map((item: ICardContent, index: number) => {
                    return (
                    <div key={index} className={Styles.flexLayoutCards}>
                        <div className={Styles.contentCard}>
                            <CardText
                                index={index}
                                dashTitle={item.dashTitle}
                                titleCard={item.titleCard} 
                                contentCard={item.contentCard} 
                            />
                        </div>
                        <div className={Styles.containerImageCard}>
                            <img src={item.imageCard} alt="" />
                        </div>
                    </div>
                    )
                })}
            </div>

        </>
    )
}

export default HomeCards;