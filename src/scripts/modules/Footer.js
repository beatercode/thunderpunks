import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BodyContext } from '~/context/BodyContext.js'

export const Footer = props => {
    const [CT] = useContext(BodyContext);
    return (
        <footer className="FOOTER">
            <div className="basic">
                <div className="socials">
                    <a className="social" target="_blank" href="https://twitter.com/thunder_punks">
                        <div className="IC">
                            <img src={require('~/assets/images/interface/social-twitter.png').default} alt="" />
                        </div>
                    </a>
                    <a className="social" target="_blank" href="https://t.me/thunderpunkschat">
                        <div className="IC">
                            <img src={require('~/assets/images/interface/social-telegram.png').default} alt="" />
                        </div>
                    </a>
                    <a className="social" target="_blank" href="https://medium.com/@thunderpunks1">
                        <div className="IC">
                            <img src={require('~/assets/images/interface/social-medium.png').default} alt="" />
                        </div>
                    </a>
                    <a className="social" target="_blank" href="https://discord.com/invite/Bm3SJnRsH3">
                        <div className="IC">
                            <img src={require('~/assets/images/interface/social-discord.png').default} alt="" />
                        </div>
                    </a>
                </div>
                <a className="power" target="_blank" href="https://www.thundercore.com/">
                    <div className="logo">
                        <div className="IC">
                            <img src={require('~/assets/images/interface/service-polygon.png').default} alt="" />
                        </div>
                    </div>
                    <div className="text">
                        <p>
                            Powered by thundercore
                        </p>
                    </div>
                </a>
            </div>
            <div className="extra">
                <div className="links">
                    <a className="link" target="_blank" href="https://scan.thundercore.com/address/0x20fa950EE39C62fe18d2e1B865522548A1e029a8">
                        <span>
                            Contract
                        </span>
                    </a>
                    {/*<a className="link" target="_blank" href="https://opensea.io/collection/thunderpunk">*/}
                    {/*    <span>*/}
                    {/*        Opensea*/}
                    {/*    </span>*/}
                    {/*</a>*/}
                    {/*<a className="link" target="_blank" href="https://lootex.io/stores/thunderpunks">*/}
                    {/*    <span>*/}
                    {/*        Lootex*/}
                    {/*    </span>*/}
                    {/*</a>*/}
                    {/*<a className="link" target="_blank" href="https://treasureland.market/collection/0x320f537da591da33dd1a04dcb062434e3d176d3e">*/}
                    {/*    <span>*/}
                    {/*        Treasureland*/}
                    {/*    </span>*/}
                    {/*</a>*/}
                    {/*<a className="link" target="_blank" href={CT.statics.docs.white_paper}>*/}
                    {/*    <span>*/}
                    {/*        White Paper*/}
                    {/*    </span>*/}
                    {/*</a>*/}
                </div>
            </div>
        </footer>
    )
}
