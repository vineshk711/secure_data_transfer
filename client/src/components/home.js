import React from 'react'
import image from './images/College Project LOGO.png';
import './css/style.css';


function Home() {
    return (
        <div>
            <title>Secure Data Transfer</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta
                name="description"
                content="Hide your messages inside Images using steganography online, quickly and easily, without having to install any software."
                />
                <meta property="og:site_name" content="Secure Data Transfer" />
                <meta property="og:title" content="Hide Your Messages inside Images Online" />
                <meta
                property="og:description"
                content="Hide your messages inside Images using steganography online, quickly and easily, without having to install any software."
                />
                <meta
                property="og:image"
                content="https://i.pinimg.com/564x/fb/d5/c1/fbd5c10220e100d6f9232206ac30b1c5.jpg"
                />
                <link rel="icon" href="/images/ICON.svg" />
                <link rel="shortcut icon" href="/images/ICON.png" />
                <link rel="preload" href="/css/style.css?12" as="style" />
                <link rel="stylesheet" href="/css/style.css?12" />
                <style
                dangerouslySetInnerHTML={{
                    __html:
                    "\n        .header__logo {\n            margin-bottom: 0.9em !important;\n        }\n    "
                }}
                />
                <header className="header page__header">
                <div className="header__left">
                    <p>
                    <a className="header__logo logo" href="/">
                        <img
                        className="logo__image"
                        style={{
                            position: "relative",
                            alignItems: "center",
                            display: "block",
                            marginLeft: "auto",
                            marginRight: "auto"
                        }}
                        src={image}
                        alt="Secure Data Transfer"
                        width={458}
                        height={73}
                        />
                        {/*yahan logo svg form me lagaya hai */}
                    </a>
                    </p>
                    {/*yahan website ka text hai */}
                    <p className="introduction text">
                    This is the Minor Project of three B.Tech - ECE Students,{" "}
                    <b>Shivam Gupta, Vibhash Vaibhav</b> and <b>Vinesh Kumar.</b>
                    </p>{" "}
                    <p>&nbsp;</p>
                    <p>
                    The Project is about creating a way to combine Steganography and
                    Cryptography together to make an even better secure way of Data
                    Transfer.
                    </p>
                    {/*little introduction about us*/}
                    <p className="header__text">Here's How This Works</p>
                    <ul className="header__list">
                    <li className="header__list-item">
                        <p className="header__text">
                        Click the ENCODE IMAGE button to Encode a message into an image, and
                        wait for further instructions on the next page.
                        </p>
                    </li>
                    <li className="header__list-item">
                        <p className="header__text">
                        Click the DECODE IMAGE button to Decode a message into an image, and
                        wait for further instructions on the next page.
                        </p>
                    </li>
                    </ul>
                </div>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p style={{ textAlign: "center" }}>
                    <a href="/encode" target="blank">
                    <button className="encode_button">Encode Image</button>
                    </a>
                    <a href="/decode" target="blank">
                    <button className="decode_button">Decode Image</button>
                    </a>
                </p>
                </header>
                <footer>
                <h1>About Us</h1>
                </footer>
        </div>
    )
}

export default Home
