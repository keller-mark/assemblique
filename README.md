
Create and activate conda environment:

```sh
conda env create -f environment.yml
source activate assemblique-env
yarn
```

Set AWS environment variables:

```sh
export ASSEMBLIQUE_S3_ACCESS_KEY_ID="my_access_key_id";
export ASSEMBLIQUE_S3_SECRET_ACCESS_KEY="my_secret_access_key";
```

Download and process latest instagram posts:

```sh
bash src/process.sh
yarn deploy
```

