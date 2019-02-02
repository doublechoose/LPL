edit: main.o OpeClass.o
	g++ -o edit main.o OpeClass.o

main.o : main.cpp
	g++ -c main.cpp

OpeClass.o : OpeClass.cpp OpeClass.h
	g++ -c OpeClass.cpp OpeClass.h

clean :
	del edit main.o OpeClass.o edit.exe OpeClass.h.gch