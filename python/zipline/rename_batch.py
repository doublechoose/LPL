import os

dir_path = 'excel/'

files = os.listdir(dir_path)

print(files)


def renamefile(dir_path,file_path):
    dist_path = ''
    if len(file_path.split('.')[0]) > 4 and file_path.endswith('.xlsx'):
        print("%s's length is longer than 4"%file_path)
        dist_path = file_path.split('.')[0]
        dist_path = dist_path[:4]
        
        os.rename(dir_path+file_path,dir_path+dist_path+'.xlsx')

print(files[6])
for f in files:
    renamefile(dir_path,f)
