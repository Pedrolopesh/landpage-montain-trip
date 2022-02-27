import { useEffect, useState } from "react";
import Style from '../../styles/Home.module.css'
import HomeBannerItens from '../HomeBannerItens'
import type { IHomePropsItens } from '../../typings/mainTypes'

const HomeBanner = ({ imageBanner, imageBanner_mobile}: IHomePropsItens) => {
    console.info(imageBanner)

    const [windowWidth, setWindowWidth] = useState(0);
    const [offSet, setOffSet] = useState(0);
    const handleScroll = () => setOffSet(window.pageYOffset)

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    useEffect(() => {
        setWindowWidth(window.innerWidth)
    }, [])

    return (
        <>
            <div style={{ transform:`translateY(${ offSet * 0.15 }px)` }} className={Style.containerFullBanner}> 
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <div className={Style.containerBannerLayout}>
                    <div className={Style.coverBg}></div>
                    <img src={windowWidth > 1100 ? imageBanner : imageBanner_mobile} alt="montain pic" className={Style.imageBG} />
                </div>
                <div className={Style.containerItensBanner}>
                    <HomeBannerItens />
                </div>
            </div>
        </>
    )
}

export default HomeBanner;