import Styles from '../../styles/Footer.module.css'
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();

    return (
        <div>
            <div className={Styles.footerGridLayout}>
                <div className={Styles.footerItemGridLeft}>
                    <h1>TRIPER</h1>
                    <p>{t('footer_disclaimer')}</p>
                    <p className={Styles.copyRightItem}>{'Copyright 2019 TRIPER, Inc. Terms & Privacy '}</p>
                </div>

                <div className={Styles.footerItemGridRigth}>
                    <div className={Styles.containerBlockLinks}>
                        <h1>{t('footer_links.More_on_The_Blog')}</h1>
                        <p>{t('footer_links.About_TRIPER')}</p>
                        <p>{t('footer_links.contributors_writers')}</p>
                        <p>{t('footer_links.write_for_us')}</p>
                        <p>{t('footer_links.contact_us')}</p>
                        <p>{t('footer_links.privacy_policy')}</p>
                    </div>

                    <div className={Styles.containerBlockLinks}>
                        <h1>{t('footer_links.more_on_TRIPER')}</h1>
                        <p>{t('footer_links.the_team')}</p>
                        <p>{t('footer_links.Jobs')}</p>
                        <p>{t('footer_links.Press')}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
