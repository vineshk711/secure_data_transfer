import React, { useState } from "react"
import logo from "./images/College Project LOGO.png"
import "./css/style.css"
import axios from "axios"

function Encode() {
  const [cryptoVal, setCryptoVal] = useState({
    name: "",
    message: "",
    key: "",
    typeOfAlgo: "",
    loading: false,
    response: ""
  })

  const [stegnoVal, setStegnoVal] = useState({
    name: "",
    message: "",
    loding: "",
    response: ""
  })
  const [file, setFile] = useState(null)

  const selectFile = (e) => {
    setFile(e.target.files[0])
  }
  const handleCryptoChange = (name) => (event) => {
    setCryptoVal({ ...cryptoVal, [name]: event.target.value })
  }
  const handleStegnoChange = (name) => (event) => {
    setStegnoVal({ ...stegnoVal, [name]: event.target.value })
  }

  const encriptText = (e) => {
    e.preventDefault()
    setCryptoVal({ ...cryptoVal, loading: true, response: "" })
    e.preventDefault()
    axios
      .post("http://localhost:3004/api/crypto/post-data", cryptoVal)
      .catch((err) => console.log(err))
      .then((res) => {
        setCryptoVal({
          ...cryptoVal,
          response: res.data.error ? res.data.error : res.data.message,
          name: "",
          key: "",
          typeOfAlgo: "",
          message: "",
          loading: false,
        })
      })
  }
  const encodeImage = (e) => {
    e.preventDefault()
    setCryptoVal({ ...stegnoVal, loading: true, response: "" })
    console.log("clicked")
    const form = new FormData()
    form.append("name", stegnoVal.name)
    form.append("message", stegnoVal.message)
    form.append("image", file)

    axios({
      method: "post",
      url: "http://localhost:3004/api/stegno/post-data",
      data: form,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .catch((err) => console.log(err))
      .then((res) => {
        console.log(res.data)
        setStegnoVal({
          ...stegnoVal,
          response: res.data.error ? res.data.error : res.data.message,
          name: "",
          message: "",
          loading: false,
        })
      })
  }

  return (
    <div>
      <meta charSet='UTF-8' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <title>Encode Image</title>
      <meta
        name='description'
        content='Hide your messages inside Images using steganography online, quickly and easily, without having to install any software.'
      />
      <meta property='og:site_name' content='Secure Data Transfer' />
      <meta
        property='og:title'
        content='Hide Your Messages inside Images Online'
      />
      <meta
        property='og:description'
        content='Hide your messages inside Images using steganography online, quickly and easily, without having to install any software.'
      />
      <meta
        property='og:image'
        content='https://i.pinimg.com/564x/fb/d5/c1/fbd5c10220e100d6f9232206ac30b1c5.jpg'
      />
      <link rel='icon' href='/images/ICON.svg' />
      <link rel='shortcut icon' href='/images/ICON.png' />
      <link rel='preload' href='/css/style.css?12' as='style' />
      <link rel='stylesheet' href='/css/style.css?12' />
      <header className='header'>
        <div className='logo'>
          {" "}
          {/*yahan logo lagaya hai */}
          <a href='/'>
            <img
              className='sidelogo_image'
              src={logo}
              alt='Secure Data Transfer'
              width={458}
              height={73}
            />
          </a>
        </div>
        <div className='title'>
          <h1>Encode Page</h1>
        </div>
        <form
        //   className='encode_form'
        //   action='Results.html'
        //   method='get'
        //   encType='multipart/form-data'
        >
          <table className='form_table' width={800}>
            <tbody>
              <tr>
                <td>
                  <h2>Cryptography</h2>
                </td>
                <td>
                  <h2>Steganography</h2>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='text'>
                    <input
                      className='textinput'
                      type='text'
                      name='text'
                      value={cryptoVal.name}
                      onChange={handleCryptoChange("name")}
                      placeholder='Enter file name'
                      //   required
                    />
                  </div>
                </td>
                <td>
                  <div>
                    <input
                      name='File_Selector'
                      multiple='multiple'
                      type='file'
                      // value={image}
                      onChange={selectFile}
                      required
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='key'>
                    <input
                      type='password'
                      name='key'
                      value={cryptoVal.key}
                      onChange={handleCryptoChange("key")}
                      placeholder='Enter key'
                      //   required
                    />
                  </div>
                </td>
                <td>
                  <div>
                    <input
                      type='text'
                      name='encoded_text'
                      placeholder='Enter message'
                      value={stegnoVal.message}
                      onChange={handleStegnoChange("message")}
                      required
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div>
                    <input
                      type='text'
                      name='message'
                      placeholder='Enter message'
                      value={cryptoVal.message}
                      onChange={handleCryptoChange("message")}
                      required
                    />
                  </div>
                </td>
                <div>
                  <input
                    type='text'
                    name='image_name'
                    placeholder='Enter file name'
                    value={stegnoVal.name}
                    onChange={handleStegnoChange("name")}
                    required
                  />
                </div>
                <td></td>
              </tr>
              <tr>
                <td>
                  <div className='method'>
                    <label htmlFor='method'>
                      <select
                        id='method'
                        name='method'
                        className='encrypt_method'
                        value={cryptoVal.typeOfAlgo}
                        onChange={handleCryptoChange("typeOfAlgo")}
                        // required
                      >
                        <option
                          id='def'
                          selected='selected'
                          value='def'
                          aria-placeholder='Choose Encyption Method'
                        >
                          Choose Encyption Method
                        </option>
                        <option id='aes' value='AES'>
                          AES
                        </option>
                        <option id='des' value='DES'>
                          DES
                        </option>
                      </select>
                    </label>
                  </div>
                </td>
                <td>
                  <button className='submit_button' onClick={encodeImage}>
                    Encode Image
                  </button>
                </td>
              </tr>
            </tbody>
            <div>
              <button className='submit_button' onClick={encriptText}>
                Encript Text
              </button>
            </div>
          </table>
        </form>
        {/* as per shivam's request यहाँ loading का animation लगाने की कोशिश की थी, लेकिन उसके लौड़े लग गए*/}
        {/* <div class="loader-wrapper"> 
          <span class="loader"><span class="loader-inner"></span></span>
      </div>
       */}
        {cryptoVal.response.length > 0 && <h3>{cryptoVal.response}</h3>}
        {stegnoVal.response.length > 0 && <h3>{stegnoVal.response}</h3>}
        {stegnoVal.loding && <h3>Loading...</h3>}
        {cryptoVal.loding && <h3>Loading...</h3>}
      </header>
    </div>
  )
}

export default Encode
