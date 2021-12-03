import React from 'react'
import image from './images/College Project LOGO.png';
import './css/style.css';

function Decode() {
    return (
        <div>

            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Decode Image</title>
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
            <header>
                <div className="header__left">
                <a href="/" className="top_ka_logo">
                    <img
                    style={{
                        position: "relative",
                        alignItems: "center",
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto"
                    }}
                    src={image}
                    className="logo__image"
                    alt="Secure Data Transfer"
                    width={458}
                    height={73}
                    />
                    {/*yahan logo svg form me lagaya hai */}
                </a>
                <h1 style={{ textAlign: "center" }}>Decode Page</h1>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p style={{ textAlign: "center" }}>
                    &nbsp;Enter name of the image <input type="text" />
                </p>
                <p>&nbsp;</p>
                <p style={{ textAlign: "center" }}>
                    &nbsp;Enter the key <input type="text" />
                </p>
                <p style={{ textAlign: "center" }}>&nbsp;</p>
                <p style={{ textAlign: "center" }}>
                    <a href target="blank">
                    <button className="decode_button">Decode Image</button>
                    </a>
                </p>
                </div>
            </header>
 
        </div>
    )
}

export default Decode
