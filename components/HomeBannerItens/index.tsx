import Styles from '../../styles/HomeBannerItens.module.css'
import { ImNewspaper } from 'react-icons/im'

const HomeBannerItens = () => {
    return (
        <div>
            <div className={Styles.headerGridLayout}>
                <div className={Styles.headerItensGrid}>
                    <h1>MNTN</h1>
                </div>

                <div className={Styles.headerItensGrid}>
                    <a href="" target='_blank'> About us</a>
                    <span style={{ color: '#fff'}}>|</span>
                    <a href="" target='_blank'> Creator </a>
                </div>

                <div className={Styles.headerItensGrid}>
                    <ImNewspaper size={30} color="#fff" />
                    <a href="" target='_blank' > News Letter </a>
                </div>
            </div>

            <div className={Styles.containerBannerItem}>
                <div className={Styles.containerDashItemBanner}>
                    <hr className={Styles.dashTitleBanner}/>
                    <span className={Styles.nextDashTitleBanner} >A Hiking guide</span>
                </div>

                <div className={Styles.containerTitleMainBanner}>
                    <h1>Be prepared for the Mountains and beyond!</h1>
                </div>
            </div>
        </div>
    )
}

export default HomeBannerItens
