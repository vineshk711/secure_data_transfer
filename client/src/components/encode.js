import React, {useState} from 'react'
import image from './images/College Project LOGO.png';
import './css/style.css';


function Encode() {
    const [values, setValues] = useState({
        name: "",
        message: ""
    })
    const handleChange = name => event => {
        setValues({...values, [name]: event.target.value})
    }


    const {name, message} = values
    return (
        <div>
            {JSON.stringify(values)}
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Encode Image</title>
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
                <a className="top_ka_logo" href="/">
                    <img
                    className="logo__image"
                    style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
                    src={image}
                    alt="Secure Data Transfer"
                    width={458}
                    height={73}
                    />
                    {/*yahan logo svg form me lagaya hai */}
                </a>
                <h1 style={{ textAlign: "center" }}>Encode Page</h1>
                <p>&nbsp;</p>
                <div>
                    <p>&nbsp;</p>
                    <h2 style={{ textAlign: "center" }}>CryptoGraphy</h2>
                    <p>&nbsp;</p>
                    <p style={{ textAlign: "center" }}>
                    &nbsp;Enter your text <input type="text" />
                    </p>
                    <p>&nbsp;</p>
                    <p style={{ textAlign: "center" }}>
                    &nbsp;Enter the key <input type="text" />
                    </p>
                    <p style={{ textAlign: "center" }}>&nbsp;</p>
                    <div style={{ textAlign: "center" }}>
                    <label className="method header__method" htmlFor="method">
                        {" "}
                        <span className="method__text">Choose Encryption method </span>
                        <select id="meth" className="encrypt_method">
                        <option id="def" selected="selected" value="def">
                            Encyption Method
                        </option>
                        <option id="aes" value="aes">
                            AES
                        </option>
                        <option id="des" value="des">
                            DES
                        </option>
                        </select>
                    </label>
                    </div>
                    <p>&nbsp;</p>
                </div>
                </div>
                <p>&nbsp;</p>
                <div>
                <h2 style={{ textAlign: "center" }}>SteganoGraphy</h2>
                <p>&nbsp;</p>
                <p style={{ textAlign: "center", objectPosition: "center" }}>
                    <input
                    id="fileSelector"
                    className="files__input-files"
                    multiple="multiple"
                    type="file"
                    />
                </p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p style={{ textAlign: "center" }}>
                    &nbsp;Enter the name of your message file
                    <input type="text" value={name} onChange={handleChange('name')}/>
                </p>
                <p>&nbsp;</p>
                <p style={{ textAlign: "center" }}>
                    &nbsp;Enter the message
                    <input type="text" value={message} onChange={handleChange('message')}/>
                </p>
                <p>&nbsp;</p>
                <p style={{ textAlign: "center" }}>
                    <a href target="blank">
                    <button className="encode_button">Encode Image</button>
                    </a>
                </p>
                </div>
            </header>
        

        </div>
    )
}

export default Encode
