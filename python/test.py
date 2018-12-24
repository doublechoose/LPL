
import aiutil
# from proto import base_pb2,account_pb2,account_pb2_grpc,order_pb2,
from aiutil import data_process
import sys
import os
stock_code = '000001.SZ'
start_date='20170704'
end_date='20180718'
model_url = 'http://172.16.89.145:9006/tf/models/third_model.h5'
init_num = 1000
per_num = 100
# import os
# cwd = os.getcwd()
# sys.path.append(cwd)
data_process.run_main(stock_code, start_date, end_date, model_url,init_num,per_num)