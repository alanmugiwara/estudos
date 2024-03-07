import pyautogui as pag
import time as tm
link = 'https://www.vunesp.com.br/Candidato'

pag.PAUSE = 0.5

pag.press('win')                
pag.write('brave')
pag.press('enter')
tm.sleep(0.5)
pag.write(link)
pag.press('enter')
# print(pag.position())
tm.sleep(0.3)
pag.click(x=744, y=422)
tm.sleep(0.5)
pag.press('tab')
tm.sleep(0.5)
pag.click(x=829, y=435)
tm.sleep(0.5)
pag.click(x=925, y=501)
tm.sleep(1)

def tab(apertos):
    pag.press('tab', apertos, 0.2)
    tab(3)
pag.press('enter')
