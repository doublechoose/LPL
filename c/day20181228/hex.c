#include <stdio.h>
#include <stdlib.h>
#include <math.h>

int main(int argc, char const *argv[])
{
    FILE *fp1, *fp2;
    char a[5];
    int b[5];
    int n, i;
    int sum = 0;

    if ((fp1 = fopen("IN3.txt", "r")) == NULL)
    {
        printf("file1 opened failed!\n");
        exit(0);
    }
    if ((fp2 = fopen("out3.txt", "w")) == NULL)
    {
        printf("file2 opened failed!\n");
        exit(0);
    }
    fgets(a,n,fp1);
    n = sizeof(a);
    printf("%s\n",a);

    fputs(a,fp2);

    return 0;
}
