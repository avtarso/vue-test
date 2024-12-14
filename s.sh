#!/bin/bash
# script for running locally
# chmod +x s.sh && ./s.sh

kill -9 $(lsof -t -i:5173)
npm run dev