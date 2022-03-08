import Styles from '../../styles/HomeBannerItens.module.css'
import { ImNewspaper } from 'react-icons/im'
import { useTranslation } from "react-i18next";

const HomeBannerItens = () => {
    const { t } = useTranslation();

    return (
        <div>
            <div className={Styles.headerGridLayout}>
                <div className={Styles.headerItensGrid}>
                    <h1>MNTN</h1>
                </div>

                <div className={Styles.headerItensGrid}>
                    <button className={Styles.perfectButtonHEader}>
                        <ImNewspaper size={30} color="#fff" />
                        <span className={Styles.mainBannerLabel}>News Letter</span>
                    </button>
                </div>
            </div>

            <div className={Styles.containerBannerItem}>
                <div className={Styles.containerDashItemBanner}>
                    <hr className={Styles.dashTitleBanner}/>
                    <span className={Styles.nextDashTitleBanner} >A Hiking guide</span>
                </div>

                <div className={Styles.containerTitleMainBanner}>
                    <h1>{t('welcome_bg_title')}</h1>
                </div>
            </div>
        </div>
    )
}

export default HomeBannerItens
