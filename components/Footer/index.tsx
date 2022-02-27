import Styles from '../../styles/Footer.module.css'

const Footer = () => {
    return (
        <div>
            <div className={Styles.footerGridLayout}>
                <div className={Styles.footerItemGridLeft}>
                    <h1>MNTN</h1>
                    <p>{'Get out there & discover your next slope, mountain & destination!'}</p>
                    <p className={Styles.copyRightItem}>{'Copyright 2019 MNTN, Inc. Terms & Privacy '}</p>
                </div>

                <div className={Styles.footerItemGridRigth}>
                    <div className={Styles.containerBlockLinks}>
                        <h1>More on The Blog</h1>
                        <p>About MNTN</p>
                        <p>{'Contributors & Writers'}</p>
                        <p>{'Write For Us'}</p>
                        <p>{'Contact Us'}</p>
                        <p>{'Privacy Policy'}</p>
                    </div>

                    <div className={Styles.containerBlockLinks}>
                        <h1>More on MNTN</h1>
                        <p>{'The Team'}</p>
                        <p>{'Jobs'}</p>
                        <p>{'Press'}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
