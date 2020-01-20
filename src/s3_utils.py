import os

import boto3
import botocore

s3 = boto3.resource(
    service_name='s3',
    aws_access_key_id=os.environ['ASSEMBLIQUE_S3_ACCESS_KEY_ID'],
    aws_secret_access_key=os.environ['ASSEMBLIQUE_S3_SECRET_ACCESS_KEY']
)

b3 = s3.Bucket("assemblique")

S3_BASE_URL = '//assemblique.s3.us-east-2.amazonaws.com'

def s3_file_exists(b3, file_key):
    try:
        b3.Object(file_key).load()
    except botocore.exceptions.ClientError as e:
        if e.response['Error']['Code'] == "404":
            # The object does not exist.
            return False
        else:
            # Something else has gone wrong.
            raise
    return True