import numpy as np
from PIL import Image
import sys

def Encode(src, message, dest):
    
    img = Image.open(src, 'r')      #using PIL to open file
    width, height = img.size        
    np_img = np.array(list(img.getdata()))  #converting image into numpy array

    if img.mode == 'RGB':
        n = 3
    elif img.mode == 'RGBA':
        n = 4
    total_pixels = np_img.size//n           #total number of pixels in the image

    message += "$t0p"                       #delimiter to stop converting when encountered
    #ord() to convert character into ASCII value,  08b is used to retain leading zeros whlie converting to binary
    bin_message = ''.join([format(ord(i), "08b") for i in message])  
    req_pixels = len(bin_message)

    if req_pixels > total_pixels:
        print("Error! Use a larger image file!!")
    else:
        index = 0
        for p in range(total_pixels):
            for q in range(0, 3):
                if index < req_pixels:
                    np_img[p][q] = int(bin(np_img[p][q])[2:9] + bin_message[index], 2)
                    index += 1
    
    np_img = np_img.reshape(height, width, n)
    enc_img = Image.fromarray(np_img.astype('uint8'), img.mode) #converting numpy array to pillow image
    enc_img.save(dest)
    print("Image encoded successfully")

def Decode(src):
        
    img = Image.open(src, 'r')
    np_img = np.array(list(img.getdata()))

    if img.mode == 'RGB':
        n = 3
    elif img.mode == 'RGBA':
        n = 4
    total_pixels = np_img.size//n

    hidden_bits = ""
    for p in range(total_pixels):
        for q in range(0, 3):
            hidden_bits += (bin(np_img[p][q])[2:][-1])

    hidden_bits = [hidden_bits[i:i+8] for i in range(0, len(hidden_bits), 8)]

    message = ""
    for i in range(len(hidden_bits)):
        if message[-4:] == "$t0p":
            break
        else:
            message += chr(int(hidden_bits[i], 2))
    
    if "$t0p" in message:
        print("Hidden Message:", message[:-4])
    else:
        print("No Hidden Message Found")

if __name__ == "__main__":
    # func = input()
    func = sys.argv[1]


    if func == 'encode':
        # src = input("Enter Source Image Path: ")
        src = sys.argv[2]
        # message = input("Enter Message to Hide: ")
        message = sys.argv[3]
        # dest = input("Enter Destination Image Path: ")
        dest = sys.argv[4]
        print("Encoding...")
        Encode(src, message, dest)

    elif func == 'decode':
        # src = input("Enter Source Image Path: ")
        src = sys.argv[2]
        # print("Decoding...")
        Decode(src)

    else:
        print("ERROR: Invalid option chosen")