- how to find the ip in wsl 2

You can get the WSL2 instance IP address easy enough:

wsl -d Ubuntu-18.04 /bin/bash -c "hostname -I | awk '{print $1}'"

$ ip route | grep default | awk '{print $3}'
172.21.128.1

- add host to  C:\Windows\System32\drivers\etc
172.22.241.153 api.hhar.com  hhar.com