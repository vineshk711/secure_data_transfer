import React, { useState } from "react"
import logo from "./images/College Project LOGO.png"
import "./css/style.css"
import axios from "axios"

function Decode() {
  const [values, setValues] = useState({
    name: "",
    response: "",
    key: "",
    loading: false,
  })

  const [type, setType] = useState("stegno")
  const changeType = (e) => {
    setType(e.target.value)
  }
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value })
  }
  const handleSubmit = (e) => {
    setValues({ ...values, response: "", loading: true })
    e.preventDefault()
    axios
      .post(`http://localhost:3004/api/${type}/get-data`, values)
      .catch((err) => console.log(err))
      .then((res) => {
        console.log(res)
        setValues({
          ...values,
          response: res.data.error ? res.data.error : res.data,
          name: "",
          key: "",
          loading: false,
        })
      })
  }

  const { name, response, loading, key } = values
  return (
    <div>
      <header>
        <div className='header__left'>
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
            <h1>Decode Page</h1>
          </div>
          <table className='form_table' width={800}>
            <tbody>
              <div className='method'>
                <label htmlFor='method'>
                  <select
                    id='method'
                    name='method'
                    className='encrypt_method'
                    value={type}
                    onChange={changeType}
                    // required
                  >
                    <option
                      id='def'
                      selected='selected'
                      value='def'
                      aria-placeholder='stegno'
                    >
                      Choose Type
                    </option>
                    <option id='aes' value='crypto'>
                      Cryptography
                    </option>
                    <option id='des' value='stegno'>
                      Steganography
                    </option>
                  </select>
                </label>
              </div>
              <tr>
                <div className='text'>
                  <input
                    className='textinput'
                    type='text'
                    name='text'
                    value={name}
                    onChange={handleChange("name")}
                    placeholder='Enter file name'
                    //   required
                  />
                </div>
              </tr>
              <p>&nbsp;</p>
              {type == "crypto" && (
                <tr>
                  <div className='text'>
                    <input
                      className='textinput'
                      type='password'
                      name='text'
                      value={key}
                      onChange={handleChange("key")}
                      placeholder='Enter key'
                      //   required
                    />
                  </div>
                </tr>
              )}
            </tbody>
          </table>
          <p style={{ textAlign: "center" }}>&nbsp;</p>
          <p style={{ textAlign: "center" }}>
            <a href target='blank'>
              <button className='decode_button' onClick={handleSubmit}>
                Decode
              </button>
            </a>
          </p>
        </div>
        {loading && <h3>Fetching Data from Server...</h3>}
        {response.length > 0 && <h3>{response}</h3>}
      </header>
    </div>
  )
}

export default Decode
