- how to find the ip in wsl 2

You can get the WSL2 instance IP address easy enough:

bash -c "hostname -I | awk '{print $1}'"

- add host to  C:\Windows\System32\drivers\etc
172.22.241.153 api.hhar.com  hhar.com

xxxxx$ ip route | grep default | awk '{print $3}'

- to start docker run:
sudo service docker start

- yarn access problem
sudo chmod -R 777 path/to/project


- debug node: NODE_OPTIONS='--inspect=0.0.0.0:9100'