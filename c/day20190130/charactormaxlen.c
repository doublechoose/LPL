#include<stdio.h>
#include<string.h>

// 在一个字符串里找到最长连续字符，并打印

int main(int argc, char const *argv[])
{
    char* arr = "alsjglasjglssssssjgl33r3ljh3h3k yuhgjhjhoiooooooooooosssvmm";
    int len = strlen(arr);

    // printf("%d",strlen(arr));

    int i, maxLength = 0;
    char ch;
    int tempLen = 0;
    for(i = 0;i<len;i++){
        tempLen=0;
        for(int j=i;j<len;j++){

            if(arr[j] == arr[j+1]){
                ++tempLen;
            }else{
                if(tempLen > maxLength){
                    maxLength = tempLen;
                    ch = arr[j];
                }
                i = j;
                break;
            }
        }
    }
    printf("%c %d",ch,maxLength+1);

    return 0;
}
