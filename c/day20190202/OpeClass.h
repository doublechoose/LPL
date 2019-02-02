class OpeClass
{
	friend int func(const OpeClass xx);
public:
	OpeClass(void);
	OpeClass(int x,int y);
	~OpeClass(void);
private:
	int width;
	int height;
};