from proto import data_process


stock_code = '399300.SZ'
start_date = '20180101'
end_date = '20181011'
model_url = 'http://172.16.89.145:9006/tf/models/third_model.h5'


data_process.run_main(stock_code, start_date, end_date, model_url)