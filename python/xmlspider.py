from scrapy.spiders import SitemapSpider

class MySpider(SitemapSpider):
    name = 'MySpider'

    sitemap_urls = ['https://ebchina.site/sitemap.xml']

    sitemap_rules = [
        ('/center/detail/','parse_center'),
        ('/report/detail/','parse_report'),
        ('/speech/detail/','parse_speech'),
    ]

    
    def parse_center(self,response):
        pass
        self.log("---------------- parse_center parse item ----------------------")
        self.log("parse_center %s"%response.url)
    def parse_report(self,response):
        pass
        self.log("---------------- parse_report parse item ----------------------")
        self.log("parse_report %s"%response.url)
    def parse_speech(self,response):
        pass
        self.log("---------------- parse_speech parse item ----------------------")
        self.log("parse_speech %s"%response.url)
