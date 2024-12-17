#!/bin/bash
# script for running locally
# chmod +x s.sh && ./s.sh

kill -9 $(lsof -t -i:8080)
npm run serve