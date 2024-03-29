import { useEffect, useState } from "react";
import Style from '../../styles/HomeBanner.module.css'
import HomeBannerItens from '../HomeBannerItens'
import LefttLinks from '../LefttLinks'
import type { IHomePropsItens } from '../../typings/mainTypes'

const HomeBanner = ({ imageBanner_mobile}: IHomePropsItens) => {
    const [windowWidth, setWindowWidth] = useState(0);
    const [offSet, setOffSet] = useState(0);
    const handleScroll = () => setOffSet(window.pageYOffset)

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    useEffect(() => {
        console.log(window.innerWidth)
        setWindowWidth(window.innerWidth)
    }, [])

    return (
        <>
            <LefttLinks windowWidth={windowWidth} />
            <div style={{ transform:`translateY(${ offSet * 0.4 }px)` }} className={Style.containerFullBanner}> 
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <div className={Style.containerBannerLayout}>
                    {/* <div className={Style.coverBg}></div> */}
                    {/* <img src={windowWidth > 900 ? imageBanner : imageBanner_mobile} alt="montain pic" className={Style.imageBG} /> */}
                    <video 
                        src="https://res.cloudinary.com/publi-node-uploads/video/upload/v1660797187/portfolio/aurora_rmxnjo.mp4"
                        autoPlay 
                        muted 
                        loop
                    ></video>
                </div>
                <div className={Style.containerItensBanner}>
                    <HomeBannerItens />
                </div>
            </div>
        </>
    )
}

export default HomeBanner;