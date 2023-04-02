[![Build Status](https://travis-ci.org/keller-mark/assemblique.svg?branch=master)](https://travis-ci.org/keller-mark/assemblique)

Create and activate conda environment:

```sh
conda env create -f environment.yml
source activate assemblique-env
yarn
```

Set S3 environment variables:

```sh
export ASSEMBLIQUE_ACCOUNT_ID="my_cloudflare_r2_account_id"
export ASSEMBLIQUE_S3_ACCESS_KEY_ID="my_access_key_id";
export ASSEMBLIQUE_S3_SECRET_ACCESS_KEY="my_secret_access_key";
```

Download and process latest instagram posts:

```sh
bash src/process.sh
yarn deploy
```

