import Styles from '../../styles/LeftLinks.module.css'
import { AiFillLinkedin } from 'react-icons/ai'
import { SiGmail, SiSitepoint } from 'react-icons/si'
import { FiYoutube } from 'react-icons/fi'
import { ImNewspaper } from 'react-icons/im'
import { AiFillGithub } from 'react-icons/ai'

interface IParamItem {
    windowWidth: number
}

const LefttLinks = ({ windowWidth }: IParamItem) => {

    const redirect = (link: string) => {
        window.open(link, '_blank');
    }

    return (
        <div className={Styles.containerLeftLinks}>
            <button onClick={() => { redirect('https://www.linkedin.com/in/pedro-lopes-50b3b818a/') }} className={Styles.itemLink}>
                <AiFillLinkedin size={30} />
            </button>
            {/* <button className={Styles.itemLink}>
                <SiGmail size={30} />
            </button> */}
            <button onClick={() => { redirect('https://pedrolopes.tech') }} className={Styles.itemLink}>
                <SiSitepoint size={30} />
            </button>
            <button onClick={() => { redirect('https://www.youtube.com/channel/UCEnWEeD27gzyliBYhRkcnzQ') }} className={Styles.itemLink}>
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

            <button onClick={() => { redirect('https://github.com/Pedrolopesh') }} className={Styles.itemLink}>
                <AiFillGithub size={30} />
            </button>
        </div>
    )
}

export default LefttLinks
