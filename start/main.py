from selenium import webdriver
from selenium.webdriver.common.by import By
import time

print('hello')
driver = webdriver.Chrome()
driver.get("http://localhost:3030")

username_field = driver.find_element(By.ID,"email")  
password_field = driver.find_element(By.ID,"password")

username_field.send_keys("zafeer746@gmail.com")
password_field.send_keys("123456")

time.sleep(5)

login_button = driver.find_element(By.XPATH, "//button[@type='submit']")
login_button.click()

time.sleep(5)
file_input = driver.find_element(By.ID, 'upload-btn')

file_input.click()

while True:
    time.sleep(1)




