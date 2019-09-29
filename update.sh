#!/bin/bash



if [ ! -d $1 ]; then
    # Enter this block if the directory doesn't exist
    git clone --recurse-submodules $2 $1
fi

# Change directory to our repo
cd $1
# Update all the submodules within and push it
git pull
git submodule update --recursive --remote
git push
git add --all
git commit -m "Updating submodule. This is done automatically."
git push
# Get out (probably unnecessary)
cd ..