#include <stdio.h>

int g1=0, g2=0, g3=0;

int max(int i)

{

    int m1 = 0, m2, m3 = 0, *p_max;

    static n1_max = 0, n2_max, n3_max = 0;

    p_max = (int*)malloc(10);

    printf("打印max程序地址\n");

    printf("in max: 0x%08x\n\n",max);

    printf("打印max传入参数地址\n");

    printf("in max: 0x%08x\n\n",&i);

    printf("打印max函数中静态变量地址\n");

    printf("0x%08x\n",&n1_max); //打印各本地变量的内存地址

    printf("0x%08x\n",&n2_max);

    printf("0x%08x\n\n",&n3_max);

    printf("打印max函数中局部变量地址\n");

    printf("0x%08x\n",&m1); //打印各本地变量的内存地址

    printf("0x%08x\n",&m2);

    printf("0x%08x\n\n",&m3);

    printf("打印max函数中malloc分配地址\n");

    printf("0x%08x\n\n",p_max); //打印各本地变量的内存地址

    if(i) return 1;

    else return 0;

}