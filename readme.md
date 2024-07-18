# Welcome to Heatwave Gen AI Demo

## !!! Work in progress !!!

this demo RAG on HeatWave GenAI

- **Prerequisites:**
  1. OCI Account [(Click here to SignUp)](https://www.oracle.com/il-en/cloud/free/) / [(Click Here to Login)](https://www.oracle.com/cloud/sign-in.html)
  2. VCN [(Click here to create)](/VCN.md)
  3. Instance [(Click here to create)](/compute.md)

# steps:

1. Create an OCI account:

2. create vcn
3. open fw rules
4. create instance
5. connect to instance - sh -i ~/ssh/june.key opc@151.145.84.23
6. Install Git -
   `sudo dnf install git -y`

Install nvm - curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

$ exit
reconnect to server
$ nvm install --lts

$ node -v -> v20.15.1

$ npm install --global yarn
$ npm install -g pm2

7. $ git clone https://github.com/OCI-IL/HeatwaveGenAIDemo.git
8. $ cd HeatwaveGenAIDemo
9. $ yarn
10. cd src
11. ./create_env.sh
    $ cd ..

$ sudo firewall-cmd --zone=public --permanent --add-port=3003/tcp
$ sudo firewall-cmd --zone=public --permanent --add-port=3001/tcp
$ sudo firewall-cmd --reload

pm2 start ecosystem.config.js
pm2 save
pm2 startup systemd
The pm2 startup systemd command will generate a command that you need to run with sudo. It usually looks like this:
sudo env PATH=$PATH:/home/opc/.nvm/versions/node/v20.15.1/bin /home/opc/.nvm/versions/node/v20.15.1/lib/node_modules/pm2/bin/pm2 startup systemd -u opc --hp /home/opc
