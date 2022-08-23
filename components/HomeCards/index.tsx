import Styles from '../../styles/HomeCards.module.css'
import type { ICardContent } from '../../typings/mainTypes'
import { useTranslation } from "react-i18next";
import { useState, useEffect } from 'react'

const HomeCards = () => {
    const [renderAfterLang, setRenderAfterLang] = useState(false)

    const { t } = useTranslation();

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
                            <span className={Styles.nextDashTitleCardd} dangerouslySetInnerHTML={{ __html: t(dashTitle) }}></span>
                        </div>

                        <div className={Styles.containerContentCard}>
                            <h1 dangerouslySetInnerHTML={{ __html: t(titleCard) }}></h1>
                            <p dangerouslySetInnerHTML={{ __html: t(contentCard) }}></p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

    const itens = [
        {
            dashTitle: 'card_trips.card_pre_title_1',
            titleCard: 'card_trips.card_title_1',
            contentCard: 'card_trips.card_description_1',
            imageCard: 'https://res.cloudinary.com/publi-node-uploads/image/upload/v1645976809/landing-montain/01_howfze.png',
        },
        {
            dashTitle: 'card_trips.card_pre_title_2',
            titleCard: 'card_trips.card_title_2',
            contentCard: 'card_trips.card_description_2',
            imageCard: 'https://res.cloudinary.com/publi-node-uploads/image/upload/v1645965431/landing-montain/02_rbzrrs.png',
        },
        {
            dashTitle: 'card_trips.card_pre_title_3',
            titleCard: 'card_trips.card_title_3',
            contentCard: 'card_trips.card_description_3',
            imageCard: 'https://res.cloudinary.com/publi-node-uploads/image/upload/v1645977814/landing-montain/03_new_size_mfgqpn.png',
        }
    ]

    useEffect(() => {
        setRenderAfterLang(true)
    }, [useTranslation])

    return (
        <>
            <div className={Styles.containerCards}>
                {renderAfterLang && itens.map((item: ICardContent, index: number) => {
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