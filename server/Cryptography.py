#DES and AES encryption and decryption 
from Crypto.Cipher import AES, DES
import sys

def padding8(text):
    while(len(text) % 8 != 0):
            text += ' '
    return text

def padding16(text):
    while(len(text) % 16 != 0):
            text += ' '
    return text

def decode_strip(text):
    text = text.decode('UTF-8')
    return text.rstrip()


def DesEncryption(plain_text, key, mode): 
    des_enc = DES.new(key.encode('utf-8'), mode)
    padded_text = padding8(plain_text) 
    encrypted_text = des_enc.encrypt(padded_text.encode('utf-8'))
    
    file_name = 'encFile'
    print("\nDES ciphertext: ",encrypted_text)

    with open(file_name, "wb") as f:
        f.write(encrypted_text)

def DesDecryption(mode):
    file_name = 'encFile'
    # key = input("Please Enter the key: ")
    key = sys.argv[2]
    if len(key) < 8:
        key = padding8(key)
    with open(file_name, "rb") as f:
        encrypted_text = f.read()

    des_dec = DES.new(key.encode('utf-8'), mode)
    decrypted_text = des_dec.decrypt(encrypted_text)
    print("Origial Text: ", decode_strip(decrypted_text))


def AesEncryption(plain_text, key, mode, IV):
    aes_enc = AES.new(key.encode('utf-8'), mode, IV=IV.encode('utf-8'))
    padded_text = padding16(plain_text)
    encrypted_text = aes_enc.encrypt(padded_text.encode('utf-8'))
    file_name = 'encFile'
    print("\nAES ciphertext: ",encrypted_text)

    with open(file_name, "wb") as f:
        f.write(encrypted_text)


def AesDecryption(mode, IV):
    file_name = 'encFile'
    # key = input("Please Enter the key: ")
    key = sys.argv[2]
    if len(key) < 16:
        key = padding16(key)
    with open(file_name, "rb") as f:
        encrypted_text = f.read()

    aes_dec = AES.new(key.encode('utf-8'), mode, IV=IV.encode('utf-8'))
    decrypted_text = aes_dec.decrypt(encrypted_text)
    print("Original msg: ",decode_strip(decrypted_text))


if __name__ == "__main__":
    
    print("\n1. DES Encryption")
    print("2. DES Decryption")
    print("3. AES Encryption")
    print("4. AES Decryption")
    
    # ch = int(input("\nEnter your choice: "))
    ch = int(sys.argv[1])
    if ch == 1 or ch == 3:
        # plain_text = input("Enter Text: ")
        plain_text = sys.argv[2]

    if ch == 1:
        mode = DES.MODE_ECB
        # key = input("Enter the 8 bit key: ")
        key = sys.argv[3]
        if len(key) < 8:
            req_key = padding8(key)
            DesEncryption(plain_text, req_key, mode)
        else:
            DesEncryption(plain_text, key, mode)
    elif ch == 3:
        mode = AES.MODE_CBC
        IV='0123456789abcdef'
        # key = input("Enter the 16 bit key: ")
        key = sys.argv[3]
        if len(key) < 16:
            req_key = padding16(key)
            AesEncryption(plain_text, req_key, mode, IV)
        else:
            AesEncryption(plain_text, key, mode, IV)
    elif ch == 2:
        mode = DES.MODE_ECB
        DesDecryption(mode)
    elif ch == 4:
        mode = AES.MODE_CBC
        IV='0123456789abcdef'
        AesDecryption(mode, IV)       