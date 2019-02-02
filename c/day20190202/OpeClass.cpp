# include "OpeClass.h"

OpeClass::OpeClass(void)
{
    width = 50;
    height=50;
}

OpeClass::OpeClass(int x,int y):width(x),height(y){

}

OpeClass::~OpeClass(){
    
}

int func(const OpeClass xx){
    return xx.height * xx.width;
}