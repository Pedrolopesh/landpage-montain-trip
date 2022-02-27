import Styles from '../../styles/LeftLinks.module.css'
import { AiFillLinkedin } from 'react-icons/ai'
import { SiGmail, SiSitepoint } from 'react-icons/si'
import { FiYoutube } from 'react-icons/fi'
import { ImNewspaper } from 'react-icons/im'
import { BsInfoCircle } from 'react-icons/bs'

interface IParamItem {
    windowWidth: number
}

const LefttLinks = ({ windowWidth }: IParamItem) => {
    return (
        <div className={Styles.containerLeftLinks}>
            <button className={Styles.itemLink}>
                <AiFillLinkedin size={30} />
            </button>
            <button className={Styles.itemLink}>
                <SiGmail size={30} />
            </button>
            <button className={Styles.itemLink}>
                <SiSitepoint size={30} />
            </button>
            <button className={Styles.itemLink}>
                <FiYoutube size={30} />
            </button>
            
            {
                windowWidth < 900 ?
                <>
                    <button className={Styles.itemLink}>
                        <ImNewspaper size={30} />
                    </button>
                </> : <> </>
            }

            <button className={Styles.itemLink}>
                <BsInfoCircle size={30} />
            </button>
        </div>
    )
}

export default LefttLinks
