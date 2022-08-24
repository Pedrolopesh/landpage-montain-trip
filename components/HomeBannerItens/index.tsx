import Styles from '../../styles/HomeBannerItens.module.css'
import { IoLanguageOutline } from 'react-icons/io5'
import { useTranslation } from "react-i18next";
import i18n from 'i18next'
import { useState, useEffect } from 'react';

const HomeBannerItens = () => {
    const [showLangs, setShowLangs] = useState(false)

    const choseLang = () => {
        setShowLangs(!showLangs)
    }

    const changeLang = (newLang: string) => {
        i18n.changeLanguage(newLang)
    }

    const { t } = useTranslation();

    const langs = ['pt', 'en']

    return (
        <div>
            <div className={Styles.headerGridLayout}>
                <div className={Styles.headerItensGrid}>
                    <h1>TRIPER</h1>
                </div>

                <div className={Styles.headerItensGrid}>
                    <div className={Styles.selectContainerLang}>
                        <button onClick={() => {choseLang()}}> 
                            <IoLanguageOutline size={20} color="#fff" />
                            <p>{i18n.language}</p>
                        </button>
                    </div>

                    { showLangs && langs &&                        
                        <div className={Styles.containerAvailbleLangs}>
                            {langs.map((item, index) => {
                                return (
                                    <button key={index} onClick={() => {changeLang(item)}}>
                                        <p>{item}</p>
                                    </button>
                                )
                            })}
                        </div>
                    }

                        {/* <span className={Styles.mainBannerLabel}></span> */}
                </div>
            </div>

            <div className={Styles.containerBannerItem}>
                <div className={Styles.containerDashItemBanner}>
                    <hr className={Styles.dashTitleBanner}/>
                    <span className={Styles.nextDashTitleBanner} >{t('tag_title')}</span>
                </div>

                <div className={Styles.containerTitleMainBanner}>
                    <h1>{t('welcome_bg_title')}</h1>
                </div>
            </div>
        </div>
    )
}

export default HomeBannerItens
