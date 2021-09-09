file = open('name.txt','w')
for i in range(65,91):
    fullstr  = " - ### **{}** <br>".format(chr(i)) + "\n"
    file.write(fullstr)
file.close()