#!/bin/bash
# Konek ke database latihan QA
docker exec -it pg-qa-latihan psql -U qa -d latihan_shop
