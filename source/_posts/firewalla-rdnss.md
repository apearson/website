---
title: Firewalla IPv6 RDNSS
date: 2/25/2023
---

## TLDR

To make the Firewalla advertise an IPv6 DNS server to the network, make the following file:

Temporary Solution:
### File:
  `~/.router/config/dhcp/conf/br0_custom.conf`
### Contents:
```
  dhcp-option=option6: dns-server,[fd00::1]
```

## Why this works

coming soon...